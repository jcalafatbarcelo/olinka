import HeadLayout from "../../components/HeadLayout"
import MenuLayout from "../../components/MenuLayout"
import Image from "next/image"
import styles from '../../styles/Olinkamod.module.css'

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
        if ( e.objectID < 2500 ) // JOVRIK
        {
            rs = RECIPE_SIZE.JORVIK
        }
        else
        {
            if ( e.objectID == 2522 )
            {
                rs = RECIPE_SIZE.PAPELCALIDAD
            }
            else if (e.objectID >= 2500 && e.objectID <= 2503)
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
                <div className='bg-header-olinka'>
                    <h1>
                    Olinka MOD
                    <small>Life is Feudal</small>
                    </h1>
                </div>
                    {console.log( datos.datos )}
                    {
                                                    
                        datos.datos.map( ( e,k ) =>
                        {
                            return ( <div className="receta" key={k}>
                                {
                                    e.ImagePath != undefined
                                        ? (
                                            <div className="item-image">
                                                <Image
                                                    src={'/' + e.ImagePath.replaceAll( '\\', '/' )}
                                                    alt={e.Name}
                                                    width={setObjectImageSize(e).w}
                                                    height={setObjectImageSize(e).h}
                                                    unoptimized='true' />
                                            </div>
                                        )
                                        : null
                                }
                                <h3>{e.Name}</h3>
                                <div>
                                    <p>{e.Description}</p>
                                    <hr />
                                </div>
                            </div> )
                        }
                        )
                        
                    }
                </main>
            </div>
        </>
    )
}


export async function getServerSideProps ()
{
  const response = await fetch( 'http://localhost:3000/api/objetos' )
  const datos = await response.json(response)
  
  return {
    props: {
        datos: datos.result
    }
  }
}