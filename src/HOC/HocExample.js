import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function withAuthintication(WrappedComponent){
    
return ()=>{
    const [isAuthenticated,setIsAuthenticated]=useState(false)
    const navigate = useNavigate()
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

    },[navigate])

return isAuthenticated? <WrappedComponent> </WrappedComponent>:<div> <p> You are Not Authorized</p> </div>
}

}

function exampleComponent(){
    return <div>
        <h5> I am Authinticated Component </h5>
    </div>
}

function example2Component(){
    return <div>
        <h5> I am Authinticated Component </h5>
    </div>
}
export const AuthinticatedExample2Component =withAuthintication(example2Component)


export const AuthinticatedExampleComponent =withAuthintication(exampleComponent)