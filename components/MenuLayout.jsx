import Link from "next/link"

export default function MenuLayout() {
    var toggleMenuItemClass = ( e ) =>
    {
        var item = e.currentTarget.className
        e.currentTarget.className = item === 'menu-item parent' || item === 'menu-item parent leave' ? 'menu-item parent activo' : 'menu-item parent leave'
    }
    //const [ activo, setActivo ] = useState( 'menu-item parent' );
    //console.log(Usuario)
    return (
        <header>
            <nav className='nav-header'>
                <ul className='menu-ppal'>
                    <li className='menu-item'>
                        <Link className='menu-link' href="/">Inicio</Link>
                    </li>
                    <li className='menu-item parent' onPointerEnter={( e ) => { toggleMenuItemClass( e ) }} onPointerLeave={( e ) => { toggleMenuItemClass( e ) }} >
                        <span className='menu-parent'>Life is Feudal: Your Own</span>
                        <ul className='menu-sec'>
                            <li className='menu-item'>
                                <Link className='menu-link' href="/life-is-feudal/nuestro-servidor">Nuestro Servidor</Link>
                            </li>
                            <li className='menu-item'>
                                <Link className='menu-link' href="/life-is-feudal/olinka-mod">Olinka Mod</Link>
                            </li>

                        </ul>
                        
                    </li>
                    
                </ul>
               
            </nav>
        </header>
    )
}
