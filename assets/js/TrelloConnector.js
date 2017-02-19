/**
 * Created by hesslau on 2/5/17.
 */

/* -------- get Positive Action Project from Trello board -----*/

// todo: support markdown in card description

// defining constants
const NAME_OF_LINKS_CHECKLIST = "Actions";
const NAME_OF_ADDITIONAL_LINKS_CHECKLIST = "Resources";
const ID_OF_ACTION_CENTER_BOARD = "UZ6Myv4E";

// function to add a card to the cards container
var addCard = function(card) {
    var rendered = Mustache.render(settings.templateCard, {
        id: card.id,
        title: card.name,
        description: card.desc,
        excerpt: card.desc.slice(0,100) + '...'
    });
    $('.cards-container').append(rendered);

    // modals need to be seperate from card
    var rendered = Mustache.render(settings.templateModal, {
        id: card.id,
        title: card.name,
        description: card.desc,
        excerpt: card.desc.slice(0,100) + '...'
    });
    $('body').append(rendered);
};

var addCover = function(card) {
    Trello.get('/cards/'+card.id+'/attachments/'+card.idAttachmentCover,function(response) {
        var cover = $('#'+card.id+' .card-cover, #modal-'+card.id+' .card-cover').attr('src',response.url);
    });
};

var addLabels = function(card) {
    for(var i in card.idLabels) {
        Trello.get('labels/'+card.idLabels[i], function(response) {
            var rendered = Mustache.render(settings.templateCardLabel,{
                name: response.name
            });
            $('#'+card.id+' .card-label').append(rendered);
        });
    }
};

// function to add the links to the card
var addLinksToCard = function(checklist) {

    for (var index in checklist.checkItems) {

        // set the object
        var item = checklist.checkItems[index];

        // apply regex to mach "[Title] URL"
        var regex = item.name.match(/\[(.*)\](.*)/);

        var selector, template;
        switch (checklist.name.toLowerCase()) {
            case NAME_OF_LINKS_CHECKLIST.toLowerCase():
                template = settings.templateCardAction;
                selector = '.card-action';
                break;
            case NAME_OF_ADDITIONAL_LINKS_CHECKLIST.toLowerCase():
                template = settings.templateCardResource;
                selector = '.card-resource';
                break;
            default: return;
        }

        // check if items of this check list are supposed to appear on the card
        // render regex into template
        var link = Mustache.render(template, {
            title: regex[1].trim(),
            url: regex[2].trim()
        });
        $('#' + checklist.idCard + ' '+selector).append(link);
    }
};

var settings = {
    templateCard: '',
    templateCardAction: '',
    templateCardResource: '',
    templateCardLabel: ''
};

var getCardsFromTrello = function(_settings) {
    settings = _settings;

    Trello.get('boards/'+ID_OF_ACTION_CENTER_BOARD+'/cards', function(cards) {
        for(var i in cards) {
            var card = cards[i];

            addCard(card);
            addCover(card);
            addLabels(card);
            settings.callback();

            // get checklists for links
            for(var j in card.idChecklists) {
                Trello.get('/checklist/'+card.idChecklists[j],addLinksToCard);
            }

        }
    });
};
