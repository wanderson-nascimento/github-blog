import { PostCard } from './PostCard'
import {PostListContainer} from './styles'
import { GitContext } from '../../contexts/GitContext'
import { useContext } from 'react'

export function PostList(){

    const {issueList} = useContext(GitContext);


    return(
        <PostListContainer>
            {issueList.map(item => {
                return(
                    <PostCard
                        key={item.id}
                        itemTitle={item.title}
                        itemBody={item.body}
                        itemCreateAt={item.created_at}
                        id={item.number}
                    />
                )
            })}
        </PostListContainer>
    )
}