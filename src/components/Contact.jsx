// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('service_djmmh1v', 'template_bvapyap', form.current, '5qdpBqkhjJUKpKaAr')
//       .then(
//         () => {
//           console.log('MESSAGE SENT!');
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//         }
//       );
//   };

//   return (
//     <div
//       name="contact"
//       className='w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white flex items-center justify-center'
//     >
//       <div className='max-w-screen-lg p-8 bg-gray-900 bg-opacity-75 rounded-lg shadow-lg mx-auto flex flex-col justify-center'>
//         <div className='pb-8'>
//           <p className='text-5xl font-bold inline border-b-4 border-gray-500'>Contact</p>
//         </div>
//         <form ref={form} onSubmit={sendEmail} className='flex flex-col space-y-4'>
//           <div className='mb-4'>
//             <label className='block text-gray-200 text-sm font-bold mb-2' htmlFor="user_name">
//               Name
//             </label>
//             <input
//               className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
//               type="text"
//               name="from_name"
//               id="from_name"
//             />
//           </div>
//           <div className='mb-4'>
//             <label className='block text-gray-200 text-sm font-bold mb-2' htmlFor="user_email">
//               Email
//             </label>
//             <input
//               className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
//               type="email"
//               name="from_email"
//               id="from_email"
//             />
//           </div>
//           <div className='mb-6'>
//             <label className='block text-gray-200 text-sm font-bold mb-2' htmlFor="message">
//               Message
//             </label>
//             <textarea
//               className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
//               name="message"
//               id="message"
//               rows="4"
//             />
//           </div>
//           <div className='flex items-center justify-between'>
//             <input
//               className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
//               type="submit"
//               value="Send"
//             />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_djmmh1v', 'template_bvapyap', form.current, '5qdpBqkhjJUKpKaAr')
      .then(
        () => {
          console.log('MESSAGE SENT!');
          setMessageSent(true);
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div
      name="contact"
      className='w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white flex items-center justify-center'
    >
      <div className='max-w-screen-lg p-8 bg-gray-900 bg-opacity-75 rounded-lg shadow-lg mx-auto flex flex-col justify-center'>
        <div className='pb-8'>
          <p className='text-5xl font-bold inline border-b-4 border-gray-500'>Contact</p>
        </div>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col space-y-4'>
          <div className='mb-4'>
            <label className='block text-gray-200 text-sm font-bold mb-2' htmlFor="from_name">
              Name
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type="text"
              name="from_name"
              id="from_name"
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-200 text-sm font-bold mb-2' htmlFor="from_email">
              Email
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type="email"
              name="from_email"
              id="from_email"
              required
            />
          </div>
          <div className='mb-6'>
            <label className='block text-gray-200 text-sm font-bold mb-2' htmlFor="message">
              Message
            </label>
            <textarea
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              name="message"
              id="message"
              rows="4"
              required
            />
          </div>
          <div className='flex items-center justify-between'>
            <input
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type="submit"
              value="Send"
            />
          </div>
        </form>
        {messageSent && (
          <div className='mt-4 p-4 bg-green-500 text-white rounded'>
            Message sent successfully!
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;

