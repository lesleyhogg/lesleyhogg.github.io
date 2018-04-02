/*$(document).ready(function() {
  $('#categories a').click(function(e){
      // Stop default link clicking behaviour
      e.preventDefault();

      // Get the section id from the link's href
      var sectionId = $(this).attr('href');
      $(document).scrollTo(sectionId);
    });
});
*/

$('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 700, 'swing', function () {
        window.location.hash = target;
    });
});
