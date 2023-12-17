import { PostCardContainer } from './styles'
import { parseJSON, differenceInDays } from 'date-fns'
// import formatDistanceToNow from 'date-fns/formatDistanceToNow'

interface PostCardData {
    itemTitle: string,
    itemBody: string,
    itemCreateAt: Date,
}


export function PostCard({ itemTitle, itemBody, itemCreateAt }: PostCardData) {
    const today = new Date();
    const itemCreateAtParsed = parseJSON(itemCreateAt)
    const days = differenceInDays(today, itemCreateAtParsed)


    return (
        <PostCardContainer>
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
        </PostCardContainer>
    )
}