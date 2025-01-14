import './App.css';
import { FaLocationDot } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

function App() {
  return (
    <div className='flex flex-col lg:flex-row'>
      {/* Sidebar */}
      <div className='w-full lg:w-2/12 bg-blue-950 gap-y-4 flex flex-col items-center py-16 px-8'>
        {/* Foto */}
        <img src="./foto_miguel.jpg" alt="Foto Miguel Otto" className='rounded-full w-36 mb-8 sm:w-40' />

        {/* Sobre Mim */}
        <p className='text-start w-full text-yellow-600 font-semibold'>SOBRE MIM</p>
        <p className='text-sm text-justify text-zinc-400'>
          Meu principal objetivo pessoal é conquistar minha primeira oportunidade de trabalho na área de desenvolvimento de software.
          Busco aplicar meus conhecimentos adquiridos ao longo da minha formação e experiências para contribuir de maneira significativa com a empresa,
          oferecendo soluções eficazes e aprendendo constantemente com os desafios.
          Estou comprometido em crescer profissionalmente e ajudar a empresa a alcançar seus objetivos com dedicação e competência.
        </p>

        {/* Separador */}
        <div className='w-full border-b border-zinc-400 my-4'></div>

        {/* Links */}
        <p className='text-start w-full text-yellow-600 font-semibold'>LINKS</p>
        <div className='gap-y-4 flex flex-col'>
          <div>
            <p className='font-semibold text-zinc-200'>Linkedln :</p>
            <a href="https://www.linkedin.com/in/miguel-otto-47603b260/" className='text-sm text-zinc-400 underline underline-offset-1'>https://www.linkedin.com/in/miguel-otto-47603b260/</a>
          </div>
          <div>
            <p className='font-semibold text-zinc-200'>Portifólio :</p>
            <a href="https://portifolio-psi-vert.vercel.app" className='text-sm text-zinc-400 underline underline-offset-1'>https://portifolio-psi-vert.vercel.app</a>
          </div>
        </div>

        {/* Separador */}
        <div className='w-full border-b border-zinc-400 my-4'></div>

        {/* Idioma */}
        <p className='text-start w-full text-yellow-600 font-semibold'>IDIOMA</p>
        <p className='text-zinc-400 text-xs text-start w-full'>INGLÊS</p>
        <div className='w-full h-1 bg-zinc-400'>
          <div className='h-full bg-yellow-600' style={{ width: '30%' }}></div>
        </div>


        {/* Separador */}
        <div className='w-full border-b border-zinc-400 my-4'></div>

        {/* Carteira de Motorista */}
        <p className='text-start w-full text-yellow-600 font-semibold'>CARTEIRA DE MOTORISTA</p>
        <p className='text-start w-full text-zinc-200 text-md font-semibold'>Categoria da carteira de motorista</p>
        <p className='text-start w-full text-zinc-200 text-sm'>A e B</p>
      </div>

      {/* Main Content */}
      <div className='w-full py-24 px-8 lg:px-14'>

        {/* Header */}
        <div className='flex flex-col lg:flex-row justify-between'>
          <h1 className='text-blue-950 text-4xl lg:text-5xl font-bold py-4'>MIGUEL <br /> OTTO</h1>
          <div className='flex flex-col'>
            <div className='flex items-center'>
              <FaLocationDot className='mr-2 text-yellow-600' />
              <p className='text-sm text-zinc-600 border-b border-zinc-400 my-2 pb-2 w-full'>
                Rua Coração de Maria, 326,<br />
                Jardim Maria Aparecida, Sete Barras,<br />
                11910000, Brasil
              </p>
            </div>

            <div className='flex items-center'>
              <BsTelephoneFill className='mr-2 text-yellow-600' />
              <p className='text-sm text-zinc-600 border-b border-zinc-400 my-2 pb-2 w-full'>
                13996775011
              </p>
            </div>

            <div className='flex items-center'>
              <MdEmail className='mr-2 text-yellow-600' />
              <p className='text-sm text-zinc-600 w-full'>
                miguel1712otto@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Formação */}
        <h1 className='mt-36 font-bold text-xl text-blue-950'>FORMAÇÃO</h1>
        <div className='w-full border-b border-zinc-400 my-4'></div>

        {/* Linha do tempo de formação */}
        <div className="max-w-4xl mx-auto py-12">
          <div className="relative flex flex-col items-center">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full z-0"></div>

            {/* Senai - 2023 */}
            <div className="flex items-center mb-12 relative z-10">
              <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center text-white shadow-lg"></div>
              <div className="ml-6 w-full text-left">
                <div className="text-sm font-semibold text-gray-600">Senai - 2023</div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-lg font-semibold text-blue-950">Diploma técnico</h3>
                  <p className="text-gray-600 text-sm text-justify">Durante o curso técnico em Análise e Desenvolvimento de
                    Sistemas, adquiri uma sólida formação em desenvolvimento de
                    software, com foco em criação e manutenção de sistemas,
                    bancos de dados e soluções tecnológicas. Desenvolvi
                    habilidades em linguagens como JavaScript, PHP, SQL e Python,
                    além de experiência prática em metodologias ágeis, interfaces
                    de usuário e testes de software. Os projetos realizados
                    integraram conhecimentos de front-end, back-end e integração
                    de sistemas, preparando-me para atuar de forma prática e
                    inovadora na área de tecnologia.
                  </p>
                </div>
              </div>
            </div>

            {/* FIAP - Engenharia de Software */}
            <div className="flex items-center mb-12 relative z-10 flex-row-reverse">
              <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center text-white shadow-lg"></div>
              <div className="ml-6 w-full text-right">
                <div className="text-sm font-semibold text-gray-600">FIAP - Faculdade de Informática <br/> e Administração Paulista</div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-lg font-semibold text-blue-950">Bacharelado</h3>
                  <p className="text-gray-600 text-sm text-justify">Atualmente, curso Engenharia de Software na FIAP, com foco
                    em soluções tecnológicas e desenvolvimento de sistemas
                    complexos. O curso abrange temas como arquitetura de
                    software, engenharia de requisitos, algoritmos, banco de
                    dados, inteligência artificial, metodologias ágeis e gestão de
                    projetos. Essa formação me prepara para atuar em todas as
                    etapas do ciclo de vida de sistemas, proporcionando
                    ferramentas para desenvolver soluções inovadoras, eficientes e
                    escaláveis no mercado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conhecimentos */}
        <h1 className='mt-36 font-bold text-xl text-blue-950'>CONHECIMENTOS</h1>
        <div className='w-full border-b border-zinc-400 my-4'></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="border-2 border-yellow-600 p-4 text-center text-blue-950 font-semibold">DESENVOLVIMENTO DE SOFTWARE</div>
          <div className="border-2 border-yellow-600 p-4 text-center text-blue-950 font-semibold">LINGUAGEM DE PROGRAMAÇÃO</div>
          <div className="border-2 border-yellow-600 p-4 text-center text-blue-950 font-semibold">LÓGICA DE PROGRAMAÇÃO</div>
          <div className="border-2 border-yellow-600 p-4 text-center text-blue-950 font-semibold">DESENVOLVIMENTO WEB</div>
          <div className="border-2 border-yellow-600 p-4 text-center text-blue-950 font-semibold">GESTÃO DE PROJETOS</div>
          <div className="border-2 border-yellow-600 p-4 text-center text-blue-950 font-semibold">BANCOS DE DADOS</div>
        </div>

        {/* Cursos */}
        <h1 className='mt-36 font-bold text-xl text-blue-950'>CURSOS</h1>
        <div className='w-full border-b border-zinc-400 my-4'></div>

        <div className="max-w-4xl mx-auto py-12">
          <div className="relative flex flex-col items-center">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full z-0"></div>

            {/* Curso 1: Programador Front-End */}
            <div className="flex items-center mb-12 relative z-10">
              <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center text-white shadow-lg"></div>
              <div className="ml-6 w-full text-left">
                <div className="text-sm font-semibold text-gray-600">Out 2022</div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-lg font-semibold text-blue-950">SENAI - Programador Front-End</h3>
                  <p className="text-gray-600">Curso de Programador Front-End no SENAI.</p>
                </div>
              </div>
            </div>

            {/* Curso 2: Implantação de Serviços em Nuvem */}
            <div className="flex items-center mb-12 relative z-10 flex-row-reverse">
              <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center text-white shadow-lg"></div>
              <div className="ml-6 w-full text-right">
                <div className="text-sm font-semibold text-gray-600">Nov 2022</div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-lg font-semibold text-blue-950">SENAI - Implantação de Serviços em Nuvem - Google Cloud Foundations</h3>
                  <p className="text-gray-600">Curso de Implantação de Serviços em Nuvem com Google Cloud no SENAI.</p>
                </div>
              </div>
            </div>

            {/* Curso 3: Formação Full Stack JavaScript */}
            <div className="flex items-center mb-12 relative z-10">
              <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center text-white shadow-lg"></div>
              <div className="ml-6 w-full text-left">
                <div className="text-sm font-semibold text-gray-600">Dez 2022</div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-lg font-semibold text-blue-950">Alura - Formação Full Stack JavaScript</h3>
                  <p className="text-gray-600">Formação completa em Full Stack JavaScript na Alura.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
