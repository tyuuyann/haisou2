var base;
(function (base) {
    var controller;
    (function (controller) {
        var BaseController = (function () {
            function BaseController($scope, $http) {
                this.$scope = $scope;
                this.$http = $http;
            }
            BaseController.$inject = ['$scope', '$http'];
            return BaseController;
        }());
        controller.BaseController = BaseController;
    })(controller = base.controller || (base.controller = {}));
})(base || (base = {}));
