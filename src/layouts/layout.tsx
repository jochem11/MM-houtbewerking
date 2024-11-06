import React from 'react';
import { HeaderProps, Header } from '@/components/header/header';
import { Footer } from '@/components/footer/footer';

interface LayoutProps extends HeaderProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({children, title, subtitle, scrollTo, scrollToText, backgroundHeaderImg}) => {
    return (
        <>
            <Header title={title} subtitle={subtitle} backgroundHeaderImg={backgroundHeaderImg} scrollToText={scrollToText} scrollTo={scrollTo} />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
};