angular.module('WatsonApp')
    .controller('SentimentsController', SentimentsController);

//injecting http
SentimentsController.$inject = ['$http'];
// main function
function SentimentsController($http) {
  var self = this;
  self.all =[];
  // self.getSentiment= getSentiment;

// function getSentiment(){
//    $http
//    .get("https://gateway.watsonplatform.net/discovery/api/v1/environments/6d400851-0928-4a4a-8f56-4cc3f4d630ec/collections/f7ee9534-3c2d-4581-aace-56f63881b103/query?version=2016-11-07&query=microsoft&count=1&offset=&aggregation=&filter=&passages=false&highlight=true&return=")
//     .then(function(response) {
//       console.log(response);
//       self.all= response;
//     }, function(error) {
//       console.log(error)
//     });
//   }


};
