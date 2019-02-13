
// $(function () {

//   // validate forms
//   $('#demo-form').parsley().on('field:validated', function() {
//     var ok = $('.parsley-error').length === 0;
//     // $('.bs-callout-info').toggleClass('hidden', !ok);
//     // $('.bs-callout-warning').toggleClass('hidden', ok);
//   })
//   // .on('form:submit', function() {
//   //   return false; // Don't submit form for this demo
//   // });


//   // show/hide form


// });



$(document).ready(function() {
  $.viewInput = {
    '0' : $([]),
  //Это имя DIV вокруг невидимого поля
    'otherField' : $('#otherField'),
  };

$('#otherFieldOption').change(function() {
    // Прячет это поле, если выбрана другая опция
    $.each($.viewInput, function() { this.hide(); this.find('textarea').attr('required', false); });
  // Показывает поле при выборе необходимой опции
    $.viewInput[$(this).val()].show().find('textarea').attr('required', true);
  });

});


$(function () {

  // validate forms
  $('#demo-form').parsley().on('field:validated', function() {
    var ok = $('.parsley-error').length === 0;
    // $('.bs-callout-info').toggleClass('hidden', !ok);
    // $('.bs-callout-warning').toggleClass('hidden', ok);
  })
  // .on('form:submit', function() {
  //   return false; // Don't submit form for this demo
  // });


  // show/hide form


});