import {Link} from "react-router-dom";

function Nav()
{
    return(
        <div id="nav1" class="navbar px-4">
            <Link to="/" id="n1" class="navbar-brand">SIDDHARTHA</Link>
            <div class="nav ms-auto">
                <Link id="n2" class="nav-link" to="/">HOME</Link>
                <Link id="n3" class="nav-link" to="/about">ABOUT ME</Link>
                <Link id="n4" class="nav-link" to="/project">PROJECTS</Link>
                <Link id="n5" class="nav-link" to="/contact">CONTACT</Link>
            </div>
        </div>
    )
}
export default Nav;