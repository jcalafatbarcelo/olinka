import HeadLayout from "../../components/HeadLayout"
import MenuLayout from "../../components/MenuLayout"
import CabeceraH1 from "../../components/CabeceraH1"
import Link from "next/link"

export default function Olinkamod ( datos )
{
    const RECIPE_SIZE = {
        JORVIK: {
            w: 295,
            h: 166
        },
        LICENCIAS: 
        {
            w: 115,
            h: 106
        },
        PAPELCALIDAD: {
            w: 64,
            h: 67
        },
        TOOLS: {
            w: 64,
            h: 67
        },
        PACKS: {
            w: 73,
            h: 101
        },
        INGREDIENTS: {
            w: 50,
            h: 50
        }
    }
    const setObjectImageSize = ( e ) => 
    {
        var rs = RECIPE_SIZE.PACKS
        if ( e.ID < 2500 ) // JOVRIK
        {
            rs = RECIPE_SIZE.JORVIK
        }
        else
        {
            if ( e.ID == 2522 )
            {
                rs = RECIPE_SIZE.PAPELCALIDAD
            }
            else if (e.ID >= 2500 && e.ID <= 2503)
            {
                rs = RECIPE_SIZE.LICENCIAS
            }
            else if (e.ParentID == 2517)
            {
                rs = RECIPE_SIZE.INGREDIENTS
            }
            else if (e.ParentID == 2516)
            {
                rs = RECIPE_SIZE.TOOLS
            }
        }

        return rs
    }
    return (
        <>
            <HeadLayout title={"Olinka MOD - Life is Feudal"} descr={"MOD creado para el servidor de El Legado de Olinka. Incluye Jorvik MOD y elementos propios de Olinka"}>

            </HeadLayout>
            <MenuLayout></MenuLayout>
            <div>
            
                <main>
                    <CabeceraH1 titulo={`Olinka MOD`} clase={`bg-header-olinka`} subtitulo={`Life is Feudal`}></CabeceraH1>
                    <div className="center_block">
                        <p>Nuestro MOD incluye múltiples objetos. Entre ellos podremos encontrar los siguientes:</p>
                        <ul className="destacados">
                            <li><Link href="olinka-mod/jorvik">Objetos del Jorvik MOD</Link></li>
                            <li><Link href="olinka-mod/diarios">Los Diarios de Encargos</Link></li>
                            <li><Link href="olinka-mod/licencias">Licencias de obra</Link></li>
                            <li><Link href="olinka-mod/items">Objetos especiales del MOD</Link></li>
                            <li><Link href="olinka-mod/packs">Packs para generar monedas</Link></li>
                        </ul>
                    </div>
                </main>
            </div>
        </>
    )
}
