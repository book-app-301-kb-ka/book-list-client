'use strict';
const ENV = {};

ENV.isProduction = window.location.protocol === 'https:';
ENV.productionApiUrl = 'https://kb-ka-booklist.herokuapp.com';
ENV.developmentApiUrl = 'http://localhost:3000';

ENV.apiUrl = ENV.isProduction ? ENV.productionApiUrl : ENV.developmentApiUrl;

// if(ENV.isProduction){
//   ENV.apiUrl = ENV.productionApiUrl;
// } else{
//   ENV.apiUrl = ENV.developmentAprUrl;
// }
var app = app || {};

(function(module){
  function Book (rawDataObj){
   Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
}

Book.all = [];

Book.prototype.toHtml = function(){
  var template = Handlebars.compile($('#book-list-template').text());
  return template(this);
};

Book.prototype.detailToHtml = function(){
  var template = Handlebars.compile($('#book-detail-template').text());
  return template(this);
};

Book.loadAll = rows => Book.all = rows.sort((a,b) => b.title - a.title).map(book => new Book(book));
 
Book.fetchAll = callback => {
  $.get(`${ENV.apiUrl}/api/v1/books`)
  .then(Book.loadAll)
  .then(callback)
  .catch(errorCallback);
}

Book.fetchOne = (callback, ctx) => {
  $.get(`${ENV.apiUrl}/api/v1/books/${ctx.params.book_id}`)
  .then(results => ctx.book = results[0])
  .then(callback)
  .catch(errorCallback);
}

function errorCallback(err){
  console.error(err);;
  module.errorView.initErrorPage(err);
}

  module.Book = Book;
}) (app);

