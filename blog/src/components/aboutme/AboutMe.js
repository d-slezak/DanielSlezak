import Image from "next/image"
import Link from "next/link"

export default function AboutMe() {
    return (
        <section className="py-16">
            <div className="container mx-auto md:px-20">
                <h1 className="font-bold text-4xl pb-12 text-center">About Me</h1>
                {Slide()}
            </div>
        </section>
    )
}

function Slide(){
    return (
        <div className="grid md:grid-cols-2">
            <div className="image">
                <Image src={"/images/img1.jpg"} width={600} height={600} />
            </div>
            <div className="info">
                <div className="cat">
                    <Link href={"/"} className="text-orange-600 hover:text-orange-800">Travel</Link>
                </div>
            </div>
        </div>
    )
}