declare type DIRECTIONS = 'HORIZONTAL' | 'VERTICAL';
interface IDivider {
    direction?: DIRECTIONS;
    spacing?: number;
}

export { DIRECTIONS, IDivider };
