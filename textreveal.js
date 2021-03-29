$(function() {
    var row = $('.zlhomeAnimate');
    var $window = $(window);
    
    $window.on('scroll', function() {
      var pad = Math.max(0, $window.height() - 100);
      var scrollTop = $window.scrollTop();
  
      if (!row.hasClass('visible') &&
          $window.scrollTop() + pad > row.offset().top) {
        row.addClass('visible');
        return;
      }
      
      // if (row.hasClass('visible') &&
      //     $window.scrollTop() + pad < row.offset().top) {
      //   row.removeClass('visible');
      //   return;
      // }
    });
    
    var row2 = $('.zlhomeAnimate2');
    var $window = $(window);
    
    $window.on('scroll', function() {
      var pad = Math.max(0, $window.height() - 100);
      var scrollTop = $window.scrollTop();
  
      if (!row2.hasClass('visible') &&
          $window.scrollTop() + pad > row2.offset().top) {
        row2.addClass('visible');
        return;
      }
      
      // if (row2.hasClass('visible') &&
      //     $window.scrollTop() + pad < row2.offset().top) {
      //   row2.removeClass('visible');
      //   return;
      // }
    });
  });