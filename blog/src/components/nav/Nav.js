import Link from "next/link";

import NavItem from "./NavItem";


let navItems = [{
        title: 'About Me',
        link: '/aboutme/AboutMe'
    },
    {
        title: 'Blog',
        link: '/blog/Blog'
    },
    {
        title: 'Projects',
        link: '/projects/Projects'
    },
    {
        title: 'Contact',
        link: '/contact/Contact'
    },
]

export default function Nav() {
    return (
        <header className="bg-primary">
            <div className="xl:container xl:mx-auto flex items-center md:flex-row md:justify-between text-center py-3 text-primary-accent">
                <div className="shrink md:w-80 order-2 md:order-1 fixed w-full md:relative">
                    <Link href={"/"} className="font-bold uppercase text-3xl hover:text-secondary-accent ">
                        Dan.Slezak
                    </Link>
                </div>
                <div className="order-1 self-start px-10 md:hidden">
                    X
                </div>
                <div className="hidden sm:visible md:flex md:gap-10 md:px-6 md:pt-5 md:order-2">
                    {navItems.map(item => (
                        <NavItem
                            title = {item.title}
                            link = {item.link}
                        />
                    ))}
                </div>

            </div>
        </header>
    )
}