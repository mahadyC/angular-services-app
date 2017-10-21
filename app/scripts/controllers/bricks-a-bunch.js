'use strict';

/**
 * @ngdoc function
 * @name serviceQuizApp.controller:BricksABunchCtrl
 * @description
 * # BricksABunchCtrl
 * Controller of the serviceQuizApp
 */
angular.module('serviceQuizApp')
  .controller('BricksABunchCtrl', ['brickWarehouse', function (warehouse) {
    this.name = 'Bricks A Bunch';

    this.redBricks = warehouse.bricks.red;
    this.greenBricks = warehouse.bricks.green;
    this.blueBricks = warehouse.bricks.blue;
    this.reduce = warehouse.buy;
    this.addToCartRedBricks = function(size, price) {
      warehouse.purchase('red', size, price);
    };
    this.addToCartBlueBricks = function(size, price) {
      warehouse.purchase('blue', size, price);
    };
    this.addToCartGreenBricks = function(size, price) {
      warehouse.purchase('green', size, price);
    };
  }]);
