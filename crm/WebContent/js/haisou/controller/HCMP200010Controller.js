var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var crm_module;
(function (crm_module) {
    var BaseController = base.controller.BaseController;
    var HCMP200010Controller = (function (_super) {
        __extends(HCMP200010Controller, _super);
        function HCMP200010Controller($scope, $state, hcmp200010Business, ncmp900010business, modal, userInfo, custDetilInfo, hcmp200010) {
            _super.call(this, $scope, $state);
            this.$scope = $scope;
            this.$state = $state;
            this.hcmp200010Business = hcmp200010Business;
            this.ncmp900010business = ncmp900010business;
            this.modal = modal;
            this.userInfo = userInfo;
            this.custDetilInfo = custDetilInfo;
            this.hcmp200010 = hcmp200010;
            this.hcmp200010 = new crm_module.HCMP200010();
            this.init();
        }
        /**
         * 初期設定
         */
        HCMP200010Controller.prototype.init = function () {
            var _this = this;
            // 固定文言の取得
            this.hcmp200010Business.ScrJson().then(function (response) {
                //setPropertyが使用できるようにする（angular.extendがsetProperty）
                //取得成功時
                //値をセットする
                angular.extend(_this.hcmp200010, response.data);
                _this.getCustList();
            }, function (response) {
                //取得失敗時
            });
        };
        /**
         * 顧客一覧を取得
         */
        HCMP200010Controller.prototype.getCustList = function () {
            var _this = this;
            this.hcmp200010Business.getCustList().then(function (response) {
                //setPropertyが使用できるようにする（angular.extendがsetProperty）
                //取得成功時
                //値をセットする
                angular.extend(_this.hcmp200010, response.data);
            }, function (response) {
                //取得失敗時
            });
        };
        /**
         * 顧客詳細画面に遷移
         */
        HCMP200010Controller.prototype.goCustDetil = function (index) {
            var custList = this.hcmp200010.custInfoList;
            this.custDetilInfo.setCustId(custList[index].custid);
            this.custDetilInfo.setCust_name(custList[index].cust_name);
            this.custDetilInfo.setCust_kana(custList[index].cust_kana);
            this.custDetilInfo.setPoint_ido(custList[index].point_ido);
            this.custDetilInfo.setPoint_keido(custList[index].point_keido);
            this.custDetilInfo.setTel(custList[index].tel);
            this.custDetilInfo.setAddres(custList[index].addres);
            this.custDetilInfo.setYubino(custList[index].yubino);
            this.ncmp900010business.next("HAISOUHEADER.HCMP200010", "HAISOUHEADER.HCMP200020", true);
        };
        HCMP200010Controller.$inject = ['$scope', '$state', 'HCMP200010Business', 'NCMP900010Business', 'Modal', 'UserInfo', 'CustDetilInfo'];
        return HCMP200010Controller;
    }(BaseController));
    crm_module.HCMP200010Controller = HCMP200010Controller;
})(crm_module || (crm_module = {}));
angular.module('crm').controller('HCMP200010Controller', crm_module.HCMP200010Controller);
