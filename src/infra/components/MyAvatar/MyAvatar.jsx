// dependencies
import axios from "axios";
import { GET } from "../../api/endpoints";

// hooks
import { useState, useEffect } from 'react';

// components
import Avatar from 'boring-avatars';


function MyAvatar ( {size} ) {

    const [loading, setLoading] = useState(true);

    const [profileName, setProfileName] = useState({});

    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("auth")}` }
    };

    const getUserName = async () => {

        await axios.get(GET.USER_PROFILE, config)
        .then( response => {
            console.log(response.data.msg);
            setProfileName(response.data.msg);
            // setLoading(false);
        })
        .catch( error => {
            console.log(error);
        });
    };

    useEffect(() => { getUserName();

    }, []);

    return (
    <>
      	<Avatar 
        size={size}
        name={profileName.name}
        variant='bauhaus'
        colors={["#9d4edd", "#613dc1", "#f72585", "#ffce1f", "#ff6d00"]}
        />
    </>
  );
}

export default MyAvatar;