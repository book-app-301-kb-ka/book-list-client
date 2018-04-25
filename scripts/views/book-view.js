'use strict';
var app = app || {};

(function(module) {
  var bookView = {};

  bookView.initIndexPage = function() {
    $('.container').hide();
    $('.book-view').show();
    app.Book.all.map(a => $('#book-list').append(a.toHtml()));
}

  module.bookView = bookView;
}) (app)

$(function() {
  app.Book.fetchAll(app.bookView.initIndexPage);
})

// $(document).ready(function() {
//     app.Book.fetchAll(app.bookView.initIndexPage);
//   });