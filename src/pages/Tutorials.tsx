import { CardTools } from "../components/tools/CardTools"
import { listTutorials } from "../components/tutorials/listTutorials"

export function Tutorials() {
    return (
        <div className="p-4 sm:px-6 lg:px-16 2xl:px-36 py-32 overflow-auto">
            <h1 className='text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-semibold text-emerald-700 mb-10 text-center'>
                Canais Recomendados
            </h1>

            <p className='text-base sm:text-lg lg:text-xl tracking-wide'>
                Aprender a usar a tecnologia pode ser divertido e fácil, especialmente com os recursos certos. No YouTube, existem canais dedicados a ensinar de forma clara e prática como utilizar smartphones, computadores e outros dispositivos. Explore esses canais e descubra como a tecnologia pode ser útil no seu dia a dia.            
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-6 pt-5 justify-items-center">
                {listTutorials.map((tutorials, index) => (
                    <CardTools
                        key={index}
                        img={tutorials.img}
                        page={tutorials.site}
                        description={tutorials.description}
                        title={tutorials.name}
                    />
                ))}
            </div>
        </div>
    )
}