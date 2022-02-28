import excuteQuery from "../../lib/db";

export default async function handler( req, res )
{
    try
    {
        console.log( "req nom", req.body )
        const result = await excuteQuery( {
            query: 'SELECT * FROM recipe WHERE ID > 1086'
            //values: [ req.body.content ],
        } );
        console.log( "ttt", result );
        res.status(200).json({ result })
    } catch ( error )
    {
        console.log( error );
    }

  
};
