interface IBaseCompanyComponentProps {
    /**
     * Logo of the company
     */
    logo: string;
    /**
     * Name of the company
     */
    companyName: string;
    /**
     * Link to the company page
     */
    buttonLink: string;
    /**
     * Class name for the component
     */
    className?: string;
    /**
     * Type of the company card
     */
    companyCardType?: 'withDescription' | 'withoutDescription';
    /**
     * Background color of the card
     */
    backgroundColor?: 'gray' | 'white' | 'transparent';
}
interface IWithDescriptionProps extends IBaseCompanyComponentProps {
    /**
     * Number of job openings
     */
    jobCount: string;
    /**
     * Description of the company
     */
    description: string;
    /**
     * Text for the button
     */
    buttonText: string;
}
interface IWithoutDescriptionProps extends IBaseCompanyComponentProps {
    /**
     * Title of the job opening
     */
    vacantTitle: string;
    /**
     * Salary for the job opening
     */
    salary: string;
}
declare type ICompanyCardProps = IWithDescriptionProps | IWithoutDescriptionProps;

export { ICompanyCardProps, IWithDescriptionProps, IWithoutDescriptionProps };
