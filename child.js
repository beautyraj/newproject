import React from 'react';
import {child} from './child';
import {axios} from 'axios';
import "./style.css";
var name ="beauty";
export default function child({setDataToParent}) {
    const[data,setData] = useState([]);
    const handleButton = () => {
        setDataToParent("button clicked");
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then()
        // console.log("button clicked");
    }
    return (
        <div>
        <button className="button-child" onClick={handleButton}> click me </button>
        </div>
    )
}
