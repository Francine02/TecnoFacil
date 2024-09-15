interface CardProps {
    text: string;
    url: string;
}

export function Card({ text, url }: CardProps) {
    return (
        <div className="shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] 
        max-w-64 min-w-64 2xl:max-w-80 2xl:min-w-80 max-h-40 min-h-40 sm:max-h-48 sm:min-h-48 text-center p-5 border-b-4 border-emerald-700 mb-6 ">
            <img src={url} alt="icone" className="w-9 mx-auto" />
            <p className="text-base sm:text-lg lg:text-xl tracking-wide">{text}</p>
        </div>
    )
}