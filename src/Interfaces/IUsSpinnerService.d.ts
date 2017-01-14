
/**
 * UsSpinnerService interface
 * This service will allow you to control spinner element(s) by appended keys
 * You can append multiple key with two spinners and they will be triggered together
 */
export interface IUsSpinnerService {
    /**
     * Spins spinner element(s) which is linked with the passed @key
     * @param key - A key which is linked with spinner items to controll them
     */
    spin(key:string);
    /**
     * Stops the spinner element(s) which is linked with the passed @key
     * @param key - A key which is linked with spinner items to controll them
     */
    stop(key:string);
}
