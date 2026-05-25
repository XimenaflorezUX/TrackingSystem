interface IMegaMenuSearchBar {
    location: ISearchBar;
    occupation: ISearchBar;
    className?: string;
}
interface ISearchBar {
    /**
     * Sets the value for the input in the searchbar
     */
    termValue: any;
    /**
     * Placeholder text for the searchbar
     */
    placeholder: string;
    /**
     * Handler for the input value
     */
    onSearch: (searchValue: string) => void;
    /**
     * Icon in search input
     */
    icon?: string;
    /**
     * Action Icon
     */
    actionIcon?: string;
    /**
     * options
     */
    options: ISearchOptions[];
    /**
     * sectionTitle
     */
    sectionTitle?: ISectionTitle;
    /**
     * class name
     */
    className?: string;
    /**
     *
     */
    onSelectOption?: (option: ISearchOptions) => void;
    /**
     *
     */
    noContent?: {
        title: string;
        subtitle: string;
    };
    recentSearch?: IRecentSearch;
    /**
     * Disable dropdown suggestions
     */
    disableOptions?: boolean;
    /**
     * Callback executed when user presses Enter
     */
    onSubmit?: (termValue: string) => void;
}
interface ISectionTitle {
    title: string;
    url: string;
    onClick: (event: React.MouseEvent) => void;
    icon?: string;
}
interface ISearchOptions {
    title: string;
    subtitle?: string;
    url: string;
    field?: string;
}
interface IRecentSearch {
    recentSearchesTitle: string;
    recentSearches: ISearchOptions[];
    mostSearchedTitle: string;
    mostSearched: ISearchOptions[];
}

export { IMegaMenuSearchBar, IRecentSearch, ISearchBar, ISearchOptions, ISectionTitle };
