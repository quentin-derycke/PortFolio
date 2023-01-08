import React, {useState} from 'react';



export default function Form(){

  // Variables de State pour stocker le valeurs des champs  de formulaire
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [Company, setCompany] = useState('');
  const [message, setMessage] = useState('');


    return( <form action="mailto:quentinderycke6@gmail.com" method='get' enctype="text/plain"
    class="w-full p-8 my-8 overflow-hidden border-4 shadow-2xl md:ml-64 md:grid-cols-2 md:w-5/6 border-b-stone-900 white:bg-gray-800 dark:border-gray-700 filter "
  >
    <div>
      <h1 class="z-30 pt-5 text-4xl font-bold text-left font-archivo">
        A Project  ?
      </h1>
      <div
        class="relative pb-6 mb-8 bg-red-400 bg-top -z-20 -left-4 -top-4 w-423 h-22"
      ></div>
    </div>
    <div class="grid md:grid-cols-2 md:gap-6 sm:grid-cols-1">
      <div class="relative z-0 mb-6 group">
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          id="floating_first_name"
          class="block py-2.5 px-0 w-full  text-sm bg-transparent border-0 border-b-2 border-red-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required=""
        />
        <label
          for="floating_first_name"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >First name</label>
      </div>
      <div class="relative z-0 w-full mb-6 sm:grid-cols-1 md:grid-cols-2 md:gap-6 group">
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          id="floating_last_name"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-red-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required=""
        />
        <label
          for="floating_last_name"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Last name</label>
      </div>
    </div>
    <div class="relative z-0 w-full mb-6 group">
      <input
        type="email"
        name="email"
        value={Email}
        onChange={e => setEmail(e.target.value)}
        id="floating_email"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-red-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required=""
      />
      <label
        for="floating_email"
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >Email address</label>
    </div>
    <div class="grid sm:grid-cols-1 md:grid-cols-2 md:gap-6">
      <div class="relative z-0 w-full mb-6 group">
        <input
          type="tel"
          pattern=""
          name="phone"
          value={Phone}
          onChange={e => setPhone(e.target.value)}
          id="floating_phone"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-red-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required=""
        />
        <label
          for="floating_phone"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Phone number</label>
      </div>
      <div class="relative z-0 w-full mb-6 group">
        <input
          type="text"
          name="company"
          value={Company}
          onChange={e => setCompany(e.target.value)}
          id="floating_company"
        
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none  border-red-300 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required=""
        />
        <label
          for="floating_company"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Company</label>
      </div>
    </div>
 
    <textarea
      id="message"
      rows="4"
      class="block p-2.5 w-full text-sm text-gray-900 border-b-2 border-red-300 focus:ring-blue-600 "
      value={message}
      onChange={e => setMessage(e.target.value)}
      placeholder="Your message..."
    ></textarea>
    <button
      type="submit"
      class="text-white bg-red-200 mt-5 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
    >
     Contact-me
    </button>
  </form>)
}
