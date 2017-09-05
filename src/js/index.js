$(document).ready(() => {
  $('.rating').rating({
    initialRating: 5,
    maxRating: 5,
    onRate: rating => alert(rating),
  });
});


$(document).ready(() => {
  $('#root .ui.sidebar')
    .sidebar({
      context: $(document.body),
    },
    ).sidebar('attach events', '.open.button');
});
