interface ICandidateNavButton extends React.HTMLAttributes<HTMLButtonElement> {
    toggler?: boolean;
    variant?: ICandidateNavButtonVariant;
}
declare enum ECandidateNavButtonVariant {
    RED = "red",
    DARK_BLUE = "dark-blue",
    GRAY = "gray",
    LEFT = "left",
    ARROW = "arrow"
}
declare type ICandidateNavButtonVariant = `${ECandidateNavButtonVariant}`;

export { ECandidateNavButtonVariant, ICandidateNavButton, ICandidateNavButtonVariant };
