import React__default from 'react';
import { INewFeature } from './NewFeature.interface';

/**
 * This component look for __magneto_features object in window to know if a feature is new or not.
 * If the feature is new, it will render the children with a "New" badge.
 * If the feature is not new or if the feature is not found, it will render nothing.
 *
 * Usage example:
 * Before using this component, make sure to define the "__magneto_features" object in the window.
 * this can be done using this script: https://static-next-stage.magneto365.com/lib/features/magneto.features.config.js
 *
 * ```tsx
 * <NewFeature feature="my-new-feature" onFail={(message) => console.error(message)}>
 *   This is a new feature!
 * </NewFeature>
 * ```
 */
declare const NewFeature: React__default.FC<INewFeature>;

export { NewFeature };
