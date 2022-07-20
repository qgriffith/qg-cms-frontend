import Link from "next/link"

const Nav = ({ navLinks }) => {
    return (
        <div>
            <nav className="navbar-container" data-navbar>
                <div className="navbar-left">
                    <ul className="navbar-nav">
                        <li>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-right">
                    <ul className="navbar-nav">
                       {navLinks.map((navLink)=> {
                        return (
                            <li key={navLink.id}>
                                <Link href={`/${navLink.attributes.slug}`}>
                                <a className="link-reset">{navLink.attributes.name}</a>
                                </Link>
                            </li>
                        )
                       })}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav