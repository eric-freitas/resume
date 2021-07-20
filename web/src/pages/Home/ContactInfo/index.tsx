import React  from 'react';

export interface ContactInfoProps {
}


const ContactInfo:React.FC<ContactInfoProps>= ({ children, ...props })  => {
    
    return (
        <div className="contact-info">
            {children}
        </div>
    )
}

export default ContactInfo;