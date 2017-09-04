$(document).ready(() => {
  $('.rating').rating({
    initialRating: 5,
    maxRating: 5,
    onRate: rating => alert(rating),
  });
});


$('.ui.sidebar').first()
  .sidebar('attach events', '.open.button', 'show');

$('.open.button').removeClass('disabled');
