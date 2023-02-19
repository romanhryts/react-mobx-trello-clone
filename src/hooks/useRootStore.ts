import { useContext } from 'react';
import { RootStoreContext } from 'src/contexts';

export function useRootStore() {
    return useContext(RootStoreContext);
}
