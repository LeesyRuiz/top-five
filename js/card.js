// ScrollReveal (https://github.com/jlmakes/scrollreveal)

(function scrollReveal() {
  window.sr = ScrollReveal();

  sr.reveal('.card-body', {
    duration   : 600,
    distance   : '20px',
    easing     : 'ease-out',
    origin     : 'bottom',
    reset      : true,
    scale      : 1,
    viewFactor : 0,
    afterReveal  : revealChildren,
  }, 150);

    var revealChildren = sr.reveal('.card-title, .card-text', {
    duration   : 500,
    scale      : 1,
    distance   : '20px',
    origin     : 'bottom',
    reset      : true,
    easing     : 'ease-out',
    viewFactor : 1,
  }, 75);
})();


$(function() {
    console.log('hello');

    var schoolCard = [];

    var school = "clairedngcgvhmd"

});
$( document ).ready(function() {

    var schoolCards = [];

    for( var i=0; i < schoolData.length; i++ ) {

        var school = schoolData[i];
        var schoolCard = "<div class='item' data-type=" + school.practice_area + "><div class='card' ><div class='card-body'><h2 class='school_name'>" + school.name + "</h2><h3>"
        + school.blurb + "</h3></div><img class='card-img-top' src='img/test.jpg' alt='Card image cap'><ul class='list-group list-group-flush'><li class='list-group-item'>Avvo Rating:  "
        + school.avvo_rating + "</li><li class='list-group-item'>Client Rating:  " + school.client_rating + "</li></ul></div></div>";

        schoolCards.push(schoolCard)
    }

    $('.grid').prepend(schoolCards);
    console.log(schoolCards)


});
