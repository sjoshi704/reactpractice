import React, { useEffect, useState } from 'react'
import useAuth from './UseAuth';

export default function useOnlineStatus() {
    const [isOnline, setIsOnline] = useState(true)
    const isAuthenticated=useAuth()
    useEffect(() => {
        function handleOnline() {
            setIsOnline(true);
        }

        function handleOffline() {
            setIsOnline(false);
        }

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
            <div>USeOnlineStatus</div>
        };
    }, []);
    return isOnline
}
