var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var crm_module;
(function (crm_module) {
    var BaseController = base.controller.BaseController;
    var LGIP000001Controller = (function (_super) {
        __extends(LGIP000001Controller, _super);
        function LGIP000001Controller($scope, $state, lgip000001Business, modal, userInfo, lgip000001) {
            _super.call(this, $scope, $state);
            this.$scope = $scope;
            this.$state = $state;
            this.lgip000001Business = lgip000001Business;
            this.modal = modal;
            this.userInfo = userInfo;
            this.lgip000001 = lgip000001;
            this.lgip000001 = new crm_module.LGIP000001();
            this.init();
        }
        /**
         * 初期設定
         */
        LGIP000001Controller.prototype.init = function () {
            var _this = this;
            // 社員ＩＤの初期化
            this.lgip000001.loginUser = "";
            // パスワードの初期化
            this.lgip000001.loginPasWd = "";
            // 固定文言の取得
            this.lgip000001Business.ScrJson().then(function (response) {
                //setPropertyが使用できるようにする（angular.extendがsetProperty）
                //取得成功時
                //値をセットする
                angular.extend(_this.lgip000001, response.data);
            }, function (response) {
                //取得失敗時
            });
        };
        /**
         * ログインボタン押下時処理
         */
        LGIP000001Controller.prototype.login = function () {
            var _this = this;
            // 画面ロック
            this.modal.dispLoading();
            // メッセージを設定する領域の初期化
            var messageInfoLst = [];
            //　入力チェック
            var result = this.lgip000001Business.init(this.lgip000001, messageInfoLst);
            if (result == "OK") {
                // 入力チェックで問題がない場合
                // 社員の存在チェック
                this.lgip000001Business.login(this.lgip000001).then(function (response) {
                    // 通信成功の場合
                    // 画面ロック解除
                    _this.modal.removeLoading();
                    // 社員が存在していた場合
                    if (response.data.checkVal == "OK") {
                        //angular.extend(this.$scope.userInfo,response.data);
                        _this.userInfo.setId(response.data.id);
                        _this.userInfo.setName(response.data.name);
                        // 画面遷移
                        _this.$state.go("CRMHEADER");
                    }
                    else {
                        // 画面ロック解除
                        _this.modal.removeLoading();
                        // メッセージ追加・表示
                        messageInfoLst.push({ msgID: "E-000020", msgInfo2: [_this.lgip000001.label.word00006, _this.lgip000001.label.word00007] });
                        _this.modal.showMessege(messageInfoLst);
                    }
                }, function (response) {
                    // 通信失敗の場合
                    _this.modal.removeLoading();
                    // エラー画面をそのうち用意する予定
                    alert(JSON.stringify(response));
                });
            }
            else {
                // 入力チェックで問題がある場合
                // メッセージを表示
                this.modal.removeLoading();
                this.modal.showMessege(messageInfoLst);
            }
        };
        /**
         * クリアボタン押下時処理
         */
        LGIP000001Controller.prototype.clear = function () {
            //alert("");
        };
        LGIP000001Controller.$inject = ['$scope', '$state', 'LGIP000001Business', 'Modal', 'UserInfo'];
        return LGIP000001Controller;
    }(BaseController));
    crm_module.LGIP000001Controller = LGIP000001Controller;
})(crm_module || (crm_module = {}));
angular.module('crm').controller('LGIP000001Controller', crm_module.LGIP000001Controller);
