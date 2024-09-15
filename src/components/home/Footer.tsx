export function Footer() {
    return (
        <div className="py-10 mt-12 px-2 border-t-4 border-emerald-700 2xl:mx-24 flex justify-between items-center">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-black bg-gradient-to-r from-emerald-500 to-emerald-800 bg-clip-text text-transparent">TecnoFácil</h1>

            <div className="space-x-4 sm:space-x-7 pt-2">
                <button><a href="https://github.com/Francine02" target="_blank">
                    <img src="https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000" alt="github" className=' hover:opacity-80 w-10' />
                </a></button>

                <button><a href="https://www.linkedin.com/in/francine-ccruz/" target="_blank">
                    <img src="https://img.icons8.com/?size=100&id=wWBzvvvi0f5P&format=png&color=000000" alt="linkedin" className=' hover:opacity-80 w-10' />
                </a></button>

                <button><a href="https://wa.me/5551986283397" target="_blank">
                    <img src="https://img.icons8.com/?size=100&id=nAWVyuNAXlYM&format=png&color=000000" alt="whatsapp" className=' hover:opacity-80 w-10'/>
                </a></button>
            </div>
        </div>
    )
}