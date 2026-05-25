import React__default from 'react';

declare type TAdSize = '300x100' | '728x90' | '468x60' | '300x600' | '300x50';
interface IAd extends React__default.ComponentPropsWithoutRef<'ins'> {
    /**
     * Predefined ad size. When provided, sets the width and height of the ins element.
     */
    size?: TAdSize;
    /**
     * Google AdSense client ID. identifier for the AdSense account.
     */
    'data-ad-client': string;
    /**
     * Google AdSense host ID.
     * Identifier for the AdSense third party host to share the ad revenue.
     */
    'data-ad-host'?: string;
    /**
     * Google AdSense ad slot ID.
     */
    'data-ad-slot'?: string;
    /**
     * Google AdSense ad format.
     */
    'data-ad-format'?: string;
    /**
     * Whether the ad should be full-width responsive.
     */
    'data-full-width-responsive'?: string;
}

export { IAd, TAdSize };
