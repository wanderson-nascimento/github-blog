import { PostInfo } from "../../components/PostInfo";
import { CodeContainer, PostDetailsContainer, TextDetails } from "./styles";

export function PostDetails() {
    return (
        <PostDetailsContainer>
            <PostInfo />
            <TextDetails>
                Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
                <br />
                <br />
                <a>Dynamic typing</a>
                <br />
                JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
            </TextDetails>
            <CodeContainer>
                let foo = 42;   // foo is now a number<br />
                foo = 'bar';    // foo is now a string<br />
                foo = true;     // foo is now a boolean
            </CodeContainer>
        </PostDetailsContainer>
    )
}