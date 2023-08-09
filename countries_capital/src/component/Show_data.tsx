import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {AiOutlineDelete} from 'react-icons/ai'

function Show_data() {
  type countries={
    id:'string',
  country:'string',
  capital:'string'
}
  const [data,setData]=useState([])
    useEffect(()=>{
        axios.get('https://ide-ccbdfddbddddaefdfbaaccbaede.project.examly.io/proxy/8080/countries')
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))
    },[])
  return (
    <div>
      <h1>{'Countries And Capitals'}</h1>
      <table>
        <thead>
          <tr>
            <th>Sr.no.</th>
            <th>Countries</th>
            <th>Capital</th>
            <th>Delete</th>
          </tr>          
        </thead>
        <tbody>
          {data.map((val:countries,_ind:number)=>{
            return <tr key={val.id}>
              <td>{_ind+1}</td>
              <td>{val.country}</td>
              <td>{val.capital}</td>
              <td><AiOutlineDelete/></td>
            </tr>
          })}
        </tbody>
        </table>
    </div>
  )
}

export default Show_data