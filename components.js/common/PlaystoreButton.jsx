import styled from "styled-components";

export default function PlaystoreButton(){


    return(

        <Wrapper>
            <img src="/asset/playstore.png" alt="" />
            <div className="label">
                <span className="label1">Download  from</span>
                <span className="label2">Play Store</span>
            </div>
        </Wrapper>
    )
}


const Wrapper = styled.span`
cursor: pointer;
background-color: white;
display: inline;
width: 160px;
border-radius: 8px;

border: none;
padding:  1rem;
justify-content: center;
display: flex;
align-items: center;
gap: 1rem;

.label{
    display: flex;
    flex-direction: column;
    font-family: "Open Sans";

    .label2{
        font-weight: 500;
        font-size: 1.4rem;
    }
}

`