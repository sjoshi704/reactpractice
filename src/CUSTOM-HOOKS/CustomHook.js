import React from 'react'
import useOnlineStatus from './USeOnlineStatus'

export default function CustomHook() {
    const isOnline = useOnlineStatus()
    return <>
        <div>
            <h3 className='text-danger text-center'> CustomHook</h3> </div>

        <div>
            <h3 className={isOnline ? "text-success" : "text-danger"}> <i className={isOnline ? "bi bi-wifi" : "bi bi-wifi-off"}>  </i>{isOnline ? "Online" : "Offline"} </h3>
        </div>
    </>
}
