import Link from "next/link";

import NavItem from "./NavItem";

import { ImFacebook, ImInstagram, ImTwitter } from "react-icons/im";


let navItems = [{
    title: 'About Me',
    link: '#'
},
{
    title: 'Blog',
    link: '#'
},
{
    title: 'Projects',
    link: '#'
},
{
    title: 'Contact',
    link: '#'
},
]

export default function Nav() {
    return (
        <header className="bg-primary">
            <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
                <div className="shrink w-80 sm:order-1">
                    <Link href={"/"} className="font-bold uppercase text-3xl hover:text-primary-accent ">
                        Dan.Slezak
                    </Link>
                </div>
                <div className="flex gap-10 order-2">
                    
                    {navItems.map(item => (
                        <NavItem
                            title = {item.title}
                        />
                    ))}
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