import { DimType } from '../../../utils/eventDispatcher/eventDispatcher.interface';

declare const useMediaQuery: <T>(defaultValue: T, options?: Partial<Record<DimType, T>> | undefined) => T;

export { useMediaQuery };
