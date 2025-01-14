export default function Cursos(){
    return(
        <div className="max-w-4xl mx-auto py-12">
          <div className="relative flex flex-col items-center">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full z-0"></div>

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

            <div className="flex items-center mb-12 relative z-10 flex-row-reverse">
              <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center ml-6 text-white shadow-lg"></div>
              <div className="ml-6 w-full text-right">
                <div className="text-sm font-semibold text-gray-600">Nov 2022</div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-lg font-semibold text-blue-950">SENAI - Implantação de Serviços em Nuvem - Google Cloud Foundations</h3>
                  <p className="text-gray-600">Curso de Implantação de Serviços em Nuvem com Google Cloud no SENAI.</p>
                </div>
              </div>
            </div>

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
    )
}