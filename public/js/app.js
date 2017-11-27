$(document).ready(function () {
  function populatePage () {
    $.get('/');
  }

  $('#scrape-button').on('click', function () {
    $.get('/scrape')
    .then(function (data) {
      populatePage();
    });
  });

  $('.save-button').on('click', function () {
    let currID = $(this).attr('data-id');
    $.post('/articles/save/' + currID)
    .then(function (data) {
      populatePage();
    });
  });

  $('.unsave-button').on('click', function () {
    let currID = $(this).attr('data-id');
    $.post('/articles/unsave/' + currID)
    .then(function (data) {
      console.log(data);
    });
  });

  $('.comment-button').on('click', function () {
    let currID = $(this).attr('data-id');
    let newComment = {
      body: $('textarea[type=text]').val()
    };
    $('.textarea').val('');
    $.post('/articles/' + currID, newComment)
    .then(function (data) {
      console.log(data);
    });
  });

  $('.delete').on('click', function () {
    let currID = $(this).attr('data-id');
    $.ajax({
      method: 'DELETE',
      url: '/remove/' + currID
    })
    .then(function (data) {
      console.log(data);
    });
  });
});
