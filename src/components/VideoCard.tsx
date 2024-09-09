export function VideoCard(props: any) {
    return (
        <div className="p-2 cursor-pointer">
            <img  className="rounded-xl" src={props.image} loading="lazy" alt="icon" />
            <div className="grid grid-cols-12">
                <div className="col-span-1 pt-3 rounded-xl">
                    <img className="rounded-xl" loading="lazy" src={props.thumbImage} alt="" />
                </div>
                <div className="col-span-11 pl-5">
                    <div>
                        {/* Chuttamalle | Devara Second Single | NTR | Janhvi */}
                        {props.title}
                    </div>

                    <div className="col-span-11 text-gray-600 text-base">
                        {/* Deepak Adluri */}
                        {props.author}
                    </div>
                    <div className="col-span-11 text-gray-600 text-base">
                        {/* 40M | 13 days ago */}
                        {props.views}  |       {props.timestamp}
                    </div>
                </div>

            </div>
        </div>
    )
}