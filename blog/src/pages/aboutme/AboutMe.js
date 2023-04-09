import Layout from "@/layout/Layout"
import Image from "next/image"
import Link from "next/link"

export default function AboutMe() {
    return (
        <Layout>
            <section className="py-16">
                <div className="container mx-auto md:px-20">
                    <h1 className="font-bold text-4xl pb-12 text-center">About Me</h1>
                    {Slide()}
                </div>
            </section>
        </Layout>
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
            <div>
            Image of Me
            Introduction about yourself and background
            Skills and technology I'm proficient in
            </div>
        </div>

    )
}