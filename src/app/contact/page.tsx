import React from 'react';
import ContactForm from '../../components/contactForm';

function Contact() {
  return (
    <div className="flex flex-col bg-white dark:bg-gray-800 m-5 mt-10 rounded-[18px] items-start p-5">
      <div className="flex flex-row  m-4 mt-10 items-center ">
        <h1 className="font-bold text-4xl font-robotoslab dark:text-white">
          Contact
        </h1>
        <div className="bg-gradient-to-r to-pink-500 from-rose-500  w-[10rem] h-[0.2rem] rounded-lg ml-6" />
      </div>
      <div className="flex flex-col m-10  w-full self-center p-10">
        <h2 className="font-poppins text-3xl text-gray-500 tracking-wide">
          Always open to discussing product
        </h2>
        <h1 className="text-3xl  font-bold font-robotoslab mt-5 dark:text-gray-300">
          design work or partnerships.
        </h1>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
