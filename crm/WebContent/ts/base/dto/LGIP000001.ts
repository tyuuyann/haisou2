module crm_module{
    export class LGIP000001{
        loginUser: string;
        loginPasWd: string;
    	label: LabelClass;
    }

    export class sampleInDTO{
		loginUser: string;
    	loginPswd: string;
	}

	export class sampleOutDTO{
		checkVal: string
	}

    export class LabelClass{
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