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

Book.loadAll = rows => Book.all = rows.sort((a,b) => b.title - a.title).map(book => new Book(book));
 
Book.fetchAll = callback => {
  // console.log(ENV.apiUrl);
  $.get(`${ENV.apiUrl}/api/v1/books`)
  .then(Book.loadAll)
  .then(callback);
  // .catch(errorCallback);
}

  module.Book = Book;
}) (app);

