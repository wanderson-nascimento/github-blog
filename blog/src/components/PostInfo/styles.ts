import styled from "styled-components";

export const PostInfoContainer = styled.div`
width: 864px;
height: 168px;
flex-shrink: 0;
gap:32px;
padding:32px;
margin-top:-80px;

border-radius: 10px;
background-color: ${(props) => props.theme['base-profile']};
box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);

header{
    display:flex;
    justify-content:space-between;
}

h2{
    color: ${(props) => props.theme['base-title']};
}
`