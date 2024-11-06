import React from 'react';
import Image from 'next/image';
import styles from './footer.module.scss';

export const Footer: React.FC = () => {
    const navLinks = [
        { name: 'Home', url: '#home' },
        { name: 'Over ons', url: '#over-ons' },
        { name: 'Diensten', url: '#diensten' },
        { name: 'Contact', url: '#contact' },
    ];

    return (
        <footer className={styles.footer}>
            <section className={styles.footerContent}>
                <Image src="/images/logo.png" alt="Company Logo" className={styles.footerLogo} width={200} height={100} />

                <nav className={styles.footerNav}>
                    <div>
                        <h3>Navigatie</h3>
                        <ul>
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.url}>{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>

                <section className={styles.contact}>
                    <div>
                        <h3>Contact</h3>
                        <div className={styles.contactDetails}>
                            <p><strong>Adres:</strong></p>
                            <address>M&M Houtbewerking, [Uw Adres]</address>
                            <p><strong>Telefoon:</strong> <a href="tel:">[tel nr]</a></p>
                            <p><strong>Email:</strong> <a href="mailto:">[Email]</a></p>
                            <p><strong>Openingstijden:</strong> Maandag - Vrijdag, 09:00 - 18:00</p>
                        </div>
                    </div>
                </section>
            </section>
            
            <div className={styles.footerCopyright}>
                <p>&copy; {new Date().getFullYear()} M&M Houtbewerking. All rights reserved.</p>
            </div>
        </footer>
    );
};
