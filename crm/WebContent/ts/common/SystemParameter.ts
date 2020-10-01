module crm_module{
    export class SystemParameter{
        system: Sys;
    }

    export class Sys{
        PC_HTTP: string;
        TABLET_TEST_HTTP: string;
        TABLET_HON_HTTP: string;
    }
}

angular.module('crm').service('SystemParameter',crm_module.SystemParameter);