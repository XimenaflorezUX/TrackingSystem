declare type TComparativeCounterPosition = 'left' | 'center' | 'right';
interface IComparativeCounter {
    /**
     * this property sets the current counter value
     */
    current: number;
    /**
     * this property sets the max counter value
     */
    max: number;
    /**
     * this property changes the text align
     */
    position?: TComparativeCounterPosition;
    className?: string;
}

export { IComparativeCounter, TComparativeCounterPosition };
