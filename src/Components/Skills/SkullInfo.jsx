import React, { Fragment } from "react";
import styles from './SkillInfo.module.css';

import html from '../../assets/html.png';
import css from '../../assets/css.jpg';
import javascript from '../../assets/javascript.jpg';
import corejava from '../../assets/corejava.png';
import python from '../../assets/python.png';
import cProgramming from '../../assets/cprogramming.png';
import mysql from '../../assets/mysql.png';
import angular from '../../assets/angular.png';
import react from '../../assets/react.png';
import microsoftOffice from '../../assets/microsoftOffice.png';
import firebase from '../../assets/firebase.png';
import git from '../../assets/git.png';
import problemSolving from '../../assets/problemSolving.jpg';
import teamwork from '../../assets/teamwork.png';
import timeManagement from '../../assets/timeManagement.jpg';
import documentation from '../../assets/documentation.png';
import engagingPresentation from '../../assets/engagingPresentation.png';
import adaptability from '../../assets/adaptability.jpg';

function SkillInfo(props) {
    const skills_description_array = [
        {
            skill: 'HTML',
            logo: html,
            description: 'HTML5 is the latest HyperText Markup Language version, enhancing web content structuring with new elements and attributes. It improves multimedia, graphics support, and simplifies development by reducing reliance on external plugins.'
        },
        {
            skill: 'CSS',
            logo: css,
            description: 'CSS (Cascading Style Sheets) is a stylesheet language used for describing the presentation of a document written in HTML or XML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.'
        },
        {
            skill: 'JavaScript',
            logo: javascript,
            description: 'JavaScript is a versatile programming language that is primarily used for creating interactive effects within web browsers. It allows developers to create dynamically updating content, control multimedia, animate images, and much more.'
        },
        {
            skill: 'Core Java',
            logo: corejava,
            description: 'Core Java refers to the fundamentals of the Java programming language. It includes basic concepts like variables, data types, control structures, object-oriented programming, exception handling, collections, and more.'
        },
        {
            skill: 'Python',
            logo: python,
            description: 'Python is an interpreted, high-level, general-purpose programming language. Its design philosophy emphasizes code readability, and its syntax allows programmers to express concepts in fewer lines of code than possible in languages such as C++ or Java.'
        },
        {
            skill: 'C Programming',
            logo: cProgramming,
            description: 'C is a powerful general-purpose programming language. It is fast, portable, and available on all platforms. C is widely used for system programming in implementing operating systems and embedded system applications.'
        },
        {
            skill: 'MySQL',
            logo: mysql,
            description: 'MySQL is an open-source relational database management system. Its name is a combination of "My", the name of co-founder Michael Widenius’s daughter, and "SQL", the abbreviation for Structured Query Language.'
        },
        {
            skill: 'Angular',
            logo: angular,
            description: 'Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript and implements core and optional functionality as a set of TypeScript libraries that you import into your applications.'
        },
        {
            skill: 'React',
            logo: react,
            description: 'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.'
        },
        {
            skill: 'Microsoft Office',
            logo: microsoftOffice,
            description: 'Microsoft Office is a suite of office-related applications. Each application serves a unique purpose and offers a specific service to its users. For example, Microsoft Word is used for creating documents, Excel for creating spreadsheets, and PowerPoint for creating presentations.'
        },
        {
            skill: 'Firebase',
            logo: firebase,
            description: 'Firebase is a platform developed by Google for creating mobile and web applications. It provides a variety of tools and services to help you develop high-quality apps, grow your user base, and earn more money.'
        },
        {
            skill: 'Git',
            logo: git,
            description: 'Git is a distributed version-control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files.'
        },
        {
            skill: 'Problem Solving',
            logo: problemSolving,
            description: 'Problem-solving skills help you determine why an issue is happening and how to resolve that issue. It is one of the key skills that employers seek in job applicants.'
        },
        {
            skill: 'Teamwork',
            logo: teamwork,
            description: 'Teamwork involves working collaboratively with a group of people to achieve a goal. It requires mutual respect, cooperation, and the use of each team member’s strengths to accomplish the team’s objectives.'
        },
        {
            skill: 'Time Management',
            logo: timeManagement,
            description: 'Time management is the process of planning and exercising conscious control of time spent on specific activities, especially to increase effectiveness, efficiency, and productivity.'
        },
        {
            skill: 'Documentation',
            logo: documentation,
            description: 'Documentation is any communicable material that is used to describe, explain, or instruct regarding some attributes of an object, system, or procedure.'
        },
        {
            skill: 'Engaging Presentation',
            logo: engagingPresentation,
            description: 'An engaging presentation captures and maintains the audience’s attention. It includes clear and compelling content, effective use of visuals, and a confident delivery style.'
        },
        {
            skill: 'Adaptability',
            logo: adaptability,
            description: 'Adaptability is the ability to adjust to new conditions. It is a valuable skill in the workplace, as it allows employees to be flexible and cope with unexpected changes.'
        }
    ];

    const selectedSkillInfo = skills_description_array.find((skill_description) => skill_description.skill === props.selectedSkill);

    return (
        <Fragment>
            {!selectedSkillInfo && (
                <h2 className={styles.no_skill_selected_content}>Select a Skill to know about it</h2>
            )}
            {selectedSkillInfo && (
                <div className={styles.skillinfo_container}>
                    <div className={styles['skillinfo_image-container']}>
                        <img src={selectedSkillInfo.logo} alt="language_logo" />
                    </div>
                    <div className={styles['skillinfo_description-container']}>
                        <p>{selectedSkillInfo.description}</p>
                    </div>
                </div>
            )}
        </Fragment>
    );
}

export default SkillInfo;
