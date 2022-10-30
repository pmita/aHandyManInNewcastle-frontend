import styles from '../../styles/components/Banner.module.scss';

// Interfacr for BannerProps
interface BannerProps {
    children: React.ReactNode;
    bannerImg: string;
    bannerImgAlt: string;
}

const Banner: React.FC<BannerProps> = ({ children, bannerImg, bannerImgAlt }: BannerProps) => {
    return (
        <section className={styles['banner-section']}>
            <div className={styles['banner-left']}>
                {children}
            </div>
            <div className={styles['banner-right']}>
                <img
                    src={bannerImg}
                    alt={bannerImgAlt}
                    onError={(e) => 
                        {(e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1516962080544-eac695c93791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80';}
                    }
                />
            </div>
        </section>
    );
}

export default Banner;