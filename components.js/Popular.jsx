import styled from "styled-components";
import Heading from "./common/Heading";
import { SecoundaryCard } from "./common/SecoundaryCard";

export default function Popular() {


    return (

        <Wrapper>

            <div className="container">
                <Heading title={"Popular Membership"} />

                <div className="bannar-container">
                    <img src="/asset/p-1.png" alt="" className="row-1" />
                    <div className="card row-2">
                        <div className="card-container ">
                            <SecoundaryCard />
                            <SecoundaryCard />
                            <SecoundaryCard />
                            <SecoundaryCard />
                        </div>
                    </div>

                    <img src="/asset/p-3.png" alt="" />
                    <img src="/asset/p-4.png" alt="" />
                </div>
            </div>


        </Wrapper>
    )
}



const Wrapper = styled.section`

.bannar-container{
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    img{
        width: 100%;
    }

    .card{
        background: url("/asset/p2.png");
        display: flex;
        align-items: center;
        justify-content: center;
        
        .card-container{
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }

}

@media (max-width:700px) {

    .row-1{

        grid-column: 1/3;
    }
    .row-2{
        grid-column: 1/-1;
    }

    
}
`