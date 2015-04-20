restaurantList.controller('RestaurantsCtrl', function RestaurantsCtrl($scope){
    $scope.restaurants = [];
    $scope.addRestaurant = function(){
        $scope.restaurants.push({ name: $scope.restaurantName, cuisine: $scope.restaurantCuisine, location: $scope.restaurantLocation, price: $scope.restaurantPrice });
        $scope.restaurantName = null;$scope.restaurantCuisine = null; $scope.restaurantLocation= null; $scope.restaurantPrice= null;
    };

    $scope.deleteRestaurant = function(restaurant){
        var index = $scope.restaurants.indexOf(restaurant);
        $scope.restaurants.splice(index,1);
    };
});
