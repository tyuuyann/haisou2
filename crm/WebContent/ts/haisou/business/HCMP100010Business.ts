module crm_module{
    import BaseBusiness = base.business.BaseBusiness;

    export class HCMP100010Business extends BaseBusiness{

        static $inject = ['$http', 'MainData', 'SystemParameter']
        constructor(public $http: ng.IHttpService,
            protected mainData: MainData,
            protected sys: SystemParameter){
            super($http);
        }

		/**
		 * 固定文言の取得
		 */
        public ScrJson(): any{
        	return this.$http.get("json/HCMP100010.json");
        }

        public getMapInfo(): any{
            // サーバに送るデータを設定
            var sendData = {};

            // サーバのＵＲＬ
            // 共通部分は後日まとめる予定
            if (this.mainData.getPcTablet() == "PC") {
                return this.$http.post(this.sys.system.PC_HTTP + "haisou/MapInfo", sendData);
            } else {
                return this.$http.post(this.sys.system.TABLET_TEST_HTTP + "haisou/MapInfo", sendData);
            }
        }
    }
}

angular.module('crm').service('HCMP100010Business',crm_module.HCMP100010Business);