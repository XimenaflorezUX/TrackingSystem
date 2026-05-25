/**
 * Data structure for a block of frequently asked questions.
 */
interface IJobsFaqs {
    /**
     * Enable rounded corners.
     * (Optional)
     */
    roundEdges?: boolean;
    /**
     * Title of the FAQ block.
     */
    title?: string;
    children?: React.ReactNode;
}

export { IJobsFaqs };
