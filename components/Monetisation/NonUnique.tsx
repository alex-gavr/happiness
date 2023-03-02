import { hasCookie, setCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const NonUnique = () => {
    const router = useRouter();
    // NonUnique Block
    const nonUnique = hasCookie('nonUnique');
    const path = router.pathname === '/' ? true : false;
    useEffect(() => {
        if (!nonUnique) {
            setCookie('nonUnique', 'true', { path: '/', maxAge: 60 * 60 * 24 * 7, secure: true });
        } else if (path && nonUnique) {
            // NonUnique exit (middleware costs too fucking much)
            router.push('https://whoursie.com/4/5729771');
        }
    }, [nonUnique, path]);
    return <div style={{ display: 'none' }} />;
};

export default NonUnique;
