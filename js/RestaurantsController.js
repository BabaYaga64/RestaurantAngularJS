restaurantList.controller('RestaurantsCtrl', function RestaurantsCtrl($scope){
    $scope.restaurants = [];
    $scope.addRestaurant = function(){
        $scope.restaurants.push({ name: $scope.restaurantName });
        $scope.restaurantName = null;
    };
});
