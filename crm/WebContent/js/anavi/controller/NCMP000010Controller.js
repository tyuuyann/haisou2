var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var crm_module;
(function (crm_module) {
    var BaseController = base.controller.BaseController;
    var NCMP000010Controller = (function (_super) {
        __extends(NCMP000010Controller, _super);
        function NCMP000010Controller($scope, $state, ncmp000010Business, userInfo, ncmp000010) {
            _super.call(this, $scope, $state);
            this.$scope = $scope;
            this.$state = $state;
            this.ncmp000010Business = ncmp000010Business;
            this.userInfo = userInfo;
            this.ncmp000010 = ncmp000010;
            this.ncmp000010 = new crm_module.NCMP000010();
            this.init();
        }
        NCMP000010Controller.prototype.init = function () {
            var _this = this;
            this.ncmp000010Business.ScrJson().then(function (response) {
                angular.extend(_this.ncmp000010, response.data);
                _this.ncmp000010.skjTimeLst = [];
                _this.ncmp000010.skjTimeLst.push("08:00");
                _this.ncmp000010.skjTimeLst.push("09:00");
                _this.ncmp000010.skjTimeLst.push("10:00");
                _this.ncmp000010.skjTimeLst.push("11:00");
                _this.ncmp000010.skjTimeLst.push("12:00");
                _this.ncmp000010.skjTimeLst.push("13:00");
                _this.ncmp000010.skjTimeLst.push("14:00");
                _this.ncmp000010.skjTimeLst.push("15:00");
                _this.ncmp000010.skjTimeLst.push("16:00");
                _this.ncmp000010.skjTimeLst.push("17:00");
                _this.ncmp000010.skjTimeLst.push("18:00");
                _this.ncmp000010.skjTimeLst.push("19:00");
                _this.ncmp000010.skjTimeLst.push("20:00");
                _this.ncmp000010.skjTimeLst.push("21:00");
                _this.ncmp000010.skjTimeLst.push("22:00");
            }, function (response) {
            });
            //this.ncmp999901.id = this.userInfo.getId();
            this.ncmp000010.name = this.userInfo.getName();
        };
        NCMP000010Controller.prototype.createReport = function () {
        };
        NCMP000010Controller.prototype.clear = function () {
            alert("");
        };
        NCMP000010Controller.$inject = ['$scope', '$state', 'NCMP000010Business', 'UserInfo'];
        return NCMP000010Controller;
    }(BaseController));
    crm_module.NCMP000010Controller = NCMP000010Controller;
})(crm_module || (crm_module = {}));
angular.module('crm').controller('NCMP000010Controller', crm_module.NCMP000010Controller);
