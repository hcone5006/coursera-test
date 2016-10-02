(function () {
'use strict';

angular.module('DIApp', [])
.controller('DIController', DIController);

function DIController ($scope, $filter) {
  $scope.name = "Yaakov";

  $scope.upper = function (){
    var upCase = $filter('uppecase');
    $scope.name = upCase($scope.name);
  };
}

function AnnonateMe(name, job, blah) {
  return "Blah!";
}

console.log(AnnonateMe);

})();
