import { ICategoryGrid } from './CategoryGrid.interface';

declare const CategoryGrid: <T>({ elements, render: Component, columnsNumber, fullWidth }: ICategoryGrid<T>) => JSX.Element;

export { CategoryGrid as default };
