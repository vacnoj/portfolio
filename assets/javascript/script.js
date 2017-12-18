$(document).ready(function(){
//enable parallax
  $('.parallax').parallax();
//enable modals
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
    {selector: '#project1', offset: 300, callback: function(event) {
      $("#project1").css({opacity:1});
      $({deg: 0}).animate({deg: 720}, {
        duration: 2000,
        step: function(now) {
          $("#project1").css({
            transform: 'rotate(' + now + 'deg)'
          });
        }
      });
     
      $("#button1").animate({left: '35%', width: '+=100px'}, 1000);
      $("#button1").animate({left: '0%', width: '-=100px'}, 1000);
    } },
    {selector: '#project2', offset: 300, callback: function(event) {
      $("#project2").css({opacity:1});
      $({deg: 0}).animate({deg: 720}, {
        duration: 2000,
        step: function(now) {
          $("#project2").css({
            transform: 'rotate(' + now + 'deg)'
          });
        }
      });
     
      $("#button2").animate({left: '35%', width: '+=100px'}, 1000);
      $("#button2").animate({left: '0%', width: '-=100px'}, 1000);
    } },
    {selector: '#project3', offset: 300, callback: function(event) {
      $("#project3").css({opacity:1});
      $({deg: 0}).animate({deg: 720}, {
        duration: 2000,
        step: function(now) {
          $("#project3").css({
            transform: 'rotate(' + now + 'deg)'
          });
        }
      });
     
      $("#button3").animate({left: '35%', width: '+=100px'}, 1000);
      $("#button3").animate({left: '0%', width: '-=100px'}, 1000);
    } },
    {selector: '#project4', offset: 300, callback: function(event) {
      $("#project4").css({opacity:1});
      $({deg: 0}).animate({deg: 720}, {
        duration: 2000,
        step: function(now) {
          $("#project4").css({
            transform: 'rotate(' + now + 'deg)'
          });
        }
      });
     
      $("#button4").animate({left: '35%', width: '+=100px'}, 1000);
      $("#button4").animate({left: '0%', width: '-=100px'}, 1000);
    } },
    {selector: '#project5', offset: 300, callback: function(event) {
      $("#project5").css({opacity:1});
      $({deg: 0}).animate({deg: 720}, {
        duration: 2000,
        step: function(now) {
          $("#project5").css({
            transform: 'rotate(' + now + 'deg)'
          });
        }
      });
     
      $("#button5").animate({left: '35%', width: '+=100px'}, 1000);
      $("#button5").animate({left: '0%', width: '-=100px'}, 1000);
    } },
    
  ];
  Materialize.scrollFire(options);
      
});
  