import { CardTools } from "../components/tools/CardTools";
import { listTools } from "../components/tools/listTools";

export function Tools() {
    return (
        <div className="p-4 sm:px-6 lg:px-16 2xl:px-36 py-32 overflow-auto">
            <h1 className='text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-semibold text-emerald-700 mb-10 text-center'>
                Ferramentas Recomendadas
            </h1>
            <p className='text-base sm:text-lg lg:text-xl tracking-wide'>
                Para aprimorar a experiência digital, selecionamos cuidadosamente uma gama de ferramentas e recursos recomendados que visam facilitar a navegação e o uso de tecnologias. Nosso site serve como um guia confiável, apresentando ferramentas e canais de terceiros que ajudam a superar desafios comuns no uso da tecnologia.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 sm:gap-6 pt-5 justify-items-center">
                {listTools.map((tool, index) => (
                    <CardTools
                        key={index}
                        img={tool.img}
                        page={tool.site}
                        description={tool.description}
                        title={tool.name}
                    />
                ))}
            </div>
        </div>
    )
}