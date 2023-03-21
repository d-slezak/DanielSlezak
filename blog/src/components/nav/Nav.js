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

let socials = [
    {
        title: 'Facebook',
        icon: ImFacebook,
        link: '#'
    },
    {
        title: 'Instagram',
        icon: ImInstagram,
        link: '#'
    },
    {
        title: 'Twitter',
        icon: ImTwitter,
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
                    <div className="flex gap-8">
                        {socials.map(social => (
                            <Link href={social.link} className='text-black text-xl hover:text-primary-accent'><social.icon/></Link>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    )
}