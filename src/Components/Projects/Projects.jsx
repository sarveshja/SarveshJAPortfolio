import React from 'react';
import styles from './Projects.module.css';
import workouttracker from '../../assets/workouttracker.jpg';
import schoolwebsteproj from '../../assets/schoolwebsiteproj.jpg';
import ehr from '../../assets/ehr.jpg';
import portfolio from '../../assets/portfolio.jpg';
import ecommerce from '../../assets/ecommerce.jpg'
import snakegame from '../../assets/snakegame.jpg'

const projects = [
    {
        title: "E-Commerce Website",
        description: "Developed an advanced EHR system with ReactJS and Firebase, featuring role-based authentication. Enhanced healthcare management with defined roles for admins, doctors, nurses, and patients, improving data handling and appointment scheduling.",
        image: ecommerce,
        githubLink: "https://github.com/sarveshja/E-Commerce_website",
        videoLink: "https://youtube.com/project1",
        websiteLink: null
    },
    {
        title: "Electronic Health Records System",
        description: "Developed an advanced EHR system with ReactJS and Firebase, featuring role-based authentication. Enhanced healthcare management with defined roles for admins, doctors, nurses, and patients, improving data handling and appointment scheduling.",
        image: ehr,
        githubLink: "https://github.com/sarveshja/Electronic-Health-Records-System",
        videoLink: "https://youtube.com/project2",
        websiteLink: null
    },
    {
        title: "School Website",
        description: "Developed a comprehensive school website using React, CSS Modules, and Bootstrap. The site includes detailed pages for academics, students, admissions, faculty, and additional features, enhancing overall user experience.",
        image: schoolwebsteproj,
        githubLink: "https://github.com/sarveshja/school-website",
        videoLink: "https://youtube.com/project1",
        websiteLink : "https://school-website-6c729.web.app/"
    },
    {
        title: "Workout Tracker",
        description: "Developed a workout tracker website with Angular 14, enabling users to log workouts and view detailed visualizations of their exercise data. Features include progress tracking, performance metrics, and interactive charts for comprehensive fitness management..",
        image: workouttracker,
        githubLink: "https://github.com/sarveshja/Workout-Tracker",
        videoLink: "https://youtube.com/project2",
        websiteLink: null
    },
    {
        title: "Portfolio",
        description: "Developed a dynamic portfolio using React, Vite, CSS Modules, and Font Awesome icons, showcasing projects and skills with responsive design, smooth navigation, and interactive elements for an engaging user experience.",
        image: portfolio,
        githubLink: "https://github.com/sarveshja/SarveshJAPortfolio",
        videoLink: "https://youtube.com/project1",
        websiteLink: null
    },
    {
        title: "Snake game",
        description: "Developed a classic Snake game using Python and the Turtle package. The game features smooth controls, dynamic snake movement, food generation, and adaptive difficulty levels, offering an engaging and challenging experience.",
        image: snakegame,
        githubLink: "https://github.com/sarveshja/Snake_Game",
        videoLink: "https://youtube.com/project2",
        websiteLink:null
    }
    // Add more projects as needed
];

function Projects() {
    return (
        <div className={styles.projectsSection}>
            <h2 className={styles.projects_heading}>Projects</h2>
            <div className={styles.cardsContainer}>
                {projects.map((project, index) => (
                    <div className={styles.card} key={index}>
                        <img src={project.image} alt={`Project ${index + 1}`} className={styles.cardImage} />
                        <div className={styles.cardContent}>
                        <h2 style={{ textAlign: 'center' }}>{project.title}</h2>

                            <p style={{ textAlign: 'center' ,padding: '0 10px'}}>{project.description}</p>
                            <div className={styles.buttons}>
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={styles.githubButton}>
                                    <button className={styles.btn}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="24" height="24">
                                        <path fill="#ffffff" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                                    </svg></button>
                                </a>
                                {/* <a href={project.videoLink} target="_blank" rel="noopener noreferrer" className={styles.videoButton}>
                                    <button className={styles.btn}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#ffffff" d="M64 96c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 256-64 0 0-256L128 96l0 256-64 0L64 96zM0 403.2C0 392.6 8.6 384 19.2 384l601.6 0c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8L76.8 480C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"/></svg></button>
                                </a> */}
                                {project.websiteLink !== null && (
                                    <a href={project.websiteLink} target="_blank" rel="noopener noreferrer" className={styles.videoButton}>
                                    <button className={styles.btn}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"/></svg></button>
                                </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
