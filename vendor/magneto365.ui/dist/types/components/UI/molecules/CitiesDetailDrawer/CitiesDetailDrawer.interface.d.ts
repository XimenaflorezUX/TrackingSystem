interface ICitiesDetailDrawer {
    cities: ICityDetail[];
    isRemote: boolean;
    textRemote?: string;
}
interface ICityDetail {
    name: string;
    url: string | null;
    title: string;
}

export { ICitiesDetailDrawer, ICityDetail };
