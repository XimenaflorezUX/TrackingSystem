interface IChat extends React.HTMLAttributes<HTMLDivElement> {
    initialMessages?: IChat.Message[];
    children?: (props: IChat.ChildrenPayload) => React.ReactNode;
}
declare namespace IChat {
    interface Methods {
        pushMessage: (message: IChat.Message) => void;
        updateMessage: (message: IChat.Message) => void;
        clear: () => void;
        snapshot: () => IChat.Message[];
    }
    interface ReducerState {
        messages: IChat.Message[];
    }
    type ReducerActions = {
        type: 'PUSH_MESSAGE' | 'UPDATE_MESSAGE';
        payload: IChat.Message;
    } | {
        type: 'CLEAR_MESSAGES';
    };
    interface ChildrenPayload {
        messages: IChat.Message[];
    }
    interface Message {
        id: string | number;
        sender: string;
        type: string | number;
        content: React.ReactNode;
    }
}

export { IChat };
