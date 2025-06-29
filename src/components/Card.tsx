import { ShareIcon } from "../icons/ShareIcon";

interface CardProps{
    title: String;
    link: String;
    type: "twitter" | "youtube";
}


export function Card({title,link,type}:CardProps){
    return <div className=" p-4 bg-white rounded-md shadow-md border-gray-200 max-w-72 border">
        <div className="flex justify-between "> 
                    <div className="flex items-center text-md">
                        <div className="text-gray-500 pr-2">
                        <ShareIcon/>
                        </div>
                         Project Ideas
                       
                    </div>
                    <div className="flex items-center">
                        <div className="pr-2 text-gray-500">
                        <ShareIcon/>
                        </div>
                        <div className=" text-gray-500">
                            <ShareIcon/>
                        </div>
                        
                        
                    </div>

        </div>
        <div className="pt-3">
            {/* <iframe className="w-full" src="https://www.youtube.com/embed/jVVwYXV22zg?si=DCtc7MLGcW3Fgtva" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
            
            {/* <blockquote className="twitter-tweet">
                <a href="https://twitter.com/username/status/907811447862468608"></a>
            </blockquote> */}

            <blockquote className="twitter-tweet"><p lang="en" dir="ltr">First time that a car has delivered itself to its owner! <a href="https://t.co/xgZBRDaMiX">https://t.co/xgZBRDaMiX</a></p>&mdash; Elon Musk (@elonmusk) <a href="https://twitter.com/elonmusk/status/1938761702482604061?ref_src=twsrc%5Etfw">June 28, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        </div>
        
      
        </div>
}