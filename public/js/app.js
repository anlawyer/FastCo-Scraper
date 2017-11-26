$(document).ready(function () {
  // populatePage();

  function populatePage () {
    $.get('/');
  }

  $('.scrape-button').on('click', function () {
    $.get('/scrape')
    .then(function (data) {
      populatePage();
      console.log(data);
    });
  });

  $('.save-button').on('click', function () {
    console.log(this);
    let currID = $(this).attr('data-id');
    console.log('clicked save on ' + currID);
    $.post('/articles/save/' + currID)
    .then(function (data) {
      populatePage();
      console.log(data);
    });
  });

  $('.unsave-button').on('click', function () {
    console.log(this);
    let currID = $(this).attr('data-id');
    console.log('clicked unsave on ' + currID);
    $.post('/articles/unsave/' + currID)
    .then(function (data) {
      // populatePage();
      console.log(data);
    });
  });

  $('.comment-button').on('click', function () {
    console.log(this);
    let currID = $(this).attr('data-id');
    $('.modal').addClass('is-active');
    $.get('/articles/' + currID)
    .then(function (data) {
      console.log(data);
    });
  });

  $('.delete').on('click', function () {
    $('.modal').removeClass('is-active');
    $('.textarea').val('');
  });

  $('.save-comment').on('click', function () {
    console.log(this);
    let currID = $(this).attr('data-id');
    $('.modal').removeClass('is-active');
    $.ajax({
      method: 'POST',
      url: '/articles/' + currID,
      data: {
        body: $('.textarea').val()
      }
    })
    .then(function (data) {
      console.log(data);
      $('.textarea').val('');
    });
  });
});
