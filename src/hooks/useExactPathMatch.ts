import { useLocation } from 'react-router-dom';

export function useExactPathMatch(url: string): boolean {
    const { pathname } = useLocation();
    const isMatching = pathname === url;
    return isMatching;
}
