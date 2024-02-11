import styled from "styled-components";
import Button from "./Button";

export function OfferCard() {


    return (
        <Wrapper>

            <h2>Upto 60% off on Appliances</h2>
            <div className="brand">
                <img src="/asset/brand.png" alt="brand" />
            </div>
            <p>Upto 60% off on summer Appliances</p>
            <Button>Grab Now</Button>

        </Wrapper>
    )
}


const Wrapper = styled.div`
background-color: white;
border-radius: 5px;
min-width: 20rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 1.5rem;
padding: 2rem;

h2{
    font-family: "Open Sans";
    color: green;
    font-size: 1.7rem;
    text-align: center;
}

p{
    color: var(--para);
    font-family: "Open Sans";
    font-size: 1.5rem;
    text-align: center;
}


`