
/**
 * UsSpinnerConfig interface
 */
export interface IUsSpinnerConfig {
    /**
     * Configure default options for all spinners globally
     * Any options passed from a directive still override these
     * @param config - Spinner options configuration
     */
    setDefaults(config:SpinnerOptions);
    /**
     * Themes provide method named default options for spinners. 
     * Any options passed from a directive still override these
     * @param name - Theme name
     * @param config - Spinner options configuration
     */
    setTheme(name:string, config:SpinnerOptions);
    /**
     * Spinner default options
     */
    config:SpinnerOptions;
    /**
     * Spinner options for spinners
     */
    themes: {
        [name: string]: SpinnerOptions;
    }
}
