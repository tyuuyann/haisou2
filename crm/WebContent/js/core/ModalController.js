var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var crm_module;
(function (crm_module) {
    var BaseController = base.controller.BaseController;
    var ModalController = (function (_super) {
        __extends(ModalController, _super);
        function ModalController($scope, $state, modal) {
            _super.call(this, $scope, $state);
            this.$scope = $scope;
            this.$state = $state;
            this.modal = modal;
            this.init();
        }
        ModalController.prototype.init = function () {
            //alert("");
        };
        ModalController.prototype.clickOK = function () {
            this.modal.removeMessage();
        };
        ModalController.$inject = ['$scope', '$state', 'Modal'];
        return ModalController;
    }(BaseController));
    crm_module.ModalController = ModalController;
})(crm_module || (crm_module = {}));
angular.module('crm').controller('ModalController', crm_module.ModalController);
