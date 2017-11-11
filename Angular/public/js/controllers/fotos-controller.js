angular.module('alurapic').controller('FotosController', function($scope, $http){
  //Sempre no primeiro param devemos colocar o nome do controller no caso FotosController.
  $scope.fotos = [];
$http.get('v1/fotos')
.success(function(fotos){
  $scope.fotos = fotos;
})
.error(function(erro){
  console.log(erro);
});

/*  var promisse = $http.get('v1/fotos');
  promisse.then(function(retorno){
    $scope.fotos = retorno.data;
  }).catch(function(erro){
      console.log(erro);
  });
  teste git.
  */

});
