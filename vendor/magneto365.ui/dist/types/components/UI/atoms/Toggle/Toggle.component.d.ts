import * as React from 'react';
import { IToggleSwitch } from './children/ToggleSwitch/ToggleSwitch.interface';

/**
 * Atom UI of Toggle. It includes a Switch.
 */
declare const Toggle: {
    Switch: React.ForwardRefExoticComponent<IToggleSwitch & React.RefAttributes<HTMLInputElement>>;
};

export { Toggle };
