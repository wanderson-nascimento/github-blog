import styled from "styled-components"

export const ProfileContainer = styled.div`
    width: 864px;
    height: 212px;
    flex-shrink: 0;
    display:flex;
    padding: 32px;
    gap:32px;


    border-radius: 10px;
    background-color: ${(props) => props.theme['base-profile']};
    box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);

    img{
        border-radius: 8px;
    }

    strong{
        color: ${(props) => props.theme['base-title']};
        font-size: 24px;
    }
`
export const TagsProfile = styled.section`
    display: flex;
    gap:8px;
`
export const TagsContainer = styled.div`
    display: flex;
    gap:24px;
`
export const HeaderProfile = styled.header`
 display:flex;
 justify-content: space-between;

`

export const ProfileTextContain = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:space-between;
`

