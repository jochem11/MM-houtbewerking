import React, { ReactNode } from 'react';
import styles from './content-section.module.scss';

interface ContentSectionProps {
    title: string;
    content: ReactNode;
    image?: ReactNode | undefined;
    imagePosition?: 'left' | 'right' | undefined;
    renderAsPaper?: boolean;
}

const ContentSection: React.FC<ContentSectionProps> = ({ title, content, image, imagePosition, renderAsPaper }) => {
    return (
        <section className={styles['content-section']}>
            <div className={`${styles['content-section__container']} ${renderAsPaper ? styles['content-section__paper'] : ''}`}>
                {!!image && imagePosition === 'left' && (
                    <div className={styles['content-section__image']}>
                        {image}
                    </div>
                )}
                <div className={styles['content-section__text']}>
                    <h2>{title}</h2>
                    <div>{content}</div>
                </div>
                {!!image && imagePosition === 'right' && (
                    <div className={styles['content-section__image']}>
                        {image}
                    </div>
                )}
            </div>
        </section>
    );
};

export default ContentSection;
