import React, { useEffect, useState } from 'react'

export default function useAuth() {
    const [isAuthenticated,setIsAuthenticated]=useState(false)

    useEffect(()=>{
        const token=localStorage.getItem('token')
        // type-1
        // if (token) {
        //     setIsAuthenticated(true)
        // }else{
        //     setIsAuthenticated(false)
        // }

        // type-2
        // setIsAuthenticated(token ? true : false)

        // type-3
        setIsAuthenticated(!!token)

    },[])
    return isAuthenticated

}
