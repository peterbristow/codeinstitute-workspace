app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 4.95
    }
  ];
  
  $scope.mains = [
    {
      name: 'Lasange',
      description: 'Classic Italian style lasange.',
      price: 8.95
    },
    {
      name: 'Mushroom risotto',
      description: 'Delicious creamy mushroon risotto.',
      price: 9.95
    },
    {
      name: 'Sirloin Steak',
      description: 'Grilled and served with delicious pepper sauce.',
      price: 12.95
    },
  ];
  
  $scope.extras = [
    {
      name: 'Garlic & Cheese Bread',
      description: 'Classic toasted home made garlic bread with mozzerella cheese.',
      price: 2.95
    },
    {
      name: 'Olives',
      description: 'Green and Black olives.',
      price: 1.95
    },
    {
      name: 'Sweet potato fried',
      description: 'Skinny double cooked sweet potato fries.',
      price: 2.95
    },
  ];

}]);