import Arrow from '../assets/Arrow_1.svg'

export default function about() {
    return(
        <div class="grid items-center w-full grid-cols-1 mx-8 border-4 md:grid-cols-2 sm:w-full md:w-5/6 border-b-stone-900 white:bg-gray-800 dark:border-gray-700">
        <div class="grid-cols-1 px-4">
         <h1 class="z-30 pt-5 font-bold text-left text-7xl font-archivo">
            About me  ?
          </h1>
          <div
            class="relative mb-8 pb-6 mr-6 .bg-top -z-20 -left-4  ml-4 -top-4 bg-indigo-300 w-702 h-45">
      </div>
      <p class="text-justify text-xl font-archivo leading-loose tracking-wider"> Hi ! My name is <strong class='text-blue-500'>Quentin Derycke</strong>, and i am a junior application developer and designer.
       I am constantly learning and striving to improve my skills.
       I am passionate about creating intuitive and visually appealing software that provides value to users.
        Although I am still early in my career, I am confident in my abilities to contribute to a team and deliver high-quality work.
         I am excited to continue learning and growing in this field, and to use my skills to make a positive impact through technology.
    </p>
  
    <span class="flex mt-10 ">
     <img src={Arrow} alt="==>"/> <a class=" ml-1 text-center underline" href="https://github.com/quentin-derycke">github</a>
    </span>
    </div>
      <div class="flex flex-col overflow-hidden bg-white rounded-lg shadow max-w-sd">
    <img src=""
     class="object-cover w-full h-56" alt="Qtn"/> 
    <div class="flex-1 p-6 px-6 py-4">
        <h5 class="mb-2 text-xl font-bold text-gray-900 font-ibm">Quentin Derycke</h5>
        <h5 class="mb-2 text-xl font-medium text-gray-900 font-ibm">BSM</h5>
        <hr/>
         <h5 class="mb-2 text-xl font-medium text-gray-900 font-ibm">Application, Developper and Designer</h5>
    </div>
    </div>
    </div>
    )
}
