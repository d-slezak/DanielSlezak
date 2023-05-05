import Link from "next/link";
import Image from "next/image"
import { ImPriceTags } from "react-icons/im";

export default function BlogCard ({title, description, datePosted, tags, thumbnail, link}) {
    return (
        <div className="w-4/6">
            <div className="relative lg:z-50 lg:-ml-8 lg:mr-8 lg:-mb-8  bg-secondary-accent p-3 text-3xl border-4 border-primary rounded-md w-100">{title}</div>
            <div className="z-0 flex flex-col bg-white border-4 border-primary rounded-md p-4 pt-8 invisible lg:visible">
                <div className="text-secondary-dark text-xl">{datePosted}</div>
                <div className="flex px-4 mb-4">
                    <Image className="border-4 border-primary rounded-md w-4/5" src={thumbnail} width={400} height={400} />
                    <div >
                        <div className="flex gap-2 justify-center">
                            <div className="flex flex-col justify-center"><ImPriceTags/> </div>
                            <div>Tags</div>
                        </div>
                        {tags.map(tag => (
                            <div className="border-2 rounded-md border-secondary-dark hover:border-secondary-accent bg-primary-accent hover:bg-secondary-dark hover:text-secondary-accent m-3 text-center">{tag}</div>
                        ))}
                    </div>
                </div>
                <div className="italic">{description}</div>
            </div>

        </div>
    )
}