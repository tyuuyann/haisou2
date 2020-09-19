module crm_module{
	import BaseBusiness = base.business.BaseBusiness;
    export class Modal extends BaseBusiness{

        static $inject = ['$http']
        constructor(public $http: ng.IHttpService){
        	super($http);
        }
        public dispLoading(): void{
            var lodingmsg: string = '処理中...';
        	//if(msg == undefined){
            	//msg = "";
            //}

            var disMsg: string;
            var disgif: string = "<img src='./icon/icon_loader_a_wg_01_s1.gif'width='75px' height='75px' alt='" + lodingmsg + "'>"
            disMsg = "<div class='loadingMsg'>" + disgif + "</div>";
            if($("#loading").length == 0){
            	$("body").append("<div id='loading'>" + disMsg + "</div>");
            }
         }

         public removeLoading(){
            $("#loading").remove();
         }

         public showMessege(massegeInfoLst:any): void{

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

            this.$http.get("json/message.json").then((response)=>{
            	for(var i = 0; i < massegeInfoLst.length; i++){
            		var msgbase = "";
            		msgbase = response.data.message[massegeInfoLst[i].msgID];
            		//for(key in response.data.message){
            			//if(key == messageInfoLst[i].msgID){
            				//msgbase = response.data.message[key];
            			//}
            		//}
                	var count = 0;
                	while(true){
                		var str = "{" + count + "}";
                		if(msgbase.indexOf(str) != -1){
                			if(massegeInfoLst[i].msgInfo2[count] == undefined){
                				massegeInfoLst[i].msgInfo2[count] = "";
                			}
                			var repmsg = massegeInfoLst[i].msgInfo2[count];
                			msgbase = msgbase.replace(str,repmsg);
                			count ++;
                		}else{
                			if(i == 0){
                				msg ="・" + msgbase;
                			} else {
                				msg = msg + "<br>・" + msgbase;
                			}
                			break;
                		}
                	}
                }
            	var disMsg: string;
                disMsg = "<div class='Msgshow'><p>" + msg + "</p><input type='button' onclick='clickOK()' value='OK'></div>";
                if($("#message").length == 0){
                	$("head").append("<script type='text/javascript' id='funcClick'>function clickOK(){var elemTest = document.getElementById('Message');elemTest.parentNode.removeChild(elemTest);var elemTest = document.getElementById('funcClick');elemTest.parentNode.removeChild(elemTest);}</script>")
                	// IEを使用しないなら下記のほうがすっきりしている
                	//$("head").append("<script type='text/javascript' id='funcClick'>function clickOK(){document.getElementById('Message').remove();document.getElementById('funcClick').remove();}</script>")
                	$("body").append("<div id='Message'>" + disMsg + "</div>");
                }

            },(response) => {
				//取得失敗時
            });
          }

          public removeMessage(){
             $("#message").remove();
          }
   	 }

    //export class messageInfo{
    	//messageID: string;
    	//publicWord: string[];
    //}
}

angular.module('crm').service('Modal',crm_module.Modal);