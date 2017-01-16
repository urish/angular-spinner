import { IUsSpinnerService } from '../Interfaces/IUsSpinnerService';

/**
 * UsSpinnerService
 * This service let you control spin, start and stop
 */
export class UsSpinnerService implements IUsSpinnerService {

    constructor(private $rootScope:ng.IRootScopeService) {}
    static $inject = ['$rootScope'];

    spin(key?:string) {
        this.$rootScope.$broadcast('us-spinner:spin', key);
    }

    stop(key?:string) {
        this.$rootScope.$broadcast('us-spinner:stop', key);
    }

}
