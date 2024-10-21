$(window).on('load', function () {
    var h = $('.flag').width();
    for (var i = 0; i < h; i++) {
      var flagElement = $("<div class='flag-element'>");
      flagElement.css('background-position', -i + "px 0");
      flagElement.css('-webkit-animation-delay', i * 10 + 'ms');
      flagElement.css('-moz-animation-delay', i * 10 + 'ms');
      flagElement.css('-ms-animation-delay', i * 10 + 'ms');
      flagElement.css('animation-delay', i * 10 + 'ms');
      $('.flag').append(flagElement);
    }
    });