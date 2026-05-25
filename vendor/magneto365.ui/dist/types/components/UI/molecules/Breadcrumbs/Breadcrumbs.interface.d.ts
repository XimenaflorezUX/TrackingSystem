import { IBreadcrumb } from '../../atoms/Breadcrumb/Breadcrumb.interface';
import { IconProps } from '../../atoms/Icon/Icon.interface';

interface IBreadcrumbs {
    homeUrl: string;
    breadcrumbProps: IBreadcrumb;
    iconProps?: IconProps;
}

export { IBreadcrumbs };
