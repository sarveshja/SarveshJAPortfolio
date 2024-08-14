import PageViewCounter from "./PageViewCounter";
import FooterNavBar from "./FooterNavBar";
import styles from './Footer.module.css';

function Footer(props) {

    const footerNavItemClickHandler = (item) => {
        props.onFooterNavItemClicked(item);
    }

    return (
        <div className={styles.footer}>
            <PageViewCounter />
            <FooterNavBar onFooterNavItemClicked={footerNavItemClickHandler} />
            <div>
                <h3 className={styles.footer_thanksNote}>Thank you for exploring my portfolio. Let's connect and create something remarkable together soon!</h3>
                <h4 className={styles.footer_credits}>~ Designed and Developed by Sarvesh J A</h4>
            </div>

        </div>
    )
}

export default Footer;