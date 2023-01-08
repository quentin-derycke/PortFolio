import vision from '../assets/VisionLogo.svg';

export default function Nav() {
    return(
        <nav class="flex justify-between p-4 ">
          <ol>
            <a class="text-lg tracking-wide font-ibm" href="#about">About</a>
          </ol>
          <ol>
            <a class="tracking-wide font-ibm" href="#skills"
              ><img src={vision} alt="Vision"
            /></a>
          </ol>
          <ol>
            <a class="text-lg tracking-wide font-ibm" href="#projects"
              >Projects</a>
          </ol>
        </nav>)
}
