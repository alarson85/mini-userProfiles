app.controller('MainController', ['$scope', 'mainService', function($scope, mainService){
	$scope.users = mainService.getUsers();

}])
	
