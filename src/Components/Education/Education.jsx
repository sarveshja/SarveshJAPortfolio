import React from 'react';
import styles from './Education.module.css';
import sriRamachandraImage from '../../assets/ramachandra.png'; // Add a relevant image for the college
import donBoscoImage from '../../assets/donbosco.png'; // Add a relevant image for the school
import certificateImage1 from '../../assets/DCACertificate.jpeg'; // Add a relevant image for the diploma certificate
import certificateImage2 from '../../assets/spellBee.jpg'; // Add a relevant image for the spell bee certificate

function Education() {
    const openFile = (fileSrc) => {
        window.open(fileSrc, '_blank');
    };

    return (
        <div>
            <h2 className={styles.education_heading}>Education</h2>
            <div className={styles.container}>
                <h2>Schooling and College</h2>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <img src={sriRamachandraImage} alt="Sri Ramachandra Institute" />
                        <div className={styles.cardContent}>
                            <h3>Sri Ramachandra Institute of Higher Education and Research</h3>
                            <p>B.Sc. (Hons.) Computer Science (Artificial Intelligence and Data Analytics)</p>
                            <p>CGPA: 8.5</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src={donBoscoImage} alt="Don Bosco School" />
                        <div className={styles.cardContent}>
                            <h3>Don Bosco Matriculation Higher Secondary School</h3>
                            <p>HSC: 93.22%</p>
                            <p>SSLC: 90.8%</p>
                        </div>
                    </div>
                </div>

                <div className={styles.certificates}>
                    <h2>Certificates</h2>
                    <div className={styles.cards}>
                        <div className={styles.card}>
                            <h3>Diploma in Computer Application</h3>
                            <p>Completed a comprehensive course on computer applications covering various software and programming languages.</p>
                            <p>Acquired skills in MS Office, Internet, and basic programming.</p>
                            <p>Enhanced technical abilities and proficiency in computer applications.</p>
                            <button className={styles.button} onClick={() => openFile(certificateImage1)}>View Certificate</button>
                        </div>
                        <div className={styles.card}>
                            <h3>Spell Bee International</h3>
                            <p>Participated in the Spell Bee competition, showcasing excellent spelling and vocabulary skills among peers.</p>
                            <p>Demonstrated excellent spelling and vocabulary skills.</p>
                            <p>Achieved a high rank among participants.</p>
                            <button className={styles.button} onClick={() => openFile(certificateImage2)}>View Certificate</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
