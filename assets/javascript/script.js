$(document).ready(function(){
//enable parallax
  $('.parallax').parallax();

  $('.modal').modal();

  setTimeout(animateName, 2000);
  function animateName() {
    $({deg: 0}).animate({deg: 360}, {
      duration: 1000,
      step: function(now) {
        $("#name").css({
          transform: 'rotate(' + now + 'deg)'
        });
      }
    });
  $('#name').animate({fontSize: '6em'}, 300);
  $('#name').animate({fontSize: '2em'}, 300);
  $('#name').animate({fontSize: '4em'}, 300);
  }

  // $('#move').click(function() {
  //   $(".project").animate({left: '250px'});
  // });
  var options = [
    {selector: '#project1', offset: 500, callback: function(event) {
      $("#project1").css({opacity:1});
      $({deg: 0}).animate({deg: 360}, {
        duration: 2000,
        step: function(now) {
          $("#project1").css({
            transform: 'rotate(' + now + 'deg)'
          });
        }
      });
      // $("#project1").animate({left: '45%'}, 1000);
      // $("#project1").animate({left: '25%'}, 400);
      $("#project1").animate({left: '35%'}, 2000);
    } },
    {selector: '#project2', offset: 500, callback: function(event) {
      $("#project2").css({opacity:1});
      $({deg: 0}).animate({deg: 360}, {
        duration: 2000,
        step: function(now) {
          $("#project2").css({
            transform: 'rotate(' + now + 'deg)'
          });
        }
      });
      // $("#project2").animate({left: '45%'}, 1000);
      // $("#project2").animate({left: '25%'}, 400);
      $("#project2").animate({left: '35%'}, 2000);
    } },
    {selector: '#project3', offset: 500, callback: function(event) {
      $("#project3").css({opacity:1});
      $({deg: 0}).animate({deg: 360}, {
        duration: 2000,
        step: function(now) {
          $("#project3").css({
            transform: 'rotate(' + now + 'deg)'
          });
        }
      });
      // $("#project3").animate({left: '45%'}, 1000);
      // $("#project3").animate({left: '25%'}, 400);
      $("#project3").animate({left: '35%'}, 2000);
    } }
  ];
  Materialize.scrollFire(options);
      
});
  