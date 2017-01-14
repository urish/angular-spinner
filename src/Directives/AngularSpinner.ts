import { IUsSpinnerConfig } from '../Interfaces/IUsSpinnerConfig';
import { IUsSpinnerAttributes } from '../Interfaces/IUsSpinnerAttributes';
import { IUsSpinnerScope } from '../Interfaces/IUsSpinnerScope';
import * as angular from 'angular';

export const usSpinner = (SpinJSSpinner:typeof Spinner, usSpinnerConfig:IUsSpinnerConfig) => {
    
    return {
        scope: true,
        link: (scope:IUsSpinnerScope, element:ng.IAugmentedJQuery, attr:IUsSpinnerAttributes) => {
            scope.spinner = null;

            scope.key = angular.isDefined(attr.spinnerKey) ? attr.spinnerKey : false;

            scope.startActive = (attr.spinnerStartActive) ?
                scope.$eval(attr.spinnerStartActive) : scope.key ?
                false : true;

            function stopSpinner() {
                if (scope.spinner) {
                    scope.spinner.stop();
                }
            }

            scope.spin = () => {
                if (scope.spinner) {
                    scope.spinner.spin(element[0]);
                }
            };

            scope.stop = () => {
                scope.startActive = false;
                stopSpinner();
            };

            scope.$watch(attr.usSpinner, (options:SpinnerOptions) => {
                stopSpinner();

                // order of precedence: element options, theme, defaults.
                options = angular.extend(
                    {},
                    usSpinnerConfig.config,
                    attr.spinnerTheme ? usSpinnerConfig.themes[attr.spinnerTheme] : undefined,
                    options);

                scope.spinner = new SpinJSSpinner(options);
                if ((!scope.key || scope.startActive) && !attr.spinnerOn) {
                    scope.spinner.spin(element[0]);
                }
            }, true);

            if (attr.spinnerOn) {
                scope.$watch(attr.spinnerOn, (spin) => {
                    if (spin) {
                        scope.spin();
                    } else {
                        scope.stop();
                    }
                });
            }

            scope.$on('us-spinner:spin', (event, key) => {
                if (key === scope.key) {
                    scope.spin();
                }
            });

            scope.$on('us-spinner:stop', (event, key) => {
                if (key === scope.key) {
                    scope.stop();
                }
            });

            scope.$on('$destroy', () => {
                scope.stop();
                scope.spinner = null;
            });
        }
    };
}

usSpinner.$inject = ['SpinJSSpinner', 'usSpinnerConfig'];
