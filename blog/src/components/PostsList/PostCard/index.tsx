import { PostCardContainer } from './styles'
import { parseJSON, differenceInDays } from 'date-fns'
import { NavLink } from "react-router-dom";

interface PostCardData {
    itemTitle: string,
    itemBody: string,
    itemCreateAt: Date,
    id:number
}


export function PostCard({ itemTitle, itemBody, itemCreateAt, id }: PostCardData) {
    const today = new Date();
    const itemCreateAtParsed = parseJSON(itemCreateAt)
    const days = differenceInDays(today, itemCreateAtParsed)


    return (
        <PostCardContainer>
            <NavLink to={`/PostDetails/${id}`}  style={{
                textDecoration: 'none',
                color: 'inherit'
            }}>
                <section>
                    <strong>
                        {itemTitle}
                    </strong>
                    <small>
                        {`Há ${days} dias`}
                    </small>
                </section>
                <div>
                    <span>
                        {itemBody}
                    </span>
                </div>
            </NavLink>
        </PostCardContainer>
    )
}