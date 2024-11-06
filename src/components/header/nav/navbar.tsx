import Image from 'next/image';
import styles from './navbar.module.scss';

interface NavbarProps {
    links: { name: string; url: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
    return (
        <nav className={styles.headerNav}>
            <Image src="/images/logo.png" alt="logo" className={styles.logo} width={200} height={50} />
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.url}>{link.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
