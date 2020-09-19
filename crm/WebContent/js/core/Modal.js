var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var crm_module;
(function (crm_module) {
    var BaseBusiness = base.business.BaseBusiness;
    var Modal = (function (_super) {
        __extends(Modal, _super);
        function Modal($http) {
            _super.call(this, $http);
            this.$http = $http;
        }
        Modal.prototype.dispLoading = function () {
            var lodingmsg = '処理中...';
            //if(msg == undefined){
            //msg = "";
            //}
            var disMsg;
            var disgif = "<img src='./icon/icon_loader_a_wg_01_s1.gif'width='75px' height='75px' alt='" + lodingmsg + "'>";
            disMsg = "<div class='loadingMsg'>" + disgif + "</div>";
            if ($("#loading").length == 0) {
                $("body").append("<div id='loading'>" + disMsg + "</div>");
            }
        };
        Modal.prototype.removeLoading = function () {
            $("#loading").remove();
        };
        Modal.prototype.showMessege = function (massegeInfoLst) {
            //var msg: string = '・エラー1<br>・エラー２';
            var msg = "";
            //if(msg == undefined){
            //msg = "";
            //}
            //var msgInfo = ["社員ID"];
            //var messageIngo = {
            //msgID: "E-000010",
            //msgInfo2: msgInfo
            //}
            //var messageInfoLst = [];
            //messageInfoLst.push(messageIngo);
            //msgInfo = ["パスワード"];
            //messageIngo = {
            //msgID: "E-000010",
            //msgInfo2: msgInfo
            //}
            //messageInfoLst.push(messageIngo);
            this.$http.get("json/message.json").then(function (response) {
                for (var i = 0; i < massegeInfoLst.length; i++) {
                    var msgbase = "";
                    msgbase = response.data.message[massegeInfoLst[i].msgID];
                    //for(key in response.data.message){
                    //if(key == messageInfoLst[i].msgID){
                    //msgbase = response.data.message[key];
                    //}
                    //}
                    var count = 0;
                    while (true) {
                        var str = "{" + count + "}";
                        if (msgbase.indexOf(str) != -1) {
                            if (massegeInfoLst[i].msgInfo2[count] == undefined) {
                                massegeInfoLst[i].msgInfo2[count] = "";
                            }
                            var repmsg = massegeInfoLst[i].msgInfo2[count];
                            msgbase = msgbase.replace(str, repmsg);
                            count++;
                        }
                        else {
                            if (i == 0) {
                                msg = "・" + msgbase;
                            }
                            else {
                                msg = msg + "<br>・" + msgbase;
                            }
                            break;
                        }
                    }
                }
                var disMsg;
                disMsg = "<div class='Msgshow'><p>" + msg + "</p><input type='button' onclick='clickOK()' value='OK'></div>";
                if ($("#message").length == 0) {
                    $("head").append("<script type='text/javascript' id='funcClick'>function clickOK(){var elemTest = document.getElementById('Message');elemTest.parentNode.removeChild(elemTest);var elemTest = document.getElementById('funcClick');elemTest.parentNode.removeChild(elemTest);}</script>");
                    // IEを使用しないなら下記のほうがすっきりしている
                    //$("head").append("<script type='text/javascript' id='funcClick'>function clickOK(){document.getElementById('Message').remove();document.getElementById('funcClick').remove();}</script>")
                    $("body").append("<div id='Message'>" + disMsg + "</div>");
                }
            }, function (response) {
                //取得失敗時
            });
        };
        Modal.prototype.removeMessage = function () {
            $("#message").remove();
        };
        Modal.$inject = ['$http'];
        return Modal;
    }(BaseBusiness));
    crm_module.Modal = Modal;
})(crm_module || (crm_module = {}));
angular.module('crm').service('Modal', crm_module.Modal);
