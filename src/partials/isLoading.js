/* === React Elements === */
import React from "react";
import MailchimpFormContainer from "../Mailchimp/Mailchimp";

const IsLoading = () => {

    return (
        <div className="is-loading">
            <svg id="symara-logo-loading" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278.94 113.02">
                <defs>
                    <style>
                        {`   .cls-1 {
                            fill: red;
                            stroke-width: 0px;
                        }
                        `}
                    </style>
                </defs>
                <g id="Layer_1-2" data-name="Layer 1">
                    <g>
                        <path class="cls-1" d="m8.38,8.49c2.54-2.61,5.55-4.68,9.03-6.2,3.48-1.52,7.18-2.29,11.1-2.29h76.29c.87,0,1.74.04,2.61.11.87.07,1.7.18,2.5.33,2.83.58,5.5,1.58,8,2.99,2.5,1.41,4.75,3.16,6.75,5.22,1.99,2.07,3.68,4.39,5.06,6.97,1.38,2.58,2.32,5.28,2.83,8.11h-56.48v-12.41c0-1.16-.58-1.74-1.74-1.74h-15.56c-.51,0-.93.18-1.25.54-.33.36-.49.76-.49,1.2v20.24c0,1.16.58,1.74,1.74,1.74h74.22v15.45c0,3.41-.8,6.8-2.39,10.18-1.6,3.37-3.59,6.29-5.99,8.76-2.61,2.61-5.64,4.68-9.09,6.2-3.45,1.52-7.17,2.29-11.15,2.29H27.75c-1.89,0-3.56-.14-5.01-.44-2.83-.58-5.51-1.58-8.05-2.99-2.54-1.41-4.81-3.16-6.8-5.22-2-2.07-3.66-4.39-5.01-6.97-1.34-2.57-2.27-5.28-2.78-8.11h56.92v12.41c0,1.16.58,1.74,1.74,1.74h15.56c.51,0,.92-.18,1.25-.54.33-.36.49-.76.49-1.2v-20.24c0-1.16-.58-1.74-1.74-1.74H0v-15.45c.22-3.7,1.05-7.16,2.5-10.39,1.45-3.23,3.41-6.08,5.88-8.54Z"/>
                            <g>
                                <path class="cls-1" d="m3.3,99.76c.5-.51,1.09-.92,1.77-1.21.68-.3,1.41-.45,2.17-.45h14.94c.17,0,.34,0,.51.02.17.01.33.04.49.06.55.11,1.08.31,1.57.59.49.28.93.62,1.32,1.02s.72.86.99,1.36c.27.5.45,1.03.55,1.59h-11.06v-2.43c0-.23-.11-.34-.34-.34h-3.05c-.1,0-.18.04-.25.11-.06.07-.1.15-.1.23v3.96c0,.23.11.34.34.34h14.54v3.03c0,.67-.16,1.33-.47,1.99-.31.66-.7,1.23-1.17,1.72-.51.51-1.1.92-1.78,1.21-.68.3-1.4.45-2.18.45H7.09c-.37,0-.7-.03-.98-.08-.55-.11-1.08-.31-1.58-.59-.5-.28-.94-.62-1.33-1.02s-.72-.86-.98-1.36c-.26-.5-.44-1.03-.54-1.59h11.15v2.43c0,.23.11.34.34.34h3.05c.1,0,.18-.04.25-.11.06-.07.1-.15.1-.23v-3.96c0-.23-.11-.34-.34-.34H1.66v-3.03c.04-.72.21-1.4.49-2.04.28-.63.67-1.19,1.15-1.67Z"/>
                                <path class="cls-1" d="m38.21,98.1l4.07,6.84,4.35-6.84h6.57l-9.44,14.92h-6.56l3.52-5.58h-8.1l-5.56-9.34h11.17Z"/>
                                <path class="cls-1" d="m83.16,98.1l5.69,14.92h-11.36l-4.69-12.32-1.88,4.97,2.79,7.35h-11.36l-4.69-12.32-4.67,12.32h-1.98l5.67-14.92h11.36l1.88,4.97,1.9-4.97h11.34Z"/>
                                <path class="cls-1" d="m91.56,113.02h-2.02l5.67-14.92h11.36l5.67,14.92h-11.32l-1.11-2.88h-7.16l-1.09,2.88Zm1.81-4.75h5.73l-2.88-7.57-2.86,7.57Z"/>
                                <path class="cls-1" d="m137.4,113.02h-6.91l-5.03-5.56v5.56h-11.34v-14.92h16.65c.87,0,1.71.11,2.53.32.82.21,1.54.52,2.17.92.63.4,1.14.89,1.52,1.47.38.58.58,1.24.58,1.96s-.15,1.31-.46,1.84c-.31.53-.71.99-1.23,1.36-.51.38-1.1.68-1.77.91-.67.23-1.36.4-2.09.51l5.37,5.63Zm-8.91-12.7c0-.08-.03-.16-.1-.23-.06-.07-.15-.11-.25-.11h-2.69v5.58h2.69c.23,0,.34-.11.34-.34v-4.9Z"/>
                                <path class="cls-1" d="m139.98,113.02h-2.03l5.67-14.92h11.36l5.67,14.92h-11.32l-1.11-2.88h-7.16l-1.09,2.88Zm1.81-4.75h5.73l-2.88-7.57-2.86,7.57Z"/>
                                <path class="cls-1" d="m169.52,99.76c.5-.51,1.09-.92,1.77-1.21.68-.3,1.41-.45,2.17-.45h14.94c.17,0,.34,0,.51.02.17.01.33.04.49.06.55.11,1.08.31,1.57.59.49.28.93.62,1.32,1.02.39.41.72.86.99,1.36.27.5.46,1.03.55,1.59h-11.06v-2.43c0-.23-.11-.34-.34-.34h-3.05c-.1,0-.18.04-.25.11-.06.07-.1.15-.1.23v3.96c0,.23.11.34.34.34h14.54v3.03c0,.67-.16,1.33-.47,1.99-.31.66-.7,1.23-1.17,1.72-.51.51-1.11.92-1.78,1.21-.67.3-1.4.45-2.18.45h-15c-.37,0-.7-.03-.98-.08-.55-.11-1.08-.31-1.58-.59-.5-.28-.94-.62-1.33-1.02-.39-.41-.72-.86-.98-1.36-.26-.5-.44-1.03-.54-1.59h11.15v2.43c0,.23.11.34.34.34h3.05c.1,0,.18-.04.25-.11.06-.07.1-.15.1-.23v-3.96c0-.23-.11-.34-.34-.34h-14.56v-3.03c.04-.72.21-1.4.49-2.04.28-.63.67-1.19,1.15-1.67Z"/>
                                <path class="cls-1" d="m195.57,113.02h-2.03l5.67-14.92h11.36l5.67,14.92h-11.32l-1.11-2.88h-7.16l-1.09,2.88Zm1.81-4.75h5.73l-2.88-7.57-2.86,7.57Z"/>
                                <path class="cls-1" d="m241.42,113.02h-6.91l-5.03-5.56v5.56h-11.34v-14.92h16.65c.87,0,1.71.11,2.53.32.82.21,1.54.52,2.17.92.63.4,1.14.89,1.52,1.47s.58,1.24.58,1.96-.15,1.31-.46,1.84c-.31.53-.71.99-1.23,1.36-.51.38-1.1.68-1.77.91-.67.23-1.36.4-2.09.51l5.37,5.63Zm-8.91-12.7c0-.08-.03-.16-.1-.23-.06-.07-.15-.11-.25-.11h-2.69v5.58h2.69c.23,0,.34-.11.34-.34v-4.9Z"/>
                                <path class="cls-1" d="m244,113.02h-2.02l5.67-14.92h11.36l5.67,14.92h-11.32l-1.11-2.88h-7.16l-1.09,2.88Zm1.81-4.75h5.73l-2.88-7.57-2.86,7.57Z"/>
                                <path class="cls-1" d="m265.91,98.1h11.17v14.92h-11.17v-14.92Z"/>
                            </g>
                        <path class="cls-1" d="m154.33,8.49c2.54-2.61,5.55-4.68,9.03-6.2,3.48-1.52,7.18-2.29,11.1-2.29h76.29c.87,0,1.74.04,2.61.11.87.07,1.7.18,2.5.33,2.83.58,5.5,1.58,8,2.99,2.5,1.41,4.75,3.16,6.75,5.22,1.99,2.07,3.68,4.39,5.06,6.97,1.38,2.58,2.32,5.28,2.83,8.11h-56.48v-12.41c0-1.16-.58-1.74-1.74-1.74h-15.56c-.51,0-.93.18-1.25.54-.33.36-.49.76-.49,1.2v20.24c0,1.16.58,1.74,1.74,1.74h74.22v15.45c0,3.41-.8,6.8-2.39,10.18-1.6,3.37-3.59,6.29-5.99,8.76-2.61,2.61-5.64,4.68-9.09,6.2-3.45,1.52-7.17,2.29-11.15,2.29h-76.62c-1.89,0-3.56-.14-5.01-.44-2.83-.58-5.51-1.58-8.05-2.99-2.54-1.41-4.81-3.16-6.8-5.22-2-2.07-3.66-4.39-5.01-6.97-1.34-2.57-2.27-5.28-2.78-8.11h56.92v12.41c0,1.16.58,1.74,1.74,1.74h15.56c.51,0,.92-.18,1.25-.54.33-.36.49-.76.49-1.2v-20.24c0-1.16-.58-1.74-1.74-1.74h-74.33v-15.45c.22-3.7,1.05-7.16,2.5-10.39,1.45-3.23,3.41-6.08,5.88-8.54Z"/>
                    </g>
                </g>
            </svg>
        </div>
    )
}

export default IsLoading;