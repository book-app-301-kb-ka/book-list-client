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


