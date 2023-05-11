import Image from "next/image"
import BlogCard from "@/components/blogCard/BlogCard"
import Link from "next/link"

export default function Landing() {
    return (
        <div>
            <div className="flex flex-col flex-1 self-center py-10 px-6">
                <div>
                    <div className=" text-3xl sm:text-4xl md:text-6xl text-secondary-light text-center">Hi, I'm Dan Slezak</div>
                    <div className="image flex justify-center">
                            <Image className="rounded-full border-8 border-secondary-light my-4 " src={"/images/profile.png"} width={400} height={400} />
                        </div>
                    <div className=" text-md sm:text-lg text-center">I am a <span className="text-secondary-accent font-extrabold">Junior Developer</span> working in Ontario, Canada</div>
                    <div className="text-md :text-lg text-center">Welcome to my Personal Website</div>
                    <div className="flex content-center justify-center">
                        <Link href={"/aboutme/AboutMe"} className="bg-secondary-accent mt-8 px-4 sm:px-8 py-2 sm:py-4 border-4 rounded-3xl border-secondary-light text-white font-bold drop-shadow-lg hover:border-primary hover:drop-shadow-[0_5px_5px_rgba(202,117,88,1)]"> About Me</Link>
                    </div>
                </div>
            </div>
            <div className="bg-primary-accent flex justify-center lg:pt-8 lg:pb-20 border-y-2 border-solid border-primary min-h-screen">
                <div className="flex flex-col justify-center lg:w-1/2">
                    <div className="flex flex-col items-center justify-center pb-8 gap-2">
                        <div className="text-center text-3xl  sm:text-4xl font-extrabold"> Check Out</div>
                        <Link href={"/blog/Blog"} className="bg-secondary-accent px-4 sm:px-8 py-2 sm:py-4 rounded-3xl border-4 border-secondary-light text-white font-bold hover:border-primary text-center">My Blog</Link>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-center text-lg lg:text-2xl my-2"> Here's my latest post!</div>
                        <BlogCard
                            title={"The End of Front-End Development"}
                            description={"Large language models like GPT-4 are becoming increasingly capable, at an alarming rate. Within a couple of years, we won't need developers any more! …Or at least, that's the narrative going viral on Twitter. I'm much more optimistic about what these AI advancements mean for the future of software development."}
                            datePosted={"March 15th, 2023"}
                            tags={["Software", "Front-End"]}
                            thumbnail={"/images/dummyBlogThumbNail.png"}
                        ></BlogCard>
                    </div>
                </div>
            </div>
            <div className="flex flex-col py-10 min-h-screen">
                <div>
                    Here are some of my work
                </div>
                <div>Project tiles</div>
                <div className="flex content-center justify-center">
                    <Link href={"/projects/Projects"} className="bg-secondary-accent mt-8 px-8 py-4 border-4 rounded-3xl border-secondary-light text-white font-bold hover:border-primary"> View My Projects</Link>
                </div>
            </div>
            <div className="flex flex-col py-10 bg-primary-accent border-y-2 border-solid border-primary">
                <div> Sign up for my newslettter </div>
                <div>News Letter Card</div>
            </div>
        </div>

    )
}