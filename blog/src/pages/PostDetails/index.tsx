import { useContext, useEffect } from "react";
import { PostInfo } from "../../components/PostInfo";
import { CodeContainer, PostDetailsContainer, TextDetails } from "./styles";
import { useParams } from "react-router-dom";
import { GitContext } from "../../contexts/GitContext";

export function PostDetails() {

    const { issueDetails, fetchIssueDetails } = useContext(GitContext)
    const { issueId } = useParams();
    
    useEffect(() => {
        fetchIssueDetails(issueId);
    }, [fetchIssueDetails, issueId]);


    console.log(issueDetails)


    return (
        <PostDetailsContainer>
            <PostInfo />
            <TextDetails>
                {issueDetails.body}
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