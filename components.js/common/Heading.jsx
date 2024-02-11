
import styled from "styled-components";

export default function Heading({title}){


    return(
        <Wrapper className="container">
            <h2>{title}</h2>
            <div className="line"></div>
        
        </Wrapper>
    )
}


const Wrapper = styled.div`
    
.container{
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   gap: 1rem;



}

h2{
    font-size: 2.5rem;
    font-family: "Open Sans";
    font-weight: 500;
    text-align: center;

}

.line{
    height: 4px;
    width: 100px;
    margin: .5rem auto;
    background-color: var(--primary-color);
    border-radius: 1rem;
}
`