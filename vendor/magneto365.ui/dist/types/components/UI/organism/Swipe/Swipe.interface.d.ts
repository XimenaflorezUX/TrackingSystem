import React__default from 'react';

interface SwipeProps {
    onSwipeLeft?: () => void;
    onSwipeRight?: () => void;
    onCloseModal?: () => void;
    children: React__default.ReactNode;
    openModal?: boolean;
    modalTitle?: string;
    modalLeftText?: string;
    modalRightText?: string;
    modalConfirmText?: string;
}

export { SwipeProps };
