import Image from "next/image"

export default function Landing() {
    return (
    <div className="flex flex-col gap-4 justify-center content-center flex-1 self-center ">
        <div className="text-6xl text-secondary-light text-center">Hi, I'm Dan Slezak</div>
        <div className="image flex justify-center">
                <Image className="rounded-full border-8 border-primary-accent  " src={"/images/profile.png"} width={400} height={400} />
            </div>
        <div className="text-lg text-center">I am a <span className="text-secondary-accent font-extrabold">Junior Developer</span> working in Ontario, Canada</div>
        <div className="text-lg text-center">Welcome to my Personal Website</div>
    </div>
    )
}