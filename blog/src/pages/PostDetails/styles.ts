import styled from "styled-components";

export const PostDetailsContainer = styled.div`
display: flex;
width: 864px;
padding: 40px 32px;
flex-direction: column;
align-items: center;
gap: 24px;

`
export const TextDetails = styled.div`

`

export const CodeContainer = styled.div`
    display: flex;
    padding: 16px;
    align-items: center;
    gap: 8px;
    align-self: stretch;

    border-radius: 2px;
    background: ${(props) => props.theme['base-post']}
`