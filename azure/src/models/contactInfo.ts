import { IconInfo } from "./iconInfo"

/**
 * contact info object
 *
 * @export
 * @interface ContactInfo
 */
export interface ContactInfo {
    /**
     * info to render a font-awesome icon
     *
     * @type {IconInfo}
     * @memberof ContactInfo
     */
    icon    : IconInfo,
    /**
     * text to be rendered
     *
     * @type {string}
     * @memberof ContactInfo
     */
    text    : string,
    /**
     * uri to provide a link
     *
     * @type {string}
     * @memberof ContactInfo
     */
    linkTo  : string,
    /**
     * a tooltip for the contact info
     *
     * @type {string}
     * @memberof ContactInfo
     */
    hint    : string
}