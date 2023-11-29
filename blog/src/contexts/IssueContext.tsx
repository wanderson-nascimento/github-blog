import { createContext, ReactNode, useEffect, useState } from "react";
import {api} from '../lib/axios'

interface GitContextType{
    // fetchIssues: () => Promise<void>
    fetchUserInfo: (query?:string) => Promise<void>;
    // userInfo: string;
}

interface GitContextProps{
    children: ReactNode
}


export const GitContext = createContext({} as GitContextType)

export function GitProvider({children}: GitContextProps){
    const [userInfo,setUserInfo] = useState()

    async function fetchUserInfo(){
        const response = await api.get('users', {
            params:{
                userName:'wanderson-nascimento'
            }
        })
        setUserInfo(response.data)
    }

    useEffect(() => {
        fetchUserInfo()
    },[])

    console.log(userInfo)


    return (
        <GitContext.Provider
          value={{ fetchUserInfo }}
        >
          {children}
        </GitContext.Provider>
      )
}