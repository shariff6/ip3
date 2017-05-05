//BUSINESS LOGIC
var ping = function(user) {
      for (var i = 1; i <= user; i++) {
        if (i % 5 === 0 & i % 3 === 0) {
          $("ul#output").append("<li class='remove'>pingpong</li>")
        } else if (i % 3 === 0) {
          $("ul#output").append("<li  class='remove' >ping</li>")
        } else if (i % 5 === 0) {
          $("ul#output").append("<li  class='remove'>ping</li>")
        } else {
          $("ul#output").append("<li class='remove>" + String(i) + "</li>")
        }
      }
    }
    //USER INTERFACE
    $(document).ready(function() {
      $("form#pingpong").submit(function(event) {
        event.preventDefault();
        var number = parseInt($("input#Number").val());
        ping(number)
      });
    });
