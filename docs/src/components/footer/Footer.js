import { ImFacebook, ImInstagram, ImTwitter } from "react-icons/im";

export default function Footer() {

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

    return (
        <div className="flex justify-center py-2 bg-primary">
            <div className="w-1/4"></div>
            <div  className="w-1/4 text-primary-accent text-center">Dan Slezak 2023</div>
            <div className="w-1/4 flex justify-center content-center gap-8">
                {socials.map(social => (
                    <social.icon/>
                ))}
            </div>
        </div>
        
    )
}