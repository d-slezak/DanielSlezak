import Image from "next/image"

export default function Landing() {
    return (
    <div className="flex flex-col gap-4 justify-center content-center flex-1 self-center ">
        <div>
            <div className="text-6xl text-secondary-light text-center">Hi, I'm Dan Slezak</div>
            <div className="image flex justify-center">
                    <Image className="rounded-full border-8 border-secondary-light my-4 " src={"/images/profile.png"} width={400} height={400} />
                </div>
            <div className="text-lg text-center">I am a <span className="text-secondary-accent font-extrabold">Junior Developer</span> working in Ontario, Canada</div>
            <div className="text-lg text-center">Welcome to my Personal Website</div>
            <div className="flex content-center justify-center">
                <button className="bg-secondary-accent mt-8 px-8 py-4 border-4 rounded-3xl border-secondary-light text-white font-bold hover:border-primary"> About Me</button>
            </div>
        </div>
    </div>
    )
}