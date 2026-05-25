import React__default from 'react';
import { IUserTerm } from './UserTerms.interface';

declare const UserTerms: React__default.FC<IUserTerm> & {
    Title: React__default.FC<IUserTerm.Title>;
    Subtitle: React__default.FC<IUserTerm.SubTitle>;
    Content: React__default.FC<IUserTerm.Content>;
    Check: React__default.FC<IUserTerm.Check>;
    Submit: React__default.FC<IUserTerm.Submit>;
    Highlight: React__default.FC<IUserTerm.Highlight>;
    Text: React__default.FC<IUserTerm.Highlight>;
    UlList: React__default.FC<IUserTerm.UlList>;
};

export { UserTerms };
