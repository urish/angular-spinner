import { IUsSpinnerConfig } from '../Interfaces/IUsSpinnerConfig';

/**
 * UsSpinnerConfig
 */
export class UsSpinnerConfig implements ng.IServiceProvider, IUsSpinnerConfig {
    
    config:SpinnerOptions;
    themes: {
        [name: string]: SpinnerOptions;
    }

    constructor() {
        this.config = {};
        this.themes = {};
    }

    setDefaults(config:SpinnerOptions) {
        this.config = config || this.config;
    }
    
    setTheme(name:string, config:SpinnerOptions) {
        this.themes[name] = config;
    }

    $get () {
        let { config, themes } = this;
        
        return {
            config,
            themes
        };
    }

}
