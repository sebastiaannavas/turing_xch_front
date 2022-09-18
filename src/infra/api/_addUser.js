// dependencies
import axios from "axios";
import { POST } from "./endpoints";

// hooks
import { useEffect, useState } from "react";

function addUser(url, payload) {

    let [ data, setData ] = useState( {} );
    let [ error, setError ] = useState( "" );

    useEffect ( () => {

        ( async function (url, payload) {
            
            try {
    
                let { data } = await axios.post(url, payload);
                setData( data.token );
    
            } catch ( error ) { setError( error.error ) }

        } )(url, payload)
    
    }, []);

    return { data, error }
}

export default addUser;