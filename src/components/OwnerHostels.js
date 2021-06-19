import React, {useEffect, useState} from 'react';
import { getOwnerData } from '../functions/form';

const divStyle = {
    marginTop: '148px',
  };

function OwnerHostels(){
    const [hostel, setHostelDetails] = useState();

  useEffect(() => {
    getOwnerData()
    .then((res) => {
      console.log(res);
    });

  }, []);

return(

<div style={divStyle}>
{/* {JSON.stringify()} */}
ABCD
</div>

);
}


export default OwnerHostels;