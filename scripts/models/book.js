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
Book.all = []
Book.prototype.toHtml = function(){
  var template = Handlebars.compile($('#book-list-template').text());
}
Book.loadAll = rows => {
  rows.sort(title)
  Book.all = rows.map(bookObject => new Book(bookObject));
  Book.fetchAll = callback => {
  $.get('/api/v1/books')
  .then(results => {
    Book.loadAll(results);
    callback()
    if(err){
      errorCallback();
    }
  })
}
}
module.Book = Book;
}) (app);

