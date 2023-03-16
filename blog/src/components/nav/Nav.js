let navItems = [{
    Name: 'About Me',
    link: '#'
},
{
    Name: 'Blog',
    link: '#'
},
{
    Name: 'Projects',
    link: '#'
},
{
    Name: 'Contact',
    link: '#'
},
]

import { ImFacebook, ImInstagram, ImTwitter } from "react-icons/im";
import Link from "next/link";

export default function Nav() {
    return (
        <header className="bg-gray-50">
            <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
                <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
                    <input type="text" className="input-text" placeholder="Search"></input>
                </div>
                <div className="shrink w-80 sm:order-2">
                    <Link href={"/"} className="font-bold uppercase text-3xl">
                        Dan.Slezak
                    </Link>
                </div>
                <div className="w-96 order-3 flex justify-center">
                    <div className="flex gap-6">
                        <a><ImFacebook color="Blue"/></a>
                        <a><ImInstagram color="Blue"/></a>
                        <a><ImTwitter color="Blue"/></a>
                    </div>
                </div>
            </div>
        </header>
    )
}