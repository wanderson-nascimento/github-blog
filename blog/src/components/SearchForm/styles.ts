import styled from 'styled-components'

export const SearchFormContainer = styled.div`
    margin-top:72px;
    
    section{
        display:flex;
        justify-content:space-between;
    }    
    span{
        font-size: 18px;
        font-weight: 700;
        color: ${(props) => props.theme['base-subtitle']};
    }
`

export const FormContainer = styled.form`
    margin-top: 12px;
    margin-bottom: 48px;

    input{
    display: flex;
    width: 864px;
    padding: 12px 16px;
    align-items: center;
    gap: 8px;

    border-radius:6px;
    color: ${(props) => props.theme['base-label']};
    border: 1px solid ${(props) => props.theme['base-boder']};
    background: ${(props) => props.theme['base-input']};
    }

`