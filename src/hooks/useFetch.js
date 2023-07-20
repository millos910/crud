import axios from "axios";
import { useState } from "react";
const useFetch=(baseUrl)=>{
    const[infoApi,SetinfoApi]=useState()
    //read
    const getApi=(path)=>{
        const url=`${baseUrl}${path}/` 
        axios.get(url)
            .then(res=>SetinfoApi(res.data))
            .catch(err=>console.log(err))
    }
    //create
    const createNewRegister=(path,data)=>{
        const url=`${baseUrl}${path}/`
        axios.post(url,data)
            .then(res=>{    
                console.log(res.data)
                SetinfoApi([...infoApi, res.data])
            })
            .catch(err=>console.log(err))
    }

    //delete
    const deleteRegister=(path,id)=>{
            const url=`${baseUrl}${path}/${id}/`
        axios.delete(url)
        .then(res=>{
            console.log(res)
            const infoApiFilter=infoApi.filter(element=>element.id !==id)
            SetinfoApi(infoApiFilter)
        })
        .catch(err=>console.log(err))
    }
    //update
    const updateRegister=(path,id,data)=>{
        const url=`${baseUrl}${path}/${id}/`
        axios.put(url,data)
        .then(res=>{
            console.log(res.data)
            const infoApiUpdate=infoApi.map(element=>{
                if(id === element.id){
                    return data
                }else{
                    return element
                }
            })    
            SetinfoApi(infoApiUpdate)
        })
        .catch(err=>console.log(err))
    }
    return [infoApi,getApi,createNewRegister,deleteRegister,updateRegister]
}

export default useFetch