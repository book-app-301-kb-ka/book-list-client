'use strict';
var app = app || {}

(function(module) {
var bookView = {};
bookView.initIndexPage = function(ctx) {
  ('.container').hide();
  ('.book-view').show();
  app.Book.all.map(a => $('#book-view').append(a.toHtml()));

}
$(document).ready(app.Book.fetchAll(bookView.initIndexPage));

module.bookView = bookView
}) (app);