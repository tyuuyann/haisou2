module crm_module{
    export class testDTO{
        loginUser: string;
        loginPasWd: string;
    }
}

angular.module('crm').service('testDTO',crm_module.testDTO);