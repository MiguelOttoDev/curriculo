export default function SideBar(){
    return(

        <div className='w-full lg:w-2/12 bg-blue-950 gap-y-4 flex flex-col items-center py-16 px-8'>
        <img src="./foto_miguel.jpg" alt="Foto Miguel Otto" className='rounded-full w-36 mb-8 sm:w-40' />

        <p className='text-start w-full text-yellow-600 font-semibold'>SOBRE MIM</p>
        <p className='text-sm text-justify text-zinc-400'>
          Meu principal objetivo pessoal é conquistar minha primeira oportunidade de trabalho na área de desenvolvimento de software.
          Busco aplicar meus conhecimentos adquiridos ao longo da minha formação e experiências para contribuir de maneira significativa com a empresa,
          oferecendo soluções eficazes e aprendendo constantemente com os desafios.
          Estou comprometido em crescer profissionalmente e ajudar a empresa a alcançar seus objetivos com dedicação e competência.
        </p>

        <div className='w-full border-b border-zinc-400 my-4'></div>

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

        <div className='w-full border-b border-zinc-400 my-4'></div>

        <p className='text-start w-full text-yellow-600 font-semibold'>IDIOMA</p>
        <p className='text-zinc-400 text-xs text-start w-full'>INGLÊS</p>
        <div className='w-full h-1 bg-zinc-400'>
          <div className='h-full bg-yellow-600' style={{ width: '30%' }}></div>
        </div>


        <div className='w-full border-b border-zinc-400 my-4'></div>

        <p className='text-start w-full text-yellow-600 font-semibold'>CARTEIRA DE MOTORISTA</p>
        <p className='text-start w-full text-zinc-200 text-md font-semibold'>Categoria da carteira de motorista</p>
        <p className='text-start w-full text-zinc-200 text-sm'>A e B</p>
      </div>
    )
}