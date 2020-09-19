module crm_module{
    import BaseBusiness = base.business.BaseBusiness;

    export class testbusiness extends BaseBusiness{

        static $inject = ['$http']
        constructor(public $http: ng.IHttpService){
            super($http);
        }

        public init(): void {

            // jsonテスト---------------------------------------
            this.$http.get("json/test.json")
                .then(function onSuccess(response){
                    //alert("success");
                }, function onError(response){
                    //alert("error");
                });
            //-------------------------------------------------

            this.$http.get("http://localhost:8080/crm/resource/sample")
            .then(function onSuccess(response){
                    alert("success");
                }, function onError(response){
                    alert("error");
                });
        }

        public display(): void{
            //var str = document.getElementById('');
            //this.$scope.text = str;
        }
    }
}

angular.module('crm').service('testbusiness',crm_module.testbusiness);