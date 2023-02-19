import { createContext, ReactNode } from 'react';
import { IRootStore } from 'src/types';
import { RootStore } from 'src/store';
import { useRootStore } from 'src/hooks';

export const RootStoreContext = createContext<IRootStore>(new RootStore());

export const RootStoreContextProvider = ({ children }: { children: ReactNode }) => {
    const store = useRootStore();
    return (
        <RootStoreContext.Provider value={store}>
            {children}
        </RootStoreContext.Provider>
    )
}
