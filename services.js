angular.module('services',[])
	.service("pokemonListService",['$http', PokemonListFromApi]);

function PokemonListFromApi($http) {
	/*this.value = [
				{pokemon:{name:"Bulbazaor", height:30, nature:"grass"},active:false},
				{pokemon:{name:"Charmander", height:25, nature:"fire"},active:false},
				{pokemon:{name:"Pikachu", height:40, nature:"electricity"},active:false},
				{pokemon:{name:"Ratata", height:20, nature:"Earth"},active:false},
				{pokemon:{name:"Ratata", height:20, nature:"Earth"},active:false},
				{pokemon:{name:"Ratata", height:20, nature:"Earth"},active:false},
				{pokemon:{name:"Ratata", height:20, nature:"Earth"},active:false},
				{pokemon:{name:"Ratata", height:20, nature:"Earth"},active:false},
				{pokemon:{name:"Ratata", height:20, nature:"Earth"},active:false},
				{pokemon:{name:"Ratata", height:20, nature:"Earth"},active:false},
				{pokemon:{name:"Ratata", height:20, nature:"Earth"},active:false},
				{pokemon:{name:"Ratata", height:20, nature:"Earth"},active:false},
				{pokemon:{name:"pidgeot", height:80, nature:"Earth"},active:false}
			].map(function(obj) {
				var rObj = {};
				rObj.pokemon = obj.pokemon;
				rObj.active = true;
				return rObj;
			});*/
	this.promise = $http({
		method:'GET',
		url:'http://pokeapi.co/api/v2/pokemon/?limit=150'
	}).then(function success(response) {
		return response.data.results.map(function(result) {
		 var rObj = {};
		 rObj.pokemon = {name: result.name};
		 rObj.active = false;
		 return rObj;
		 });
	}, function error(response) {
		console.log(response);
		return [];
	})
}