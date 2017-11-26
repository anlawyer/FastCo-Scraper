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
    $('.modal').addClass('is-active');
    $.get('/articles/' + currID)
    .then(function (data) {
      $('.save-comment').attr('data-id', data._id);
    });
  });

  $('.delete').on('click', function () {
    $('.modal').removeClass('is-active');
    $('.textarea').val('');
  });

  $('.save-comment').on('click', function () {
    let currID = $(this).attr('data-id');

    let newComment = {
      body: $('.textarea').val()
    };

    $.post('/articles/' + currID, newComment)
    .then(function (data) {
      $('.textarea').val('');
      $('.modal').removeClass('is-active');
    });
  });
});
