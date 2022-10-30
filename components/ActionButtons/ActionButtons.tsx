import Link from 'next/link';
// STYLES
import styles from '../../styles/components/ActionButtons.module.scss';

// INTERFACE FOR ActionButtonsProps
interface ActionButtonsProps {
    primaryLink: string;
    secondaryLink: string;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ primaryLink, secondaryLink}: ActionButtonsProps) => {
    return (
        <div className={styles['action-buttons']}>
            <button className="btn primary" type="button">
                <Link href={primaryLink}>Get in Touch</Link>
            </button>
            <button className="btn secondary" type="button">
                <Link href={secondaryLink}>Check our Work</Link>
            </button>
        </div>
    );
}

export default ActionButtons;