import React from 'react'
import {Link} from 'gatsby'

export default function Customer() {
    return (
        <>
            <h1>Otherworld Ink Customer Service Policy</h1>

            <h2>Our staff will:</h2>
            <ul>
                <li>act in a professional manner and be polite at all times</li>
                <li>deal with your enquiry promptly and explain if an immediate answer is not available</li>
                <li>listen to your views and suggestions</li>
                <li>provide you with advice on our facilities and services</li>
            </ul>
            
            <h2>Confidentiality</h2>
            <p>Any information gathered or held on our customers will be stored securely and will not be shared or sold onto any third party.</p>

            <h2>Communication</h2>

            <h3>Technical Support</h3>

            <p>For problems regarding the functioning of the website or payment gateway you can contact our technical team by calling us on</p>
            <p>(+44) 7510317754</p>
            <p>or sending an email to</p>
            <p><a href="mailto:tech-support@otherworldink.com" target="_blank" rel="noopener noreferrer">tech-support@otherworldink.com</a></p>

            <h3>Customer Support</h3>
            <p>For all other enquiries please give us a call on</p>
            <p>(+27) 828561934</p>
            <p>or send an email over to</p>
            <p><a href="mailto:customer-service@otherworldink.com" target="_blank" rel="noopener noreferrer">customer-service@otherworldink.com</a></p>
            <br />
            <p>Our key performance target is to reply to 95% of all formal complaints and contacts received by letter within ten working days and email complaints and contacts within five working days.</p>

            <h2>Access to Information</h2>
            <p>Information about our organisation and the services available can be seen on our website at <Link to="/about">www.otherworldink.com/about</Link>.</p>
        </>
    )
}
