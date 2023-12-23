import styled from "styled-components";

export const PostCardContainer = styled.div`
width: 416px;
height: 260px;
flex-shrink: 0;
padding:32px;

border-radius: 10px;
background: ${(props) => props.theme['base-post']};
color: ${(props) => props.theme['base-text']};
cursor: pointer;
text-decoration:none;

span{
    width: 352px;
    max-height: 112px;
    display: inline-block;
    overflow:hidden;
}

section{
    display:flex;
    justify-content:space-between;
}

strong{
    width: 283px;
    margin-bottom: 20px;
    font-size: 20px;
    color: ${(props) => props.theme['base-title']};
}

`