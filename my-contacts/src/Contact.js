import React from 'react';
import PropTypes from 'prop-types';
import { useStyles } from 'react-treat';
import * as styleRefs from './Contact.treat.js';
import phoneSvg from "./resources/phone.svg"
import emailSvg from "./resources/email.svg"


const Contact = (props) => {

    const styles = useStyles(styleRefs);

    let fullName = props.firstName + " " + props.lastName;

    let phoneHref = "tel:" + props.phone;
    let emailHref = "mailto:" + props.email;

    return (
        <div className={styles.contact}>
            <img alt="profile" className={styles.avatar}
                 src={props.image}/>

            <div className={styles.contactDetails}>
                <strong className={styles.name}>{fullName}</strong>
                <p className={styles.company}>{props.company}</p>

                <div className={styles.mobileAnchorContainer}>
                    <a id="mobilePhoneAnchor" href={phoneHref}>
                        <div className={styles.anchorContainerMobile}>
                            <img src={phoneSvg}/>
                        </div>
                    </a>
                    <a id="mobileEmailAnchor" href={emailHref}>
                        <div className={styles.anchorContainerMobile}>
                            <img src={emailSvg}/>
                        </div>
                    </a>
                </div>

                <div className={styles.anchorsWeb}>
                    <img src={phoneSvg}/>
                    <a id="webPhoneAnchor" className={styles.anchor} href={phoneHref}>{props.phone}</a>
                    <img src={emailSvg}/>
                    <a id="webEmailAnchor" className={styles.anchor} href={emailHref}>{props.email}</a>
                </div>

            </div>
        </div>
    )
};

Contact.propTypes = {
    image: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    companyName: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string
};


export default Contact;
