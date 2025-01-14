import './App.css';
import Conhecimentos from './components/Conhecimento';
import Cursos from './components/Cursos';
import Formacao from './components/Formacao';
import SideBar from './components/Sidebar';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className='flex flex-col lg:flex-row'>

      <SideBar />


      <div className='w-full py-24 px-8 lg:px-14'>

        <div className='flex flex-col lg:flex-row justify-between'>
          <h1 className='text-blue-950 text-4xl lg:text-5xl font-bold py-4'>MIGUEL <br /> OTTO</h1>
          <Contacts />
        </div>

        <h1 className='mt-36 font-bold text-xl text-blue-950'>FORMAÇÃO</h1>
        <div className='w-full border-b border-zinc-400 my-4'></div>

        <Formacao />

        <h1 className='mt-36 font-bold text-xl text-blue-950'>CONHECIMENTOS</h1>
        <div className='w-full border-b border-zinc-400 my-4'></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Conhecimentos conhecimento={"DESENVOLVIMENTO DE SOFTWARE"} />
          <Conhecimentos conhecimento={"LINGUAGEM DE PROGRAMAÇÃO"} />
          <Conhecimentos conhecimento={"LÓGICA DE PROGRAMAÇÃO"} />
          <Conhecimentos conhecimento={"DESENVOLVIMENTO WEB"} />
          <Conhecimentos conhecimento={"GESTÃO DE PROJETOS"} />
          <Conhecimentos conhecimento={"BANCOS DE DADOS"} />
        </div>



        <h1 className='mt-36 font-bold text-xl text-blue-950'>CURSOS</h1>
        <div className='w-full border-b border-zinc-400 my-4'></div>

        <Cursos />

      </div>
    </div>
  );
}

export default App;
