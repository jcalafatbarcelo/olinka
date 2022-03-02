import HeadLayout from "../../../components/HeadLayout"
import MenuLayout from "../../../components/MenuLayout"
import Image from "next/image"
import FichaObject from "../../../components/FichaObject"
import CabeceraH1 from "../../../components/CabeceraH1"
import { useState } from "react"
import Link from "next/link"

export default function Diarios (recetas)
{
    const [filtroDiario, setFiltroDiario] = useState(0)
    return (
        <>
            <HeadLayout title={"Olinka MOD - Diarios de Encargos"} descr={"Los Diarios de encargos son los objetos que se usarán para la creación de los Packs, los objetos especiales y las Licencias de obra"}>

            </HeadLayout>
            <MenuLayout></MenuLayout>
            <div>
            
                <main>
                    <CabeceraH1 clase={`bg-header-olinka`} titulo={`Packs`} subtitulo={`Olinka MOD`}></CabeceraH1>
                   
                    <div className="center_block clear_down">
                        <p>Los Packs son los objetos que se crean a través de los Diarios de Encargos.</p>
                        <p>Todos los Packs pueden ser vendidos a través del Diario de Encargos correspondiente para cobrar una recompensa.</p>
                        <h2>Listado de Packs</h2>
                        <ul className="destacados">
                            <li onClick={() => { setFiltroDiario( 0 ) }}>Cualquier Diario de Encargos</li>
                            <li onClick={() => {setFiltroDiario(2504)}}>Diario de Encargos Menor</li>
                            <li onClick={() => {setFiltroDiario(2521)}}>Diario de Encargos Mediano</li>
                        </ul>
                    </div>
                    
                <div className="object-list">
                    
                    {                          
                        recetas.recetas.map( ( e,k ) =>
                        {
                            return (
                                <>
                                    {filtroDiario == 0 || filtroDiario == e.StartingToolID ? ( <FichaObject e={e} k={k} w={73} h={101}></FichaObject> ) : null}
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
    const response = await fetch( 'http://localhost:3000/api/recetas/packs' )
    const datos = await response.json(response)

    return {
    props: {
        recetas: datos.result
    }
    }
}