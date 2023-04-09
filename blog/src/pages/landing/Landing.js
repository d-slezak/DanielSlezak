import Image from "next/image"
import BlogCard from "@/components/blogCard/BlogCard"

export default function Landing() {
    return (
        <div>
            <div className="flex flex-col flex-1 self-center py-10">
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
            <div className="bg-primary-accent flex justify-center py-10">
                <div className="flex flex-col justify-center w-3/6">
                    <div className="flex flex-col items-center justify-center pb-8 gap-2">
                        <div className="text-center text-4xl font-extrabold"> Check Out</div>
                        <button className="bg-secondary-accent w-1/5 px-8 py-4 rounded-3xl border-4 border-secondary-light text-white font-bold hover:border-primary">My Blog</button>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-center text-2xl m-4"> Here's my latest post!</div>
                        <BlogCard
                            title={"The End of Front-End Development - Josh Comeau"}
                            description={"Large language models like GPT-4 are becoming increasingly capable, at an alarming rate. Within a couple of years, we won't need developers any more! …Or at least, that's the narrative going viral on Twitter. I'm much more optimistic about what these AI advancements mean for the future of software development."}
                            datePosted={"March 15th, 2023"}
                            tags={["Software", "Front-End Developer"]}
                            thumbnail={"/images/dummyBlogThumbNail.png"}
                        ></BlogCard>
                    </div>
                </div>
            </div>
            <div className="flex flex-col py-10">
                <div>
                    Here are some of my work
                </div>
                <div>Project tiles</div>
                <button>All Projects</button>
            </div>
            <div className="flex flex-col py-10 bg-primary-accent">
                <div> Sign up for my newslettter </div>
                <div>News Letter Card</div>
            </div>
        </div>

    )
}