import { Fragment, useState } from "react";
import styles from './AvailableSkills.module.css';
import SkillLevelBar from './SkillLevelBar'; // Assuming you have this component

function AvailableSkills(props) {
    const [selectedSkillType, setSelectedSkillType] = useState(0);

    const skills = [
        [
            { id: 1, skill: "HTML", level: 90 },
            { id: 2, skill: 'CSS', level: 60 },
            { id: 3, skill: 'JavaScript', level: 40 },
            { id: 4, skill: 'Core Java', level: 90 },
            { id: 5, skill: 'Python', level: 65 },
            { id: 6, skill: 'C Programming', level: 60 },
            { id: 7, skill: 'MySQL', level: 50 }
        ],
        [
            { id: 1, skill: 'Angular', level: 70 },
            { id: 2, skill: 'React', level: 80 }
        ],
        [
            { id: 1, skill: 'Microsoft Office', level: 70 },
            { id: 2, skill: 'Firebase', level: 75 },
            { id: 3, skill: 'Git', level: 50 }
        ],
        [
            { id: 1, skill: 'Problem Solving', level: 80 },
            { id: 2, skill: 'Teamwork', level: 80 },
            { id: 3, skill: 'Time Management', level: 90 },
            { id: 4, skill: 'Documentation', level: 70 },
            { id: 5, skill: 'Engaging Presentation', level: 85 },
            { id: 6, skill: 'Adaptability', level: 90 }
        ]
    ]

    // const buttonClasses = (type) => {
    //     return ${styles.skilltype__btn} ${selectedSkillType === type ? styles.selected : ''};
    // };

    const skillClickHandler = (skill) => {
        props.onSkillClick(skill);
    }    

    const skillTypeClickHandler = (skill_number) => {
        setSelectedSkillType(skill_number);
        props.onSkillClick("");
    }

    return (
        <Fragment>
            <div className={styles.skilltype_navbar}>
                <button type="button" className={styles.skilltype__button} onClick={() => skillTypeClickHandler(0)}>Programming</button>
                <button type="button" className={styles.skilltype__button} onClick={() => skillTypeClickHandler(1)}>Frameworks</button>
                <button type="button" className={styles.skilltype__button} onClick={() => skillTypeClickHandler(2)}>Miscellaneous</button>
                <button type="button" className={styles.skilltype__button} onClick={() => skillTypeClickHandler(3)}>Soft skills</button>
            </div>
            {skills[selectedSkillType].map((skill) => {
                return (
                    <div key={skill.id}>
                        <SkillLevelBar skillDetails={skill} onSkillClick={skillClickHandler} />
                    </div>
                )
            })}
        </Fragment>
    )
}

export default AvailableSkills;