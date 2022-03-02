import React from 'react'

export default function CabeceraH1 ( {clase, titulo, subtitulo } ) {
    return (
        <div className={clase}>
            <h1>
                {titulo}
                {subtitulo.length > 0 ? <small>{subtitulo}</small> : null}
            </h1>
        </div>
  )
}
