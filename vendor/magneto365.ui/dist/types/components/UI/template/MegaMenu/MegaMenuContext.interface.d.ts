import { IMegaMenuTab } from '@components/UI/atoms/MegaMenuTab/MegaMenuTab.interface';
import { IMobileSearchbar } from '@components/UI/molecules';
import { IPopoverRef } from '@components/UI/molecules/MegaMenuPopover/MegaMenuPopover.interface';
import { IlistMenuUserProps } from '@components/UI/organism';
import React__default, { ReactNode } from 'react';
import { ISelectOptions } from '@components/UI/organism/Select2/Select2.interface';
import { IMegaMenuSearchBar } from '@components/UI/molecules/MegaMenuSearchBar/MegaMenuSearchBar.interface';

interface IMegaMenuLink {
    label: string;
    url: string;
    onClick?: () => void;
    target?: string;
    icon?: string | undefined;
}
interface IMegaMenuAction {
    label: string;
    icon?: string | undefined;
}
interface IMegaMenuSocialHeader {
    helpOptions: IMegaMenuLink[];
    tabs: IMegaMenuTab[];
    helpAction?: IMegaMenuAction;
    blog?: IMegaMenuLink;
}
interface IMegaMenuMainHeader {
    loginProps?: {
        loginText: string;
        loginUrl: string;
        signUpText: string;
        onClickSignUp: (event: Event) => Promise<void>;
    };
    selectCountry?: ISelectOptions<unknown>;
    searchBarProps?: IMegaMenuSearchBar;
    mobileSearchBarProps: IMobileSearchbar;
    homeUrl?: string;
    homeText?: string;
}
interface IMegaMenuJobsTabs {
    label: string;
    url: string;
    content?: ReactNode;
}
interface IMegaMenuJobs {
    tabs: IMegaMenuJobsTabs[];
    onChangeTab?: (index: number) => void;
    jobAction?: IMegaMenuAction;
    allJobsAction?: IMegaMenuLink;
    popoverRef?: React__default.Ref<IPopoverRef>;
}
interface IMegaMenuContext {
    socialHeaderProps: IMegaMenuSocialHeader;
    jobsProps: IMegaMenuJobs;
    mainHeaderProps: IMegaMenuMainHeader;
    listMenuUserProps: IlistMenuUserProps;
}

export { IMegaMenuAction, IMegaMenuContext, IMegaMenuJobs, IMegaMenuJobsTabs, IMegaMenuLink, IMegaMenuMainHeader, IMegaMenuSocialHeader };
