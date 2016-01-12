<?php
function get_stylesheet_directory_uri() {
  return ".";
}

?>
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" type="text/css" media="all" href="<?php echo get_stylesheet_directory_uri();?>/css/front-page.css" />
</head>
<body>

<!-- headlines -->
<div class="container">

  <div class="row">
    <div class="col s10 l12 m10">
      <img src="<?php echo get_stylesheet_directory_uri();?>/images/focallocal-logo.png" class="logo">
    </div>
  </div>

  <div class="row">
    <div class="col s10 l5 offset-l1">

        <!-- start card -->
        <section id="about">
          <div class="card-content">
            <span class="card-title">About Focallocal</span>
            <p>Focallocal is an open, encouraging and supportive community for people who want to explore creative and fun ways to make our communities friendlier, more connected, safer and happier for everyone to enjoy living in.</p>
          </div>

          <div class="card-action">
            <a href="#">learn more</a>
            <a href="#">watch our videos</a>
          </div>
        </section>
        <!-- end card -->

    </div>

    <div class="col l5 s10">
      <section id="events">
        <div class="card-content">
          <span class="card-title">Events</span>
          <p>We create positive action event and encourage you to do the same. It's easy to create an event which will make your community much nicer. Bla bla</p>
        </div>

        <div class="card-action">
          <a href="#">create event</a>
          <a href="#">find event near you</a>
        </div>
      </section>
    </div>

    <br style="clear:both">

    <div class="col s10 l5 offset-l1">
      <section id="social">
        <div class="card-content">
          <span class="card-title">Social</span>
          <p>Follow us whereever we go! We will follow you back! We will haunt you! We will be in your dreams! Muahahahahahaha</p>
        </div>

        <div class="card-action">
          <a href="#">facebook</a>
          <a href="#">twitter</a>
        </div>
      </section>
    </div>

    <div class="col l5 s10">
      <section id="community">
        <div class="card-content">
          <span class="card-title">Community</span>
          <p>Join the community, tell the world about your positivity! We want your arrrrrrrticles!</p>
        </div>

        <div class="card-action">
          <a href="#">write an artice</a>
          <a href="#">learn about focallocal</a>
        </div>
      </section>
    </div>
  </div>

  <div class="row">
    <div class="col s10 l12 m10">
      <img src="<?php echo get_stylesheet_directory_uri();?>/images/earth-2.png" class="background-bottom">
    </div>
  </div>

<div id="vision">
  <div class="row">
    <div class="col s12">
  	  <h2>Our Vision</h2>
      <p>A Global Movement of positive people exploring fun and creative activities to make where we live, and the whole world, a friendlier, safer, happier and more connected space<p>
    </div>

  <div class="row">
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img src="images/sample-1.jpg">
          <span class="card-title">Video about Focallocal</span>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>
</div>

</div>
<!-- Compiled and minified CSS -->
<!-- Compiled and minified JavaScript -->
<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.0/js/materialize.min.js"></script>
</body>
