import React from 'react';
import child from './child';
export default function home1() {
    const [dataFromChild, setDataFromChild] = useState("");
    return(
        <div>
        <h1>{console.log(handleButton)} </h1>
        <child  />
        </div>
    )

}

