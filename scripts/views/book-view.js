'use strict';
var app = app || {};

(function(module) {
  var bookView = {};

  bookView.initIndexPage = function() {
    $('.container').hide();
    $('.book-view').show();
    app.Book.all.map(a => $('#book-list').append(a.toHtml()));
}

  bookView.initDetailPage = function(ctx) {
    $('.container').hide();
    $('.book-view').hide();
    $('.detail-view').show();
    app.Book.all.forEach(a => {
      if (parseInt(a.id) === parseInt(ctx.params.book_id)){
        $('.detail-view').append(a.detailToHtml());
      }   
    })
  }

  module.bookView = bookView;
}) (app)

$(function() {
  app.Book.fetchAll(app.bookView.initIndexPage);
  app.Book.fetchOne(app.bookView.initDetailPage);
})

// $(document).ready(function() {
//     app.Book.fetchAll(app.bookView.initIndexPage);
//   });