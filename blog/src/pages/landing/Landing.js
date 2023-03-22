import Image from "next/image"

export default function Landing() {
    return (
    <div className="flex flex-col gap-4 justify-center content-center flex-1 self-center ">
        <div className="text-6xl text-secondary-light">Hi, I'm Dan Slezak</div>
        <div className="image flex justify-center">
                <Image src={"/images/img1.jpg"} width={400} height={400} />
            </div>
        <div className="text-lg">I am a <span className="text-secondary-accent font-extrabold">Junior Developer</span> working in Ontario, Canada</div>
    </div>
    )
}