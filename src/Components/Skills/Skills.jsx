import { Fragment , useRef, useState } from "react";
import styles from './Skills.module.css';
import SkillInfo from "./SkullInfo";
import AvailableSkills from "./AvailableSkills";

function Skills() {
    const [skillSelected , setSkillSelected] = useState('');
    const skillInfoRef = useRef("");

    const skillClickHandler = (skill) => {
        setSkillSelected(skill);
        if (skillInfoRef.current && skill !== "") {
            skillInfoRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <Fragment>
            <div className={styles.skills_heading}>
                My Skills
            </div>
            <div className={styles.skills_availableSkills}>
                <AvailableSkills onSkillClick={skillClickHandler} />
            </div>
            <div ref={skillInfoRef}>
                <SkillInfo selectedSkill={skillSelected} />
            </div>
        </Fragment>
    )
}

export default Skills; 