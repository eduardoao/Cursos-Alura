angular.module('minhasDiretivas', []).directive('meuPainel', function(){
    var ddo = {};
    ddo.retrict = "AE"; //Atributo Element
    //Para reutilizar e preciso criar o espoco privado
    ddo.scope = {
      titulo: '@'
    };

    ddo.transclude = true;

    ddo.templateUrl = "js/directives/meu-painel.html";
    return ddo;

});
