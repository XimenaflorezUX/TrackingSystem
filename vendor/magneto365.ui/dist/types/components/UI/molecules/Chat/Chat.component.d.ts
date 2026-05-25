import { TMessage } from './children/Message/Message.interface';
import { ILoadingDots } from './children/LoadingDots/LoadingDots.interface';
import React__default from 'react';
import { IChat } from './Chat.interface';

/**
 * This is a Chat Component API that allows you to create a chat interface with messages.
 * It uses a reducer to manage the state of messages and provides methods to push and update messages.
 */
declare const Chat: React__default.ForwardRefExoticComponent<IChat & React__default.RefAttributes<IChat.Methods>> & {
    LoadingDots: React__default.FC<ILoadingDots>;
    Message: React__default.FC<TMessage>;
};

export { Chat };
