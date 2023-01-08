import Arrow from '../assets/Arrow_1.svg'
import Php from '../assets/skills/php.svg'
import Sql from '../assets/skills/Sql.svg'
import Css3 from '../assets/skills/CSS3.svg'
import Js from '../assets/skills/Javascript.svg'
import ReactJs from '../assets/skills/React.svg'
import Figma from '../assets/skills/Figma.svg'
import HTML5 from '../assets/skills/html5.svg'
import Github from '../assets/skills/Github.svg'


export default function skills(){

    return(
        <div class="grid items-center justify-center w-full grid-cols-1 gap-8 border-4 md:grid-cols-2 md:w-5/6 border-b-stone-900 white:bg-gray-800 dark:border-gray-700">
        <div class="grid-cols-1 px-4">
         <h1 class="z-30 font-bold text-left text-7xl font-archivo pt-8">
           Need Somebody ?
          </h1>
          <div
            class="relative mb-8 pb-6 mr-6 .bg-top -z-20 -left-4  ml-4 -top-4 bg-green-600 w-702 h-45">
      </div>
      <p class="text-justify text-xl font-archivo leading-loose tracking-wider">
      Do you need a new teammate for your project? 
      Look no further! As a junior developer with experience in HTML, CSS, Tailwindcss, Javascript, React, , Php/Symfony, and MySql, 
      as well as proficiency in Figma for prototyping,
       I am available to join your team immediately and bring my skills and passion to the table
       . Don't hesitate to reach out and see how I can contribute to your project's success.   </p>

    <span class="flex mt-10 ">
     <img src={Arrow} alt='-->' /> <a class=" ml-1 text-center underline" href="https://github.com/quentin-derycke">github</a>
    </span>
  
    </div>
      <div class="flex justify-center max-w-md grid-cols-1 gap-12 md:gap-26 md:grid-cols-1 ">
<div class="origin-center rotate-0 md:rotate-45 ">
        <img  class="pb-10" src={Php} alt="php" srcset=""/>
<img src={Sql} class="origin-center rotate-45" alt="mysql" srcset=""/>
</div>
<div class="origin-center rotate-0 md:rotate-45 ">
<img class='pb-10' src={Js}  alt="js" srcset=""/>
<img src={ReactJs} alt="react" srcset=""/>
</div>
<div class="mr-8 origin-center rotate-0 md:rotate-45">
<img class="pb-10" src={HTML5} alt="html" srcset=""/>
<img src={Css3} alt="Css" srcset=""/>
</div> 
    </div>
    <div class="flex gap-4">
      <img  src={Figma} alt="Figma" srcset="" />
      <img src={Github} alt="Github" srcset=""/>
      </div> 
      </div>
    )
}
