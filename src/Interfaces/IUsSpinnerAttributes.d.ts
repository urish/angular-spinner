
/**
 * UsSpinner directive attributes interface
 * @extends ng.IAttributes
 */
export interface IUsSpinnerAttributes extends ng.IAttributes {
    /**
     * The spinner-key will be used as an identifier (not unique) allowing you to have several spinners controlled by the same key
     */
    spinnerKey?:string,
    /**
     * Render the spinner as active if true
     * spinner-start-active is ignored if spinner-on is specified
     */
    spinnerStartActive?:string,
    /**
     * Specifies the spinner theme name to use in this usSpinner directive instance
     */
    spinnerTheme?:string,
    /**
     * usSpinner directive (can also include Spinner options)
     */
    usSpinner:string,
    /**
     * Spinner-on expression to evaluate and when gets true the spinner been activated
     */
    spinnerOn:string
}
