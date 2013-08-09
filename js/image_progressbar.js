$(document).ready( function() {
  var createImageProgressbar = (function(window, $, undefined) {
    var createImageProgressbar = function(selector, handler) { 
      var $container = $(selector);
      $container.append('<div class="image-progressbar one"></div>');
      $container.append('<div class="image-progressbar two"></div>');
      $container.append('<div class="image-progressbar three"></div>');
      $container.append('<div class="image-progressbar four"></div>');
      $container.data("state", 1);
      $container.bind('data-change', { 'element': $container }, handler);
      return $container;
    };

    return createImageProgressbar;

  }(window, jQuery))

  var resetImageProgressBar = function($progressBar) {
    $progressBar.children().each( function(index, el) {
      $(el).fadeIn();
      console.log("fading in element" + el);
    });
    $progressBar.data("state", 1);
  }

  var updateImageProgressBar = function($progressBar) {
    var stateDict = { '1': 'one', '2': 'two', '3': 'three', '4': 'four' };
    $progressBar.find("." + stateDict[$progressBar.data("state")])
      .fadeOut();
    if($progressBar.data("state") < 5) {
      $progressBar.data("state", $progressBar.data("state") + 1);
    } else {
      resetImageProgressBar($progressBar);
    }
  }

  createImageProgressbar('.container', function(e) {
    updateImageProgressBar($('.container'));
  });

  $('#advance').on('click', function() { console.log("#advance clicked"); $('.container').trigger('data-change'); });
  $('#reset').on('click', function() { console.log("#reset clicked"); resetImageProgressBar($('.container')); });
});
