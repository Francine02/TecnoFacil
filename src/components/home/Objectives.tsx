import { Card } from "./Card";

export function Objectives() {
    return (
        <div className="text-center mt-5 pb-32 sm:pb-44 lg:pb-24 2xl:pb-28 pt-5">
            <div>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-semibold text-emerald-700 mb-10'>
                    Nossos Objetivos
                </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-10 pt-5 justify-items-center 2xl:mx-24">
                <Card url="https://img.icons8.com/?size=100&id=59800&format=png&color=000000" text="Facilitar a inclusão digital da população idosa." />
                <Card url="https://img.icons8.com/?size=100&id=61093&format=png&color=000000" text="Ajudar a aumentar a confiança ao navegar na internet." />
                <Card url="https://img.icons8.com/?size=100&id=cseATCASNDzw&format=png&color=000000" text="Oferecer dicas e ferramentas para o uso de tecnologia." />
                <Card url="https://img.icons8.com/?size=100&id=2862&format=png&color=000000" text="Promover uma interação segura e agradável no mundo digital." />
            </div>

        </div>
    )
}