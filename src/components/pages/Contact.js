import React, {useState} from 'react';
import { validateEmail } from '../../utils/helper';
import '../../styles/style.css';


export default function Contact() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [nameErrorMessage, setNameErrorMessage] = useState('');
    const [messageErrorMessage, setMessageErrorMessage] = useState('');

    const handleInputChange = (e) => {
     
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value

    if (inputType === 'email') {
        setEmail(inputValue);

    } else if (inputType === 'name') {
        setName(inputValue);

    } else {
        setMessage(inputValue);
   
    }

     
    }


    const handleFormSubmit = (e) => {
        e.preventDefault();
       

     if (!validateEmail(email)) {
        setEmailErrorMessage('That is not a valid email!');
        return;
     }

    


     alert(`Thanks for reaching out ${name}. I will be in touch as soon as possible.`);
     setEmail('');
     setName('');
     setMessage('');



    }
    
    return (
        <div>
            <h1 className='cm'>Contact Me</h1>
            <form className='form'>
            <h6>Name:</h6>
            {nameErrorMessage && (
        <div>
          <p className="error-text">{nameErrorMessage}</p>
        </div>
      )}
            <input className='name'
                value={name}
                name="name"
                onChange={handleInputChange}
                type="text"
                
            />
            <h6>Email:</h6>
            {emailErrorMessage && (
        <div>
          <p className="error-text">{emailErrorMessage}</p>
        </div>
      )}
            <input className='email'
                value={email}
                name="email"
                onChange={handleInputChange}
                type="email"
            
             />

            <h6>Message:</h6>
            {messageErrorMessage && (
        <div>
          <p className="error-text">{messageErrorMessage}</p>
        </div>
      )}
            <textarea className='message'
                value={message}
                name="message"
                onChange={handleInputChange}
                type="text"
           />
        <button className='submit' type="button" onClick={handleFormSubmit}>Submit</button>
         </form>
       
        </div>
    );
}