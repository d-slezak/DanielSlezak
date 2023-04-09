import Link from "next/link"

import { useRouter } from "next/router"

export default function NavItem({title, link}) {

    const router = useRouter();
    const currentRoute = router.pathname;

    return (
        <div className="text-lg hover:text-primary-accent hover:underline">
            <Link href={(link ? link : '/')} className={currentRoute === link ? "font-extrabold text-secondary-accent underline" : null}>{title}</Link>
        </div>
    )
}