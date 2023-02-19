import { useEffect, useRef } from 'react';

export function useDidMount(
    callback: () => void,
    deps: any[]
): void {
    const done = useRef<boolean>(false);

    useEffect(() => {
        if (!done.current) {
            callback();
            done.current = true;
        }
    }, [...deps]);
}
