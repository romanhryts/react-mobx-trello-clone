import { memo, ReactNode } from 'react';
import { createPortal } from 'react-dom';

export const Portal = memo(({ children }: { children: ReactNode }) => {
    const isExisting = document.querySelector('#modal-root');
    let node: HTMLDivElement;
    if (!isExisting) {
        node = document.createElement('div');
        node.id = 'modal-root'
        document.body.appendChild(node);
    } else {
        node = isExisting as HTMLDivElement;
    }
    return createPortal(children, node)
})
