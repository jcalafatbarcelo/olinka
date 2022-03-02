import HeadLayout from "../../../components/HeadLayout"
import MenuLayout from "../../../components/MenuLayout"
import Image from "next/image"
import FichaObject from "../../../components/FichaObject"
import CabeceraH1 from "../../../components/CabeceraH1"
import Link from "next/link"

export default function jorvikobjects (recetas)
{
    return (
        <>
            <HeadLayout title={"Jorvik MOD - Life is Feudal"} descr={"Objetos incluidos en el Olinka MOD pertenecientes al Jorvik MOD"}>

            </HeadLayout>
            <MenuLayout></MenuLayout>
            <div>
            
                <main>
                    <CabeceraH1 clase={`bg-header-olinka`} titulo={`Jorvik MOD`} subtitulo={`Incluido en el Olinka MOD Pack`}></CabeceraH1>
                   
                    <div className="center_block clear_down">
                        <p>El Pack Jorvik MOD incluye todos los edificios y objetos crafteables que puedes encontrar en su pack própio desde su web oficial: <a href="https://jorvikmod.com/" target={`_blank`}>https://jorvikmod.com/</a> </p>
                        <h2>Listado de objetos</h2>
                    </div>
                    
                <div className="object-list">
                    
                    {                          
                        recetas.recetas.map( ( e,k ) =>
                        {
                            return (
                                <>
                                    <FichaObject e={e} k={k} w={295} h={166}></FichaObject>
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
    const response = await fetch( 'http://localhost:3000/api/recetas/jorvik' )
    const datos = await response.json(response)

    return {
    props: {
        recetas: datos.result
    }
    }
}