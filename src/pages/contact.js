// React Dependendecies
import React from "react";
import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";

// Components
import useFetch from "../useFetch";

const Contact = () => {

    const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}api/contact-quotes?populate=*`)

    console.log(data)
    let rand = null; 
    let quote = []

    if (data) {
        
        rand = Math.floor(Math.random() * data.data.length) 

        quote = data.data[rand]

        console.log(rand)
        console.log(quote)
        // style={{backgroundImage: about.Background_Image}}
        return (
            <div className="contact-wrapper">
                <div className="blue-wrapper">
                    <div className="yellow-wrapper">
                        <div className="sand-wrapper">
                            <div className="pink-gradient">
                                <div className="logo-and-title">
                                    <svg id="symara-logo-contact" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 358.87 127.7">
                                        <defs>
                                            <style>
                                            {`   .cls-1 {
                                                    fill: var(--bubblegum);
                                                    stroke-width: 0px;
                                                }
                                            `}
                                            </style>
                                        </defs>
                                        <g id="Layer_1-2" data-name="Layer 1">
                                            <g>
                                            <g>
                                                <path class="cls-1" d="m24.68,10.12c3.03-3.12,6.62-5.58,10.77-7.4,4.15-1.82,8.57-2.73,13.24-2.73h90.99c1.04,0,2.08.04,3.12.13,1.04.09,2.03.22,2.99.39,3.37.69,6.55,1.88,9.54,3.57,2.99,1.69,5.67,3.76,8.05,6.23,2.38,2.47,4.39,5.24,6.04,8.31,1.64,3.07,2.77,6.3,3.37,9.67h-67.37v-14.8c0-1.38-.69-2.08-2.08-2.08h-18.56c-.61,0-1.1.22-1.49.65-.39.43-.58.91-.58,1.43v24.14c0,1.39.69,2.08,2.08,2.08h88.52v18.43c0,4.07-.95,8.11-2.86,12.14-1.9,4.02-4.28,7.51-7.14,10.45-3.12,3.12-6.73,5.58-10.84,7.4-4.11,1.82-8.55,2.73-13.3,2.73H47.78c-2.25,0-4.24-.17-5.97-.52-3.37-.69-6.58-1.88-9.6-3.57-3.03-1.69-5.73-3.76-8.11-6.23-2.38-2.47-4.37-5.23-5.97-8.31-1.6-3.07-2.71-6.3-3.31-9.67h67.88v14.8c0,1.39.69,2.08,2.08,2.08h18.56c.6,0,1.1-.21,1.49-.65.39-.43.58-.91.58-1.43v-24.14c0-1.38-.69-2.08-2.08-2.08H14.68v-18.43c.26-4.41,1.25-8.54,2.99-12.4,1.73-3.85,4.07-7.25,7.01-10.19Z"/>
                                                <path class="cls-1" d="m212.75,90.86c-4.76,0-9.22-.89-13.37-2.66-4.15-1.77-7.79-4.22-10.9-7.33-3.12-3.12-5.58-6.75-7.4-10.9-1.82-4.15-2.77-8.57-2.86-13.24h68.92v20.64c0,1.39.69,2.08,2.08,2.08h17.65c1.38,0,2.08-.69,2.08-2.08V0h68.01v56.2c0,4.76-.91,9.24-2.73,13.43-1.82,4.2-4.28,7.88-7.4,11.03-3.12,3.16-6.77,5.65-10.97,7.46-4.2,1.82-8.68,2.73-13.43,2.73h-89.69Z"/>
                                            </g>
                                            <g>
                                                <path class="cls-1" d="m1.64,114.44c.5-.51,1.09-.92,1.77-1.21.68-.3,1.41-.45,2.17-.45h14.94c.17,0,.34,0,.51.02.17.01.33.04.49.06.55.11,1.08.31,1.57.59.49.28.93.62,1.32,1.02.39.41.72.86.99,1.36.27.5.46,1.03.55,1.59h-11.06v-2.43c0-.23-.11-.34-.34-.34h-3.05c-.1,0-.18.04-.25.11-.06.07-.1.15-.1.23v3.96c0,.23.11.34.34.34h14.54v3.03c0,.67-.16,1.33-.47,1.99-.31.66-.7,1.23-1.17,1.72-.51.51-1.11.92-1.78,1.21-.67.3-1.4.45-2.18.45H5.44c-.37,0-.7-.03-.98-.08-.55-.11-1.08-.31-1.58-.59-.5-.28-.94-.62-1.33-1.02-.39-.41-.72-.86-.98-1.36-.26-.5-.44-1.03-.54-1.59h11.15v2.43c0,.23.11.34.34.34h3.05c.1,0,.18-.04.25-.11.06-.07.1-.15.1-.23v-3.96c0-.23-.11-.34-.34-.34H0v-3.03c.04-.72.21-1.4.49-2.04.28-.63.67-1.19,1.15-1.67Z"/>
                                                <path class="cls-1" d="m36.55,112.78l4.07,6.84,4.35-6.84h6.56l-9.44,14.92h-6.56l3.52-5.58h-8.1l-5.56-9.34h11.17Z"/>
                                                <path class="cls-1" d="m81.51,112.78l5.69,14.92h-11.36l-4.69-12.32-1.88,4.97,2.79,7.35h-11.36l-4.69-12.32-4.67,12.32h-1.98l5.67-14.92h11.36l1.88,4.97,1.9-4.97h11.34Z"/>
                                                <path class="cls-1" d="m89.9,127.7h-2.03l5.67-14.92h11.36l5.67,14.92h-11.32l-1.11-2.88h-7.16l-1.09,2.88Zm1.81-4.75h5.73l-2.88-7.57-2.86,7.57Z"/>
                                                <path class="cls-1" d="m135.75,127.7h-6.91l-5.03-5.56v5.56h-11.34v-14.92h16.65c.87,0,1.71.11,2.53.32.82.21,1.54.52,2.17.92.63.4,1.14.89,1.52,1.47s.58,1.24.58,1.96-.15,1.31-.46,1.84c-.31.53-.71.99-1.23,1.36-.51.38-1.1.68-1.77.91-.67.23-1.36.4-2.09.51l5.37,5.63Zm-8.91-12.7c0-.08-.03-.16-.1-.23-.06-.07-.15-.11-.25-.11h-2.69v5.58h2.69c.23,0,.34-.11.34-.34v-4.9Z"/>
                                                <path class="cls-1" d="m138.33,127.7h-2.02l5.67-14.92h11.36l5.67,14.92h-11.32l-1.11-2.88h-7.16l-1.09,2.88Zm1.81-4.75h5.73l-2.88-7.57-2.86,7.57Z"/>
                                                <path class="cls-1" d="m170.92,127.7c-.78,0-1.51-.15-2.2-.44-.68-.29-1.28-.69-1.79-1.21-.51-.51-.92-1.11-1.21-1.79s-.46-1.41-.47-2.17h11.32v3.39c0,.23.11.34.34.34h2.9c.23,0,.34-.11.34-.34v-12.7h11.17v9.23c0,.78-.15,1.52-.45,2.21-.3.69-.7,1.29-1.21,1.81s-1.11.93-1.8,1.23c-.69.3-1.42.45-2.21.45h-14.73Z"/>
                                                <path class="cls-1" d="m213.8,112.78c.78,0,1.51.15,2.2.45.68.3,1.28.7,1.79,1.21.51.51.92,1.11,1.21,1.79.3.68.45,1.42.45,2.22v3.56c0,.78-.15,1.52-.45,2.21-.3.69-.7,1.29-1.21,1.81s-1.11.93-1.79,1.23c-.68.3-1.41.45-2.2.45h-15.09c-.78-.01-1.52-.17-2.21-.47-.69-.3-1.29-.7-1.8-1.21s-.92-1.11-1.21-1.8c-.3-.69-.45-1.42-.45-2.21v-3.56c0-.78.15-1.52.45-2.21.3-.69.7-1.29,1.21-1.8.51-.51,1.11-.92,1.8-1.21.69-.3,1.42-.45,2.21-.45h15.09Zm-5.71,2.2c0-.08-.03-.16-.1-.22-.06-.06-.15-.1-.25-.1h-3.05c-.1,0-.18.03-.25.1s-.1.14-.1.22v10.53c0,.08.03.16.1.22s.15.1.25.1h3.05c.1,0,.18-.03.25-.1.06-.06.1-.14.1-.22v-10.53Z"/>
                                                <path class="cls-1" d="m247.31,112.78v14.92h-11.17v-6.5h-3.73v6.5h-11.15v-14.92h11.15v6.52h3.73v-6.52h11.17Z"/>
                                                <path class="cls-1" d="m275.27,112.78v14.92h-11.17v-.02l-3.73-9.66v9.68h-11.15v-14.92h11.15l3.73,9.66v-9.66h11.17Z"/>
                                                <path class="cls-1" d="m278.62,114.44c.5-.51,1.09-.92,1.77-1.21.68-.3,1.41-.45,2.17-.45h14.94c.17,0,.34,0,.51.02.17.01.33.04.49.06.55.11,1.08.31,1.57.59.49.28.93.62,1.32,1.02s.72.86.99,1.36c.27.5.45,1.03.55,1.59h-11.06v-2.43c0-.23-.11-.34-.34-.34h-3.05c-.1,0-.18.04-.25.11-.06.07-.1.15-.1.23v3.96c0,.23.11.34.34.34h14.54v3.03c0,.67-.16,1.33-.47,1.99-.31.66-.7,1.23-1.17,1.72-.51.51-1.1.92-1.78,1.21-.68.3-1.4.45-2.18.45h-15.01c-.37,0-.7-.03-.98-.08-.55-.11-1.08-.31-1.58-.59-.5-.28-.94-.62-1.33-1.02s-.72-.86-.98-1.36c-.26-.5-.44-1.03-.54-1.59h11.15v2.43c0,.23.11.34.34.34h3.05c.1,0,.18-.04.25-.11.06-.07.1-.15.1-.23v-3.96c0-.23-.11-.34-.34-.34h-14.56v-3.03c.04-.72.21-1.4.49-2.04.28-.63.67-1.19,1.15-1.67Z"/>
                                                <path class="cls-1" d="m325.36,112.78c.78,0,1.51.15,2.2.45.68.3,1.28.7,1.79,1.21.51.51.92,1.11,1.21,1.79.3.68.45,1.42.45,2.22v3.56c0,.78-.15,1.52-.45,2.21-.3.69-.7,1.29-1.21,1.81s-1.11.93-1.79,1.23c-.68.3-1.41.45-2.2.45h-15.09c-.78-.01-1.52-.17-2.21-.47-.69-.3-1.29-.7-1.8-1.21-.51-.51-.92-1.11-1.21-1.8-.3-.69-.45-1.42-.45-2.21v-3.56c0-.78.15-1.52.45-2.21.3-.69.7-1.29,1.21-1.8.51-.51,1.11-.92,1.8-1.21.69-.3,1.42-.45,2.21-.45h15.09Zm-5.71,2.2c0-.08-.03-.16-.1-.22s-.15-.1-.25-.1h-3.05c-.1,0-.18.03-.25.1-.06.06-.1.14-.1.22v10.53c0,.08.03.16.1.22.06.06.15.1.25.1h3.05c.1,0,.18-.03.25-.1s.1-.14.1-.22v-10.53Z"/>
                                                <path class="cls-1" d="m358.87,112.78v14.92h-11.17v-.02l-3.73-9.66v9.68h-11.15v-14.92h11.15l3.73,9.66v-9.66h11.17Z"/>
                                            </g>
                                            </g>
                                        </g>
                                        </svg>
                                        <h1>CONTACT</h1>
                                    </div>
                                    <div className="contact-form-wrapper">
                                        <form>
                                            <div className="text-input-wrapper">
                                                <input placeholder="First Name" required="true"></input>
                                                <input placeholder="Last Name" required="true"></input>
                                            </div>
                                            <div className="text-input-wrapper">
                                                <input placeholder="Email" required="true"></input>
                                                <input placeholder="Phone"></input>
                                            </div>
                                            <textarea placeholder={quote.attributes.Quote}></textarea>
                                            <div className="button-wrapper">
                                                <button>Submit</button>
                                            </div>
                                        </form>
                                        

                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div>     
            </div>                  
        )
    }
    
}

export default Contact;