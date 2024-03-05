/* === React Elements === */
import React from "react";
import MailchimpFormContainer from "../Mailchimp/Mailchimp";

const Footer = () => {

    return (
        <div className="footer">
            <MailchimpFormContainer />
            <p>Designed and Developed by <a href="https://failspacenyc.com/" target="_blank">FAILSPACE</a></p>
        </div>
    )
}

export default Footer;