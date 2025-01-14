import React from 'react';
import styles from './ContactMethods.module.css';

function ContactMethods() {
    return (
        <div className={styles.contactMethods}>
            <a href="https://t.me/sarvesh_ja" target="_blank" rel="noopener noreferrer">
                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                    <path fill="#ffffff" d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"/>
                </svg>
            </a>
            <a href="https://wa.me/9384621061" target="_blank" rel="noopener noreferrer">
                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="#ffffff" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg>
            </a>
            <a href="https://www.linkedin.com/in/sarvesh-ja" target="_blank" rel="noopener noreferrer">
                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="#ffffff" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                </svg>
            </a>
            {/* <a href="https://www.instagram.com/_sarvesh_03_?igsh=cTIwM21ibnh5dTJw" target="_blank" rel="noopener noreferrer">
                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="#ffffff" d="M224.1 141c-63.6 0-115 51.4-115 115s51.4 115 115 115 115-51.4 115-115-51.4-115-115-115zm0 189.6c-41.1 0-74.6-33.5-74.6-74.6s33.5-74.6 74.6-74.6 74.6 33.5 74.6 74.6-33.5 74.6-74.6 74.6zm146.4-194.4c0 14.9-12.1 27-27 27s-27-12.1-27-27 12.1-27 27-27 27 12.1 27 27zm76.1 27.2c-1.7-35.7-9.9-67.3-36.2-93.6S358.3 8.1 322.6 6.3c-35.7-1.7-143.3-1.7-179 0-35.7 1.7-67.3 9.9-93.6 36.2S8.1 137.7 6.3 173.4c-1.7 35.7-1.7 143.3 0 179 1.7 35.7 9.9 67.3 36.2 93.6s57.9 34.5 93.6 36.2c35.7 1.7 143.3 1.7 179 0 35.7-1.7 67.3-9.9 93.6-36.2s34.5-57.9 36.2-93.6c1.7-35.7 1.7-143.3 0-179zm-48.5 214.7c-7.8 20.3-22.9 35.4-43.2 43.2-29.8 11.8-100.7 9-134.8 9s-105 .2-134.8-9c-20.3-7.8-35.4-22.9-43.2-43.2-11.8-29.8-9-100.7-9-134.8s-.2-105 9-134.8c7.8-20.3 22.9-35.4 43.2-43.2 29.8-11.8 100.7-9 134.8-9s105-.2 134.8 9c20.3 7.8 35.4 22.9 43.2 43.2 11.8 29.8 9 100.7 9 134.8s.2 105-9 134.8z"/>
                </svg>
            </a> */}
        </div>
    );
}

export default ContactMethods;
