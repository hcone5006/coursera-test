(function (){
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.name = "";
  $scope.totalLunch = "";

  $scope.displayLunch = function () {
    $scope.newName = (($scope.name.split(',')).length);
    console.log($scope.newName);

    if ($scope.newName <= 3 && $scope.name != ""){
      $scope.totalLunch = "Enjoy!";
    }else if ($scope.newName > 3){
      $scope.totalLunch = "Too much!";
    }else if($scope.name == ""){
      $scope.totalLunch = "Please enter data first";
    };
  };

}


})();
