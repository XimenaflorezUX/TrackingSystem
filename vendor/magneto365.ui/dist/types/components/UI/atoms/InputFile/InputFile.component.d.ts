import React__default from 'react';
import { TInputFileButton } from './children/InputFileButton/InputFileButton.interface';
import { TInputFileContainer } from './children/InputFileContainer/InputFileContainer.interface';
import { TInputFile } from '@components/UI/atoms/InputFile/inputFile.interface';

/**
 * Atom UI component of Input File
 */
declare const InputFile: React__default.FC<TInputFile> & {
    Button: React__default.FC<TInputFileButton>;
    Container: React__default.FC<TInputFileContainer>;
};

export { InputFile };
