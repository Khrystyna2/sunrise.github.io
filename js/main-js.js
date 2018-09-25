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
   

   $('.btn-form').click(function() {
      $('#step1').hide();
      $('#step2').show();
   });
});