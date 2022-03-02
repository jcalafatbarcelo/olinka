import HeadLayout from "../../../components/HeadLayout"
import MenuLayout from "../../../components/MenuLayout"
import Image from "next/image"
import FichaObject from "../../../components/FichaObject"
import CabeceraH1 from "../../../components/CabeceraH1"
import Link from "next/link"

export default function Diarios (recetas)
{
    return (
        <>
            <HeadLayout title={"Olinka MOD - Diarios de Encargos"} descr={"Los Diarios de encargos son los objetos que se usarán para la creación de los Packs, los objetos especiales y las Licencias de obra"}>

            </HeadLayout>
            <MenuLayout></MenuLayout>
            <div>
            
                <main>
                    <CabeceraH1 clase={`bg-header-olinka`} titulo={`Objetos Especiales`} subtitulo={`Olinka MOD`}></CabeceraH1>
                   
                    <div className="center_block clear_down">
                        <p>Los Objetos Especiales son los objetos que se usarán como complemento para la creación de Diarios de Encargos, Licencias de Obra y Packs</p>
                        <h2>Listado de Objetos Especiales</h2>
                    </div>
                    
                <div className="object-list">
                    
                    {                          
                        recetas.recetas.map( ( e,k ) =>
                        {
                            return (
                                <>
                                    <FichaObject e={e} k={k} w={64} h={67}></FichaObject>
                                </>
                            )
                        }
                        )
                        
                    }
                        
                </div>
                    <div className="center_block">
                        <hr />
                        <ul className="destacados">
                            <li><Link href="jorvik">Objetos del Jorvik MOD</Link></li>
                            <li><Link href="diarios">Los Diarios de Encargos</Link></li>
                            <li><Link href="licencias">Licencias de obra</Link></li>
                            <li><Link href="items">Objetos especiales del MOD</Link></li>
                            <li><Link href="packs">Packs para generar monedas</Link></li>
                        </ul>
                    </div>
                </main>
            </div>
        </>
    )
}


export async function getServerSideProps ()
{
    const response = await fetch( 'http://localhost:3000/api/recetas/items' )
    const datos = await response.json(response)

    return {
    props: {
        recetas: datos.result
    }
    }
}