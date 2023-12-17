import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { api } from '../lib/axios';

interface GitContextType {
    fetchUserInfo: () => Promise<void>;
    fetchIssueList: () => Promise<void>;
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



    const fetchIssueList = useCallback(async () => {

        const texto = 'Boas práticas';
        const username = 'rocketseat-education';
        const repo = 'reactjs-github-blog-challenge';
        const response = await api.get(`/search/issues`, {
            params: {
              q: `${texto} repo:${username}/${repo}`,
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
