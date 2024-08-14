import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAddressCard, faTools, faProjectDiagram, faEnvelope, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import styles from './FooterNavBar.module.css';

function FooterNavBar(props) {

    const handleItemClick = (item) => {
        props.onFooterNavItemClicked(item);
    };

    return (
        <div className={styles.footer_navbar}>
            <button type="button" className={styles.footer_btn} onClick={() => handleItemClick('home')}>
                <FontAwesomeIcon icon={faHome} /> Home
            </button>
            <button type="button" className={styles.footer_btn} onClick={() => handleItemClick('about')}>
                <FontAwesomeIcon icon={faAddressCard} /> About Me
            </button>
            <button type="button" className={styles.footer_btn} onClick={() => handleItemClick('skills')}>
                <FontAwesomeIcon icon={faTools} /> Skills
            </button>
            <button type="button" className={styles.footer_btn} onClick={() => handleItemClick('education')}>
                <FontAwesomeIcon icon={faGraduationCap} /> Education
            </button>
            <button type="button" className={styles.footer_btn} onClick={() => handleItemClick('projects')}>
                <FontAwesomeIcon icon={faProjectDiagram} /> Projects
            </button>
            <button type="button" className={styles.footer_btn} onClick={() => handleItemClick('contact')}>
                <FontAwesomeIcon icon={faEnvelope} /> Contact
            </button>
        </div>
    );
}

export default FooterNavBar;
