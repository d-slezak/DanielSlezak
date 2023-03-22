import Link from "next/link";

import NavItem from "./NavItem";


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
                <div className="flex gap-10 sm:order-2 px-6 pt-5 sm:pt-0">
                    
                    {navItems.map(item => (
                        <NavItem
                            title = {item.title}
                        />
                    ))}
                </div>

            </div>
        </header>
    )
}