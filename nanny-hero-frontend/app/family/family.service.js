(function() {
  'use strict';
  angular
    .module('family')
    .factory('FamilyService', function ($http, $rootScope) {

          var url = 'https://nanny-hero-backend.herokuapp.com/api/family';

          var addFamily = function(familyObject){
            $http.post(url, familyObject);
          };

          var getFamily = function(familyName){
            return $http.get(url + "/" + familyName + '.json');
          }

          var updateFamily = function(familyId){
            $http.post(url + familyId);
          }

          var deleteFamily = function(familyId){
            $http.delete(url, familyId);
          }

          var getNannyInfo = function(nannyName){
            return $http.get(url + '.json', nannyName);
          }

          return {
            addFamily: addFamily,
            getFamily: getFamily,
            updateFamily: updateFamily,
            deleteFamily: deleteFamily,
            getNannyInfo: getNannyInfo
          };
  });

}());
