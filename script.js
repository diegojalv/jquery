$(document).ready(function() {
    var moods = [
      { name: 'Happy', image: 'happy.jpeg', fontSize: '35px', top: '50%', left: '50%' },
      { name: 'Sad', image: 'sad.jpg', fontSize: '35px', top: '30%', left: '50%' },
      { name: 'Angry', image: 'angry.jpeg', fontSize: '35px', top: '40%', left: '40%' },
      { name: 'Confused', image: 'confused.webp', fontSize: '45px', top: '35%', left: '60%' }
    ];
  
    $('#transformContainer').on('click', function() {
      $(this).toggleClass('transformed');
  
      var content = $('#content');
      var image = $('#image');
  
      if ($(this).hasClass('transformed')) {
        var randomMood = getRandomMood();
        content.fadeOut('slow', function() {
          content.text(randomMood.name).fadeIn('slow');
        });
  
        image.fadeOut('slow', function() {
          image.attr('src', randomMood.image).fadeIn('slow');
        });
  
        // Set the image to take up the full width of the page
        image.css({
          'width': '100%',
          'height': 'auto'
        });
  
        // Move the title to a different position and increase size for the selected mood
        content.animate({
          'top': randomMood.top,
          'left': randomMood.left,
          'font-size': randomMood.fontSize
        }, 'slow');
      } else {
        var defaultMood = moods[0]; // Default mood is 'Happy'
        content.fadeOut('slow', function() {
          content.text(defaultMood.name).fadeIn('slow');
        });
  
        image.fadeOut('slow', function() {
          image.attr('src', defaultMood.image).fadeIn('slow');
        });
  
        // Set the image to take up the full width of the page
        image.css({
          'width': '100%',
          'height': 'auto'
        });
  
        // Move the title back to its original position and size for the default mood
        content.animate({
          'top': defaultMood.top,
          'left': defaultMood.left,
          'font-size': defaultMood.fontSize
        }, 'slow');
      }
      // Add other transformations as needed
    });
  
    function getRandomMood() {
      return moods[Math.floor(Math.random() * moods.length)];
    }
  });
  