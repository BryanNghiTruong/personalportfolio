import { BsRocketTakeoffFill } from "react-icons/bs"

export default function Navbar() {
    return(
        <nav className="nav">
            <a href="/" className="site-title"><BsRocketTakeoffFill /></a>
            <ul>
                <li>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/projects">Projects</a>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

