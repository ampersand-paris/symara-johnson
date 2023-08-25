/* === React Elements === */
import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from "./CustomForm";

const MailchimpFormContainer = (props) => {
        
    const postURL = `https://symarasarai.us21.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_I}`;

    return (
        <div className="newsletter-form">
            <MailchimpSubscribe 
                url={postURL}
                render={({ subscribe, status, message }) => (
                    <CustomForm
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
        </div>
    )
}

export default MailchimpFormContainer;