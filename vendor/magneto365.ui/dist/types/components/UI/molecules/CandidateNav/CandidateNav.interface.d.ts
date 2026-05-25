declare type TCandidateNav = React.HTMLAttributes<HTMLDivElement>;
interface ICandidateNavContext {
    /**
     * Handles options visibility
     */
    showOptions: boolean;
    /**
     * Function to change options visibility
     */
    onChangeOpen: (value?: boolean) => void;
}

export { ICandidateNavContext, TCandidateNav };
