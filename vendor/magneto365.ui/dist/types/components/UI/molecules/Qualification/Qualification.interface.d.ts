interface IQualification {
    /**
     * Component rating
     */
    rating?: number;
    /**
     * Function to change the rating value
     */
    onClick?: (value: number) => void;
}
interface IQualificationStar {
    /**
     * alt icons
     */
    alt?: string;
    /**
     * icons
     */
    icon?: string;
    /**
     * icons hover
     */
    iconHover?: string;
    /**
     * icons select
     */
    iconSelect?: string;
}

export { IQualification, IQualificationStar };
