angular.module('root',['services'])
	.controller('index',['$scope', 'pokemonListService',
		function($scope, pokemonListService) {
			pokemonListService.promise.then(function (res){
				$scope.pokemonList = res;
			});

			$scope.pokemonSelected;
			$scope.pokemonsToCompare = [];

			$scope.handleComparison = function(item){				
				if(!item.active){
					$scope.pokemonsToCompare.push(item.pokemon);
					item.active = true;
				} else {
					$scope.pokemonsToCompare.splice(_.findIndex($scope.pokemonsToCompare, function(o) {return o.name== item.pokemon.name}),1);
					item.active = false;
				}
			};
			
			$scope.natureClass = function(pokemon){
				switch (pokemon.nature){
					case "Earth":
						return	'earthNature';
					case "electricity":
						return	'electricityNature';
					case "grass":
						return 'grassNature';
					case "fire":
						return 'fireNature';
				}
			};
	}])