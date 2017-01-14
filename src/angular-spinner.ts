import { SpinJSSpinner } from './Constants/SpinJSSpinner';
import { UsSpinnerService } from './Services/UsSpinnerService';
import { usSpinner } from './Directives/AngularSpinner';
import { UsSpinnerConfig } from './Config/UsSpinnerConfig';
import * as angular from 'angular';

export const angularSpinner = angular
    .module('angularSpinner', [])
    .provider('usSpinnerConfig', UsSpinnerConfig)
    .constant('SpinJSSpinner', SpinJSSpinner)
    .service('usSpinnerService', UsSpinnerService)
    .directive('usSpinner', usSpinner);
