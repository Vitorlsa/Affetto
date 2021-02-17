import React, { useEffect } from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'

const Navbar = () => {
    
    const Router = useRouter()
    
    function isActive(route) {
        if(route == Router.pathname) {
            return "active"
        }
        else {
            return " "
        }
    }

/*    useEffect(() =>{
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelector('.sidenav');
            var instances = M.Sidenav.init(elems, options);
          });
    })
*/

    return (
        <div>
            <nav>
                <div className="nav-wrapper #ffcdd2 red lighten-4">
                    <Link href="/"><a href="#" className="brand-logo">Logo</a></Link>
                    {/*<a href="#" data-target="mobile-demo" className="sidenav-trigger"><i class="material-icons">menu</i></a>*/}
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li className={isActive("/")}><Link href="/"><a>Home</a></Link></li>
                        <li className={isActive("/assessorias")}><Link href="/assessorias"><a>Tipos de Assessoria</a></Link></li>
                        <li className={isActive("/galeria")}><Link href="/galeria"><a>Galeria</a></Link></li>
                        <li className={isActive("/depoimentos")}><Link href="/depoimentos"><a>Depoimentos</a></Link></li>
                        <li className={isActive("/faleconosco")}><Link href="/faleconosco"><a>Fale conosco</a></Link></li>
                    </ul>
                </div>
            </nav>
        {/* <ul className="sidenav" id="mobile-demo">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">Javascript</a></li>
                <li><a href="mobile.html">Mobile</a></li>
            </ul>*/}
        </div>
    );
}

export default Navbar