interface IBrandsContainer {
    brands?: IBrands[];
    closeBrands?: () => void;
    ourBrandsText: string;
}
interface IBrands {
    brandImg: string;
    brandAlt: string;
    brandTitle: string;
    brandUrl: string;
}

export { IBrands, IBrandsContainer };
