import React from 'react';
import styles from './SkillLevelBar.module.css';

function SkillLevelBar(props) {
    const { skill, level } = props.skillDetails;

    const skillClickHandler = () => {
        props.onSkillClick(skill);
        // console.log(skill);
    }

    return (
        <div className={styles.skillBarContainer} onClick={skillClickHandler}>
            <div className={styles.skillName}>{skill}</div>
            <div className={styles.skillBar}>
                <div className={styles.skillLevel} style={{ width: `${level}%` }}>
                    <span className={styles.skillLevelLabel}>{level}%</span>
                </div>
            </div>
        </div>
    );
}

export default SkillLevelBar;
