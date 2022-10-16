import { HttpStatusCode } from 'axios'
import React,{useState,useRef,useEffect}from 'react'
import axios from 'axios'
export default function Hooks1() {
    var [category, setCategory]= useState("xyz")
    var [api,setApi]=useState([])
    var x1=useRef()
    useEffect(()=>{
        console.log(category,"useEffect");
        axios.get(`https://fakestoreapi.com/products/category/${category}`).then((result)=>{
            console.log(result);
            console.log(result.data);
            setApi(result.data)
        })
    },[category])

    var myfun3=()=>{
        console.log(x1);
        console.log(x1.current.value);
        setCategory(x1.current.value);

    }
  return (
    <div>
        <h1>Hooks1</h1>
        {category}<hr />
    <input type="textbox" ref={x1} />
    <button onClick={myfun3}>fetch</button>
    <div class="container">
            <div class ="row" >
                 {

                  api.length>0 && api.map((xyz)=>
                  <div class ="col-xl-3">
                    <img class="img-fluid" src =
                    {xyz.image}/>
                    <h2>{xyz.price}</h2>
                    <p>{xyz.title}</p>
                  </div>hey siri
    </div>
  )
}
