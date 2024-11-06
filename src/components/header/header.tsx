import React, { ImgHTMLAttributes } from 'react';
import styles from './header.module.scss';
import Navbar from './nav/navbar';

export interface HeaderProps {
    title: string;
    subtitle?: string;
    scrollTo?: string;
    scrollToText?: string;
    backgroundHeaderImg: string;
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle, scrollTo, scrollToText, backgroundHeaderImg }) => {
    const headerStyle = {
        backgroundImage: `linear-gradient(to right bottom, rgba(200, 140, 0, 0.75), rgba(255, 200, 50, 0.75)), url(${backgroundHeaderImg})`
    };

    return (
        <header className={styles.header} style={headerStyle}>
            <Navbar links={[
                { name: 'Home', url: '#home' },
                { name: 'Over ons', url: '#over-ons' },
                { name: 'Diensten', url: '#diensten' },
                { name: 'Contact', url: '#contact' }
            ]} />
            <div className={styles.headerContent}>
                <h1>
                    <span>{title}</span>
                    {subtitle && <span> - {subtitle}</span>}
                </h1>
                {scrollTo && scrollToText && <a href={`#${scrollTo}`}>{scrollToText}</a>}
            </div>
        </header>
    );
};
