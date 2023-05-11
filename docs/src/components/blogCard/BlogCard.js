import Link from "next/link";
import Image from "next/image"
import { ImPriceTags } from "react-icons/im";

export default function BlogCard ({title, description, datePosted, tags, thumbnail, link}) {
    return (
        <div className=" w-6/8 lg:w-100">
            <div className="relative lg:z-50 lg:-ml-8 lg:mr-8 lg:-mb-8  bg-secondary-accent p-3  border-4 border-primary rounded-md w-100">
                <div className="text-md font-bold lg:text-3xl">{title}</div>
                <div className="lg:hidden flex justify-between">
                    <div className=" text-xs">
                        {datePosted}
                    </div>
                    <div className="flex">
                        {tags.map(tag => (
                            <div className="mx-1 px-1 text-xs border-2 rounded-md border-secondary-light bg-secondary-dark text-white text-center">{tag}</div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full justify-center hidden md:max-lg:flex bg-white border-4 border-primary rounded-md">
                <Image className=" w-4/5" src={thumbnail} width={400} height={400} />        
            </div>
            <div className="z-0 lg:flex flex-col bg-white border-4 border-primary rounded-md p-4 pt-8 hidden lg:visible">
                <div className="text-secondary-dark text-xl">{datePosted}</div>
                <div className="flex px-4 mb-4">
                    <Image className="border-4 border-primary rounded-md w-4/5" src={thumbnail} width={400} height={400} />
                    <div >
                        <div className="flex gap-2 justify-center">
                            <div className="flex flex-col justify-center"><ImPriceTags/> </div>
                            <div>Tags</div>
                        </div>
                        <div className="flex  flex-col self-center">
                            {tags.map(tag => (
                                <div className="px-1 mx-1 border-2 rounded-md border-secondary-light hover:border-secondary-accent bg-secondary-dark hover:bg-secondary-dark hover:text-secondary-accent m-3 text-white text-center">{tag}</div>
                            ))}
                        </div>

                    </div>
                </div>
                <div className="italic">{description}</div>
            </div>

        </div>
    )
}