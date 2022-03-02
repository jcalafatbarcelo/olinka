import Image from "next/image"

export default function FichaObject ( { e, k, w, h } )
{
    const IMG_SIZES = {
        2504: {
            w: 64,
            h: 67
        },
        2521: {
            w: 64,
            h: 67
        },
        2505: {
            w: 71,
            h: 94
        },
        36: {
            w: 38,
            h: 94
        },
        34: {
            w: 36,
            h: 90
        },
        32: {
            w: 42,
            h: 88
        }
    }
    const craftItemW = IMG_SIZES[e.StartingToolID] ? IMG_SIZES[e.StartingToolID].w : 50
    const craftItemH = IMG_SIZES[e.StartingToolID] ? IMG_SIZES[e.StartingToolID].h : 50
  return (
    <div className="receta" key={k}>
    {
        e.ImagePath != undefined
            ? (
                <div className="item-image">
                    <Image
                        src={'/' + e.ImagePath.replaceAll( '\\', '/' )}
                        alt={e.Name}
                        width={w}
                        height={h} />
                </div>
            )
            : null
    }
    <h3>{e.RecetaName}</h3>
    <div className="object-info">
            <p className="description">
                {e.rDescription}
                {
                    e.IsContainer
                        ? ( <><br /><small>Contenedor ({ e.MaxContSize / 1000 }) </small></> )
                        : null
                }
            </p>
            <p className="ficha-tecnica">
                {
                    e.StartingToolImg != undefined
                        ? (
                            <div className="item-image builder">
                                <Image
                                    src={'/' + e.StartingToolImg.replaceAll( '\\', '/' )}
                                    alt={e.StartingTool}
                                    width={craftItemW}
                                    height={craftItemH} />
                                <div className="item-image-text">
                                    <strong>Herramienta: </strong><br />{e.StartingTool}
                                </div>
                            </div>
                        )
                        : ( <><strong>Herramienta: </strong><br />{ e.StartingTool }</>)
                          
                }
            
            
            
        </p>
              
    </div>
</div>
  )
}
