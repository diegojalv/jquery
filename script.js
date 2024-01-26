$(document).ready(function() {
    $('#transformContainer').on('click', function() {
      $(this).toggleClass('transformed');
      
      var content = $('#content');
      var image = $('#image');
  
      if ($(this).hasClass('transformed')) {
        content.fadeOut('slow', function() {
          content.text('Sad').fadeIn('slow');
        });
        
        image.fadeOut('slow', function() {
          image.attr('src', 'sad.jpg').fadeIn('slow');
        });
  
        // Set the image to take up the full width of the page
        image.css({
          'width': '100%',
          'height': 'auto'
        });
  
        // Move the title to a different position and increase size for the frustrated mood
        content.animate({
          'top': '30%',
          'left': '50%',
          'font-size': '36px' // Set the desired font size
        }, 'slow');
      } else {
        content.fadeOut('slow', function() {
          content.text('Happy').fadeIn('slow');
        });
        
        image.fadeOut('slow', function() {
          image.attr('src', 'happy.jpeg').fadeIn('slow');
        });
  
        // Set the image to take up the full width of the page
        image.css({
          'width': '100%',
          'height': 'auto'
        });
  
        // Move the title back to its original position and size for the happy mood
        content.animate({
          'top': '50%',
          'left': '50%',
          'font-size': '24px' // Set the desired font size
        }, 'slow');
      }
      // Add other transformations as needed
    });
  });
  