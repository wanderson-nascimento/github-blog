import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { api } from '../lib/axios';

interface GitContextType {
    fetchUserInfo: () => Promise<void>;
    fetchIssueList: (query?: string) => Promise<void>;
    userInfo: string[];
    issueList: string[];
}

interface GitContextProviderProps {
    children: ReactNode;
}

export const GitContext = createContext({} as GitContextType);

export function GitProvider({ children }: GitContextProviderProps) {
    const [userInfo, setUserInfo] = useState(['']);
    const [issueList, setIssueList] = useState([''])



    const fetchIssueList = useCallback(async (query?:string ) => {
        console.log(query);
        
        api.interceptors.request.use(request => {
            console.log('Starting Request', request)
            return request
          })

        const username = 'wanderson-nascimento';
        const repo = 'github-blog';
        const response = await api.get(`/search/issues`, {
            params: {
              q: `${query??""} repo:${username}/${repo}`,
            }
          })
        setIssueList(response.data.items)
      }, [])
    
    
    const fetchUserInfo = useCallback(async () => {

        const username = 'wanderson-nascimento'
        const response = await api.get(`users/${username}`)
    
        setUserInfo(response.data)
      }, [])
    
    
    

    useEffect(() => {
        fetchIssueList();
    }, [fetchIssueList]);

    useEffect(() => {
        fetchUserInfo();
    }, [fetchUserInfo]);

    return (
        <GitContext.Provider
            value={{ fetchUserInfo, userInfo, fetchIssueList, issueList }}
        >
            {children}
        </GitContext.Provider>
    );
}
