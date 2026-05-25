interface IContextAppProvider {
    children: React.ReactNode;
    container?: HTMLElement;
    device?: DeviceType;
}
declare type DeviceType = 'mobile' | 'desktop';

export { DeviceType, IContextAppProvider };
