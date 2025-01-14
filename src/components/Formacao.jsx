export default function Formacao(){
    return(
        <div className="max-w-4xl mx-auto py-12">
        <div className="relative flex flex-col items-center">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full z-0"></div>

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

          <div className="flex items-center mb-12 relative z-10 flex-row-reverse">
            <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center ml-6 text-white shadow-lg"></div>
            <div className="ml-6 w-full text-right">
              <div className="text-sm font-semibold text-gray-600">FIAP</div>
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
    )
}