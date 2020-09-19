
module base{
    export module business{
        export class BaseBusiness {
            static $inject = ['$http']
            constructor(
                    public $http: ng.IHttpService){}
        }
    }
}