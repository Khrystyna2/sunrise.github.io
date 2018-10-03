$(document).ready(function() {

   //style input
   var $inputs = $(".input-form input, .input-form textarea");

   $inputs.on('focus', function() {
     var $self =  $(this);
     $self.prev().addClass('active');
   });

   $inputs.on('focusout', function() {
     var $self =  $(this);
     $self.val() == "" ? $self.prev().removeClass('active') : "";
   });
   
   //form steps
   $('#step1 .btn-form').click(function() {
      $('#step1').hide();
      $('#step2').show();
   });
   $('#step2 .btn-form').click(function() {
    $(' #step2').hide();
    $('#step3').show();
  });

  $('.arrow-down').click(function() {
    $('.content-desc__list ul li').slideToggle();
    $('.arrow-down').toggleClass('active');
  });

  $( function() {
    $( "#datepicker" ).datepicker();
  });

  $('.btn-menu').click(function() {
    $('.menu').slideToggle();
  });


  $('div.icon-box').click(function() {
		let findArticle = $(this).next().next('.show-printer');
		
		if( findArticle.is(':visible')){
			findArticle.slideUp(400);
		}
		else{
			$('.show-printer').slideUp();
			findArticle.slideDown();
		}
  });
  
  $('.icon-sort').click(function() {
    $('.sort-box').slideToggle();
  });


});