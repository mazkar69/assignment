import styled from "styled-components";

export default function Button({children}){
    return (
        <Wrapper>
            {children}
        
        </Wrapper>
    )

}

const Wrapper = styled.button`

padding: .8rem 3rem;
font-family: "Open Sans";
font-weight: 500;
font-size: 1.5rem;
cursor: pointer;
text-transform: capitalize;
background-color: var(--primary-color);
color: white;
border: none;
border-radius: 1rem;
display: inline;
`