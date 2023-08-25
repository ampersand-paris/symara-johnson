import React, { useState, useEffect } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const CustomForm = ({ status, message, onValidated }) => {

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); 
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email,
            MERGE1: firstName,
            MERGE2: lastName,
        });
    }

    useEffect(() => {
        if(status === "success") clearFields();
      }, [status])
    
      const clearFields = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
      }
    
    const styleObj = {
        color: 'var(--main-red',
        fontFamily: 'Uncut Sans'
    };

    return (
        <form 
            className="newsletter-form"
            onSubmit={(e) => handleSubmit(e)}
        >
            <div className="newsletter-form">
                <h3>
                    {status === "success" 
                        ? "Success!" 
                        : "Join my newsletter"
                    }
                </h3>
            </div>

            {status === "sending" && (
                <div className="newsletter-form">
                    <p>sending...</p>
                </div>
            )}

            {status === "error" && (
                <div className="newsletter-form"
                    dangerouslySetInnerHTML={{ __html: message }}
                    style={styleObj}
                />
            )}

            {status === "success" && (
                <div
                className="newsletter-form"
                dangerouslySetInnerHTML={{ __html: message }}
                style={styleObj}

                />
            )}

            {status !== "success" ? (
                <div className="newsletter-form">
                    <input 
                        label="First Name"
                        onChange={e => setFirstName(e.target.value)}
                        type="text"
                        value={firstName}
                        placeholder="First name"
                    />
                    <input 
                        label="Last Name"
                        onChange={e => setLastName(e.target.value)}
                        type="text"
                        value={lastName}
                        placeholder="Last name"
                    />
                    <input 
                        label="Email"
                        onChange={e => setEmail(e.target.value)}
                        type="email"
                        value={email}
                        placeholder="Email"
                        isRequired
                    />
                    <input 
                        className="subscribe-bttn"
                        label="Subscribe"
                        type="submit"
                        formValues={[email, firstName, lastName]}
                    />
                </div>
            ) : null}
        </form>
    )
}

export default CustomForm;