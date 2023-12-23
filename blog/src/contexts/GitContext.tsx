import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { api } from '../lib/axios';

interface GitContextType {
    fetchUserInfo: () => Promise<void>;
    fetchIssueList: (query?: string) => Promise<void>;
    fetchIssueDetails: (query?: string) => Promise<void>;
    userInfo: string[];
    issueList: string[];
    issueDetails: string[];
}

interface GitContextProviderProps {
    children: ReactNode;
}

export const GitContext = createContext({} as GitContextType);

export function GitProvider({ children }: GitContextProviderProps) {
    const [userInfo, setUserInfo] = useState(['']);
    const [issueList, setIssueList] = useState([''])
    const [issueDetails, setIssueDetails] = useState([''])

    const username = 'wanderson-nascimento';
    const repo = 'github-blog';



    const fetchIssueList = useCallback(async (query?: string) => {
        const response = await api.get(`/search/issues`, {
            params: {
                q: `${query ?? ""} repo:${username}/${repo}`,
            }
        })
        setIssueList(response.data.items)
    }, [])


    const fetchUserInfo = useCallback(async () => {

        const response = await api.get(`users/${username}`)

        setUserInfo(response.data)
    }, [])

    const fetchIssueDetails = useCallback(async (query?: string) => {

        const response = await api.get(`repos/${username}/${repo}/issues/${query}`)

        setIssueDetails(response.data)
    }, [])


    useEffect(() => {
        fetchIssueList();
    }, [fetchIssueList]);

    useEffect(() => {
        fetchUserInfo();
    }, [fetchUserInfo]);


    return (
        <GitContext.Provider
            value={{ fetchUserInfo, userInfo, fetchIssueList, issueList, fetchIssueDetails, issueDetails }}
        >
            {children}
        </GitContext.Provider>
    );
}
