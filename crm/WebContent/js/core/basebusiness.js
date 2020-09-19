var base;
(function (base) {
    var business;
    (function (business) {
        var BaseBusiness = (function () {
            function BaseBusiness($http) {
                this.$http = $http;
            }
            BaseBusiness.$inject = ['$http'];
            return BaseBusiness;
        }());
        business.BaseBusiness = BaseBusiness;
    })(business = base.business || (base.business = {}));
})(base || (base = {}));
