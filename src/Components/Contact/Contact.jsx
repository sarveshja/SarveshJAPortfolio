import { Fragment } from "react";
import ContactForm from "./ContactForm";
import styles from './Contact.module.css';
import ContactMethods from "./ContactMethods";

function Contact() {
    return (
        <Fragment>
            <h2 className={styles.contact_heading}>Contact</h2>
            <ContactForm />
            <ContactMethods />
        </Fragment>
    )
}

export default Contact;