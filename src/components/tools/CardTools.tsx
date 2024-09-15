interface CardToolsProps {
    img : string;
    page : string;
    description : string;
    title : string;
}

export function CardTools({img, page, description, title} : CardToolsProps) {
    return (
        <div className="flex flex-col mt-12 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-lg max-w-80">
            <div className="h-40 m-2.5 overflow-hidden rounded-lg">
                <img src={img} alt={title} />
            </div>
            <div className="px-4">
                <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                    {title}
                </h6>
                <p className="leading-normal">
                    {description}
                </p>
            </div>
            <div className="px-4 pb-4 pt-0 mt-2">
                <button className="py-2 px-4 hover:opacity-80 text-white rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-900 font-semibold" type="button">
                    <a href={page}>Visite o site</a>
                </button>
            </div>
        </div>
    )
}