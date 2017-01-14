
/**
 * UsSpinner directive scope interface
 * @extends ng.IScope
 */
export interface IUsSpinnerScope extends ng.IScope {
    startActive:boolean,
    spin(),
    stop(),
    spinner:Spinner | null,
    key:string | false | undefined
}
