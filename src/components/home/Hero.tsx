import img from '../../assets/idosos1.png';

export function Hero() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg items-center py-32 sm:py-44 lg:py-24 2xl:py-28 mx-2 lg:mx-14 2xl:mx-56">
            <div className="flex items-center justify-center sm:justify-start">
                <img className='w-40 sm:w-full lg:w-80 2xl:w-4/6' src={img} alt="Homem mexendo no notebook - desenho" />
            </div> 

            <div className="text-center sm:text-left">
                <h1 className='text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-semibold text-emerald-700 mb-4'>
                    Bem-vindo à TecnoFácil
                </h1>
                <p className='text-base sm:text-lg lg:text-xl tracking-wide 2xl:pt-5'>
                    Encontre recomendações úteis de ferramentas e tutoriais em vídeo para facilitar sua jornada digital. Explore sugestões de softwares e canais do YouTube que ajudam a dominar novas tecnologias com facilidade.
                </p>
            </div>
        </div>
    )
}
