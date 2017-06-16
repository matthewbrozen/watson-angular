angular.module('WatsonApp')
    .controller('SentimentsController', SentimentsController);

//injecting http
SentimentsController.$inject = ['$http'];
// main function
function SentimentsController($http) {
  var self = this;
   self.all=[];
   self.newSentiment={};
   self.addSentiment= addSentiment;

   $http.get("https://genesiswatson.herokuapp.com/sentiments")
   .then(function(response) {
     self.all = response.data.allSentiments;
     console.log(self.all);
   }, function(error) {
     console.log(error)
   });

   //post report method need to store _id from response
   function addSentiment(){
    $http
      .post('https://genesiswatson.herokuapp.com/sentiments', self.newSentiment, console.log(self.newSentiment))
      .then(function(response){
        self.all.push(response.data.sentiment);

        self.newGift = {};
          $http.get('https://genesiswatson.herokuapp.com/sentiments')
          .then(function(response){
            self.all = response.data.allSentiments;
          }, function(error){
            console.log(error)
            return;
          });

    }, function(error){

      console.log(error)
      return;
    });
   }

};
