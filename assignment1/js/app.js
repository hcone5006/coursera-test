(function (){
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunch = "apple";
  $scope.totalLunch = "";

  $scope.displayLunch = function () {
    return "I'm full!!";
  }

}

  // .controller('LunchCheckController', function($scope){
  //
  //
  // });

})();
