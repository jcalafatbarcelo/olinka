import excuteQuery from "../../lib/db";

export default async function handler( req, res )
{
    try
    {
        console.log( "req nom", req.body )
        const result = await excuteQuery( {
            query: 'SELECT r.*, o.ParentID AS ParentID, o.ID AS objectID FROM objects_types AS o RIGHT JOIN recipe AS r ON o.ID = r.ResultObjectTypeID WHERE o.ID > 2399'
            //values: [ req.body.content ],
        } );
        console.log( "ttt", result );
        res.status(200).json({ result })
    } catch ( error )
    {
        console.log( error );
    }

  
};
