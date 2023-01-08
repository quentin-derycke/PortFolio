
import './App.css';
import Nav from './components/Nav.jsx'
import Head from './components/Header.jsx';
import Form from './components/Form';
import About from './components/About.jsx';
import Skills from './components/Skills';
import Projects from './components/Project';
export default function App() {
  return (
    <body>
      <header>
        <Nav />

        <section class=" px-4 container grid items-center grid-cols-1 md:grid-cols-1 sm:grid-cols-1 justify-items-center lg:grid-cols-2">
          <Head name='Quentin' lastName= 'Derycke' title='Application Developper and Designer' />
          <Form />
        </section>
      </header>
      <section id="about" class=" px-4 grid place-items-center mt-40">
        <About />
        </section>
        <section id="skills" class=" px-4 grid place-items-center mt-40">
          <Skills/>
        </section>
        <section id="projects" class=" px-4 grid place-items-center mt-40">
          <Projects/>
        </section>
    </body>
  )
}
