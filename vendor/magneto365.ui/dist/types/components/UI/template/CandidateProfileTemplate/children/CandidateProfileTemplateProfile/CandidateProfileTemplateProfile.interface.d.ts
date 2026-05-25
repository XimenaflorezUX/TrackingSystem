import { TCandidateProfile } from '@components/UI/molecules';

interface ICandidateProfileTemplateProfile extends TCandidateProfile {
    /**
     * The ref of the container for scroll handling
     */
    containerRef?: React.RefObject<HTMLDivElement>;
    /**
     * Returns the container
     */
    getContainer?: () => HTMLDivElement;
}

export { ICandidateProfileTemplateProfile };
