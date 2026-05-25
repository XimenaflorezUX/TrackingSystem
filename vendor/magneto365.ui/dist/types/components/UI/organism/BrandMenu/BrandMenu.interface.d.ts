import { IBrandsContainer } from '../../molecules/BrandsContainer/BrandsContainer.interface';

interface IBrandMenu {
    brandsProps: IBrandsContainer;
    companyUrl?: string;
    companyLogo: string;
    companySlug?: string | null;
    clickOut?: boolean;
    setClickOut?: React.Dispatch<React.SetStateAction<boolean>>;
}

export { IBrandMenu };
