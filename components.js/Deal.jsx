import styled from "styled-components";
import Heading from "./common/Heading";
import { SecoundaryCard } from "./common/SecoundaryCard";

export default function Deals(){


    return(
        <Wrapper className="section">
            <div className="container">
                <Heading title={"Deals Of The Day"}/>

            
                <div className="details-container">
                    <SecoundaryCard/>
                    <SecoundaryCard/>
                    <SecoundaryCard/>
                    <SecoundaryCard/>
                </div>
            </div>
        
        </Wrapper>
    )
}


const Wrapper = styled.section`


.details-container{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    overflow-x: scroll;
    &::-webkit-scrollbar {
        display: none;
    }


}
`