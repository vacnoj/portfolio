$(document).ready(function(){
//enable parallax
  $('.parallax').parallax();
//enable modals
  $('.modal').modal();

  $(".background").slideUp();

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
      $({deg: 0}).animate({deg: 360}, {
        duration: 2000,
        step: function(now) {
          $("#project1").css({
            transform: 'rotate(' + now + 'deg)'
          });
        }
      });
     
      $("#button1").animate({left: '35%', width: '410px'}, 1000);
      $("#button1").animate({left: '0%', width: '260px'}, 1000);
    } },
    {selector: '#project2', offset: 300, callback: function(event) {
      $("#project2").css({opacity:1});
      $({deg: 360}).animate({deg: 0}, {
        duration: 2000,
        step: function(now) {
          $("#project2").css({
            transform: 'rotate(' + now + 'deg)'
          });
        }
      });
     
      $("#button2").animate({left: '35%', width: '410px'}, 1000);
      $("#button2").animate({left: '0%', width: '260px'}, 1000);
    } },
    {selector: '#project3', offset: 300, callback: function(event) {
      $("#project3").css({opacity:1});
      $({deg: 0}).animate({deg: 360}, {
        duration: 2000,
        step: function(now) {
          $("#project3").css({
            transform: 'rotate(' + now + 'deg)'
          });
        }
      });
     
      $("#button3").animate({left: '35%', width: '410px'}, 1000);
      $("#button3").animate({left: '0%', width: '260px'}, 1000);
    } },
    {selector: '#project4', offset: 300, callback: function(event) {
      $("#project4").css({opacity:1});
      $({deg: 360}).animate({deg: 0}, {
        duration: 2000,
        step: function(now) {
          $("#project4").css({
            transform: 'rotate(' + now + 'deg)'
          });
        }
      });
     
      $("#button4").animate({left: '35%', width: '410px'}, 1000);
      $("#button4").animate({left: '0%', width: '260px'}, 1000);
    } },
    {selector: '#project5', offset: 300, callback: function(event) {
      $("#project5").css({opacity:1});
      $({deg: 0}).animate({deg: 360}, {
        duration: 2000,
        step: function(now) {
          $("#project5").css({
            transform: 'rotate(' + now + 'deg)'
          });
        }
      });
     
      $("#button5").animate({left: '35%', width: '410px'}, 1000);
      $("#button5").animate({left: '0%', width: '260px'}, 1000);
    } }
    
  ];
  Materialize.scrollFire(options);

  $(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() > $(document).height() - 200) {
      $(".background").slideDown(2000);
    }
 });

$('#submit').click(function() {  
  // event.preventDefault();
  function sendMail() {
    $myform = $('#contact-form');
    $myform.prop ('action','mailto:vacnoj@yahoo.com');
    $myform.submit();
  }
  sendMail();
  setTimeout(clearField, 5000);

  function clearField() {
    $('#comments').val('');
  $('#email').val('');
  $('#phone-number').val('');
  $('#contact-name').val('');
  }
});
      
});
  