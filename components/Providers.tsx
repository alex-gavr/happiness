import { store } from '@/services/store';
import { AnimatePresence, LazyMotion } from 'framer-motion';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { DefaultTheme, ThemeProvider } from 'styled-components';


interface IProps {
    children: ReactNode;
    themeMode: DefaultTheme;
}

const Providers = ({ children, themeMode }: IProps) => {
    return (
        <Provider store={store}>
            <LazyMotion features={async () => (await import('../utils/domMax')).default}>
                <AnimatePresence>
                    <ThemeProvider theme={themeMode}>{children}</ThemeProvider>
                </AnimatePresence>
            </LazyMotion>
        </Provider>
    );
};

export default Providers;
