'use strict';
var app = app || {};

(function(module) {
  var bookView = {};

  bookView.initIndexPage = function() {
    $('.container').hide();
    $('.book-view').show();
    app.Book.all.map(a => $('#book-list').append(a.toHtml()));
}

  bookView.initDetailPage = function() {
    $('.container').hide();
    $('.book-view').hide();
    $('.detail-view').show();
    app.Book.all.forEach(a => {
      if (parseInt(a.id) === parseInt(ctx.params.book_id)){
        $('.detail-view').append(a.detailToHtml());
      }   
    })
  }

  bookView.initAddPage = function() {
    $('.container').hide();
    $('.book-view').hide();
    $('.detail-view').hide();
    $('.new-book-view').show();
  }

  $('.new-book-view').on('submit', createNewBook);
  function createNewBook(e) {
    e.preventDefault();
    let book ={
      author:$('.new-book-view input[name="author"]').val(),
      title:$('.new-book-view input[name="booktitle"]').val(),
      isbn:$('.new-book-view input[name="isbn"]').val(),
      image_url:$('.new-book-view input[name="imgurl"]').val(),
      description:$('.new-book-view input[name="Description"]').val(),
    }
    console.log('Book:', book)
    $.post(`${ENV.apiUrl}/api/v1/books`, book)
    .then(app.Book.fetchAll(bookView.initIndexPage))
    .catch(console.error);
  }

  module.bookView = bookView;
}) (app)

$(function() {
  app.Book.fetchAll(app.bookView.initIndexPage);
  // let obj = {params: {book_id:2}};
  // app.Book.fetchOne(app.bookView.initDetailPage);
})

// $(document).ready(function() {
//     app.Book.fetchAll(app.bookView.initIndexPage);
//   });