import excuteQuery from "../../../lib/db";

export default async function handler( req, res )
{
    
    
    try
    {
        const FILTROS = {
            jorvik: `SELECT * FROM getjorvik`,
            licencias: `SELECT * FROM getlicencias`,
            packs: `SELECT * FROM getpacks`,
            tools: `SELECT * FROM gettools`,
            items: `SELECT * FROM getitems`,
            all: `SELECT * FROM getall`

        }
        const filtro = req.query.filtro
        console.log( "req nom: ("+filtro+") ")
        const result = await excuteQuery( {
            query: FILTROS[filtro] || FILTROS['all']
        } );
        console.log( "ttt", result );
        res.status(200).json({ result })
    } catch ( error )
    {
        console.log( error );
    }

  
};
