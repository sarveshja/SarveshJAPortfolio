import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAddressCard, faTools, faGraduationCap, faProjectDiagram, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from './FloatingNavBar.module.css';

function FloatingNavBar(props) {

    const handleItemClick = (item) => {
        props.onFloatingNavItemClicked(item);
    };

    return (
        <div className={styles.floating_navbar}>
            <button type="button" className={styles.btn} onClick={() => handleItemClick('home')}>
                <FontAwesomeIcon icon={faHome} style={{ color: "#f7f7f7" }} />
            </button>
            <button type="button" className={styles.btn} onClick={() => handleItemClick('about')}>
                <FontAwesomeIcon icon={faAddressCard} style={{ color: "#f7f7f7" }} />
            </button>
            <button type="button" className={styles.btn} onClick={() => handleItemClick('skills')}>
                <FontAwesomeIcon icon={faTools} style={{ color: "#f7f7f7" }} />
            </button>
            <button type="button" className={styles.btn} onClick={() => handleItemClick('education')}>
                <FontAwesomeIcon icon={faGraduationCap} style={{ color: "#f7f7f7" }} />
            </button>
            <button type="button" className={styles.btn} onClick={() => handleItemClick('projects')}>
                <FontAwesomeIcon icon={faProjectDiagram} style={{ color: "#f7f7f7" }} />
            </button>
            <button type="button" className={styles.btn} onClick={() => handleItemClick('contact')}>
                <FontAwesomeIcon icon={faEnvelope} style={{ color: "#f7f7f7" }} />
            </button>
        </div>
    );
}

export default FloatingNavBar;
