/**
 *
 */
module crm_module{
	angular.module('crm',['ui.router']).config(['$stateProvider',function($stateProvider){
		$stateProvider
	    .state('login',{
	        url: '/login',
	        views:{
	    		'panemain':{
	    			templateUrl: 'view/LGIP000001.html',
	        		controller: 'LGIP000001Controller',
	        		controllerAs: 'lgip000001Controller'
	        	}
	    	}
	    }).state('CRMHEADER',{
	    	views:{
    			'panemain':{templateUrl: 'panel_main.html'},
    			'header@CRMHEADER':{
    				templateUrl: 'view/NCMP999901.html',
	        		controller: 'NCMP999901Controller',
	        		controllerAs: 'ncmp999901Controller'
    			}
    		}
	    }).state('CRMHEADER.NCMP000010',{
	    	views:{
				'mainContent@CRMHEADER':{
					templateUrl: 'view/NCMP000010.html',
        			controller: 'NCMP000010Controller',
        			controllerAs: 'ncmp000010Controller'
				}
			}
    	}).state('CRMHEADER.NCMP000110',{
	    	views:{
				'mainContent@CRMHEADER':{
					templateUrl: 'view/NCMP000110.html',
        			controller: 'NCMP000110Controller',
        			controllerAs: 'ncmp000110Controller'
				}
			}
    	}).state('HCMP000010',{
            views:{
                'panemain':{
                    templateUrl: 'view/HCMP000010.html',
                    controller: 'HCMP000010Controller',
                    controllerAs: 'hcmp000010Controller'
                }
            }
        }).state('HAISOUHEADER',{
            views:{
                'panemain':{templateUrl: 'panel_main.html'},
                'header@HAISOUHEADER':{
                    templateUrl: 'view/NCMP999901.html',
                    controller: 'NCMP999901Controller',
                    controllerAs: 'ncmp999901Controller'
                }
            }
        }).state('HAISOUHEADER.HCMP100010',{
            views:{
                'mainContent@HAISOUHEADER':{
                    templateUrl: 'view/HCMP100010.html',
                    controller: 'HCMP100010Controller',
                    controllerAs: 'hcmp100010Controller'
                }
            }
        }).state('HAISOUHEADER.HCMP200010',{
            views:{
                'mainContent@HAISOUHEADER':{
                    templateUrl: 'view/HCMP200010.html',
                    controller: 'HCMP200010Controller',
                    controllerAs: 'hcmp200010Controller'
                }
            }
        }).state('HAISOUHEADER.HCMP200020',{
            views:{
                'mainContent@HAISOUHEADER':{
                    templateUrl: 'view/HCMP200020.html',
                    controller: 'HCMP200020Controller',
                    controllerAs: 'hcmp200020Controller'
                }
            }
        }).state('HAISOUHEADER.HCMP300010',{
            views:{
                'mainContent@HAISOUHEADER':{
                    templateUrl: 'view/HCMP300010.html',
                    controller: 'HCMP300010Controller',
                    controllerAs: 'hcmp300010Controller'
                }
            }
        }).state('HAISOUHEADER.HCMP400010',{
            views:{
                'mainContent@HAISOUHEADER':{
                    templateUrl: 'view/HCMP400010.html',
                    controller: 'HCMP400010Controller',
                    controllerAs: 'hcmp400010Controller'
                }
            }
        });
	}]);
}

