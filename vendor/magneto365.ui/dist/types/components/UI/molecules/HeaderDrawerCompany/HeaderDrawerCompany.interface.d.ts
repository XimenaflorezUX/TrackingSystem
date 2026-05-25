import { ILogoComponent } from '../../atoms/Logo/Logo.interface';

interface IHeaderDrawerCompany {
    className?: string;
    logoProps: ILogoComponent;
    logoCompany: string;
    logoCompanyAlt?: string;
    logo: string;
    alt: string;
    flag?: string;
    flagAlt?: string;
}

export { IHeaderDrawerCompany };
