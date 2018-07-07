$(function () {
  'use strict';
  var userInput = $("input");

  $('input').keyup(function(e) {
    if(e.which === 13) {
      $.ajax({
        url: ''
        type: 'post'
        data: {
          data1 : userInput
        },
        dataType: 'json' ,
        success: function(){
          $.get( '', function( data ) {
            $(".place-holder").prepend("<li class='response'>" + data + "</li>")}, 1500);
          });
        }
      })


    $(this).val("")
    }
  });
});
