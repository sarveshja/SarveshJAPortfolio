// ContactForm.jsx
import React from 'react';
import styles from './ContactForm.module.css';

function ContactForm() {
    return (
        <form
            className={styles.contactForm}
            action="https://formspree.io/f/xanwooww"
            method="POST"
        >
            <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className={styles.formInput}
                    placeholder="Enter your name"
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className={styles.formInput}
                    placeholder="Enter your email"
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="phone_no" className={styles.formLabel}>Mobile Number:</label>
                <input
                    type="tel"
                    id="phone_no"
                    name="phone_no"
                    className={styles.formInput}
                    placeholder="Enter your mobile number"
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>Message:</label>
                <textarea
                    cols="20"
                    rows="6"
                    id="message"
                    name="message"
                    className={styles.formInputMessage}
                    placeholder="Enter your message"
                    required
                />
            </div>
            <button type="submit" className={styles.contactFormSubmitButton}>Submit</button>
        </form>
    );
}

export default ContactForm;
