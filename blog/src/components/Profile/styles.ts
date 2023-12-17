import styled from "styled-components"

export const ProfileContainer = styled.div`
    width: 864px;
    height: 212px;
    flex-shrink: 0;
    display:flex;
    padding: 32px;
    gap:32px;
    margin-top:-80px;


    border-radius: 10px;
    background-color: ${(props) => props.theme['base-profile']};
    box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);

    img{
        width: 148px;
        height: 148px;
        flex-shrink: 0;

        border-radius: 8px;
    }

    strong{
        color: ${(props) => props.theme['base-title']};
        font-size: 24px;
    }

    a{  
        font-size: 12px;
        font-weight: 700;
        display:flex;
        cursor:pointer;
        text-decoration: none;


        color: ${(props) => props.theme['blue']};
        align-items:center;
        gap:8px;

        img{
            width: 12px;
            height: 12px;
        }
    }
`
export const TagsProfile = styled.section`
    display: flex;
    gap:8px;
`
export const TagsContainer = styled.div`
    display: flex;
    gap:32px;

    img{
        width: 18px;
        height: 18px;
    }
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

