// import React, { Fragment } from "react";
// import styles from "./Home.module.css";
// import photo from "../../assets/photo.png";

// function Home() {
//   const handleResumeClick = () => {
//     window.open("/resume.pdf", "_blank");
//   };

//   return (
//     <Fragment>
//       <div className={styles.container}>
//         <div className={styles.textContainer}>
//           <p className={styles.name}>Sarvesh J A</p>
//           <p className={styles.designation}>~ Software Developer</p>
//         </div>
//         <div className={styles.imageContainer}>
//           <img src={photo} alt="Sarvesh J A" />
//         </div>
//       </div>
//       <div className={styles.buttonContainer}>
//         <button className={styles.resume_button} onClick={handleResumeClick}>
//           My resume
//         </button>
//       </div>
//     </Fragment>
//   );
// }

// export default Home;
import React, { Fragment } from "react";
import styles from "./Home.module.css";
import photo from "../../assets/photo.png"; // Ensure this path is correct

function Home() {
  const handleResumeClick = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <p className={styles.name}>Sarvesh J A</p>
          <p className={styles.designation}>~ Software Developer</p>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.profileImageContainer}>
            <img
              src={photo}
              alt="Sarvesh J A"
              className={styles.profileImage}
            />
            <div className={styles.rotatingBorder}></div>
          </div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.resume_button} onClick={handleResumeClick}>
          My resume
        </button>
      </div>
    </Fragment>
  );
}

export default Home;