import HeadLayout from "../../../components/HeadLayout"
import MenuLayout from "../../../components/MenuLayout"
import Image from "next/image"
import FichaObject from "../../../components/FichaObject"
import CabeceraH1 from "../../../components/CabeceraH1"
import Link from "next/link"

export default function licencias (recetas)
{
    return (
        <>
            <HeadLayout title={"Olinka MOD - Licencias de obra"} descr={"Las licencias de obra son objetos requeridos para poder crear el monumento de clan y mejorarlo"}>

            </HeadLayout>
            <MenuLayout></MenuLayout>
            <div>
            
                <main>
                    <CabeceraH1 clase={`bg-header-olinka`} titulo={`Licencias de obra`} subtitulo={`Olinka MOD`}></CabeceraH1>
                   
                    <div className="center_block clear_down">
                        <p>Las licencias de obra son items creados para aumentar la complegidad de la creación de Monumentos de Clan y sus mejoras de nivel. Para crearlos, es necesario el uso de un Diario de Encargos.</p>
                        <h2>Listado de licencias</h2>
                    </div>
                    
                <div className="object-list">
                    
                    {                          
                        recetas.recetas.map( ( e,k ) =>
                        {
                            return (
                                <>
                                    <FichaObject e={e} k={k} w={115} h={106}></FichaObject>
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
    const response = await fetch( 'http://localhost:3000/api/recetas/licencias' )
    const datos = await response.json(response)

    return {
    props: {
        recetas: datos.result
    }
    }
}