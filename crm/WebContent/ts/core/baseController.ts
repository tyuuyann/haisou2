
module base{
    export module controller{
        export class BaseController {
            static $inject = ['$scope','$http']
            constructor(
                    protected $scope: ng.IScope,
                    protected $http: ng.IHttpService){}
        }
    }
}