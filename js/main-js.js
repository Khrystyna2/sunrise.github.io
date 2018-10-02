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
});