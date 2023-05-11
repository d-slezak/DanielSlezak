import Link from "next/link";
import { useState } from "react";

import { ImMenu3, ImMenu4 } from "react-icons/im";

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

    // const [isLoading, setIsLoading] = useState(true);
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuClick = () =>{
        setShowMenu(!showMenu);
    }

    return (
        <header className="bg-primary">
            <div className="xl:container xl:mx-auto flex items-center md:flex-row md:justify-between text-center py-3 text-primary-accent">
                <div className="shrink md:w-80 order-2 md:order-1 absolute w-full md:relative">
                    <Link href={"/"} className="font-bold uppercase text-3xl hover:text-secondary-accent ">
                        Dan.Slezak
                    </Link>
                </div>
                <div className="order-1 self-start px-5 sm:px-10 z-10 md:hidden">
                    <button className="btn " onClick={(e) => handleMenuClick()}>{showMenu ? (<ImMenu4 size={28}/>) : (<ImMenu3 size={28}/>)}</button>
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
            {showMenu ? (
                    <div className="text-center border-y-2 border-solid border-primary-accent">
                        <NavItem 
                            title={'Home'}
                            link = {"/"}
                        />
                        {navItems.map(item => (
                            <NavItem 
                                title={item.title}
                                link = {item.link}
                            />
                        ))}
                    </div>
                 ) : null

                 }
        </header>
    )
}