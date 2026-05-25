import { INavMMenuAnalystRegionModal, INavMenuAnalystRegion } from '../NavMenuAnalyst/NavMenuAnalyst.interface';

interface INavMenuAnalystRegionModalProps {
    /**
     * Default language
     */
    defaultRegion: string;
    /**
     * Texts of modal
     */
    regionModal: INavMMenuAnalystRegionModal;
    /**
     * Region list
     */
    regions: INavMenuAnalystRegion[];
}

export { INavMenuAnalystRegionModalProps };
