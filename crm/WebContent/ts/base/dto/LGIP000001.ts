module crm_module{
    export class LGIP000001{
        loginUser: string;
        loginPasWd: string;
    	label: LGIP000001LabelClass;
    }

    export class LGIP000001LabelClass{
    	word00001: string;
    	word00002: string;
		word00003: string;
		word00004: string;
    	word00005: string;
    	word00006: string;
    	word00007: string;
    }
}

angular.module('crm').service('LGIP000001',crm_module.LGIP000001);