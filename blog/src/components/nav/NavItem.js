import Link from "next/link"

export default function NavItem({title, link}) {
    return (
        <div className="text-lg hover:text-primary-accent hover:underline">
            <Link href={(link ? link : '/')}>{title}</Link>
        </div>
    )
}