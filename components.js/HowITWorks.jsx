import styled from "styled-components";
import Heading from "./common/Heading";

export default function HowItWorks() {


    return (

        <Wrapper className="section">

            <div className="container">
                <Heading title={"How It Works?"} />
                <div className="card-container">

                    <div className="card">
                        <img src="/asset/1.png" alt="" />
                        <h2 className="title">SignUP</h2>
                        <p className="desc">If you are going to use a passage of Lorem Ipsum, you need to be sure there</p>
                    </div>
                    <div className="card">
                        <img src="/asset/2.png" alt="" />
                        <h2 className="title">Choose Coupon</h2>
                        <p className="desc">If you are going to use a passage of Lorem Ipsum, you need to be sure there</p>
                    </div>
                    <div className="card">
                        <img src="/asset/3.png" alt="" />
                        <h2 className="title">Grab Coupon</h2>
                        <p className="desc">If you are going to use a passage of Lorem Ipsum, you need to be sure there</p>
                    </div>
                    {/* <img src="" alt="" /> */}
                </div>
            </div>

        </Wrapper>
    )
}


const Wrapper = styled.section`

.card-container{
    display: grid;
    margin-top: 2rem;
    grid-template-columns: repeat(3,1fr);
    position: relative;
}

.card{
    min-width: 25rem;
    max-width: 27rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem;
    background-color: white;
    border-radius: 1rem;
    justify-content: center;
    gap: 2rem;

    .title{
        font-size: 1.8rem;
        font-weight: 500;
        font-family: "Open Sans";

    }
    .desc{
        font-size: 1.5rem;
        font-weight: 400;
        text-align: center;
        color: var(--para);
        font-family: "Open Sans";
    }
}


@media (max-width:700px) {

    .card-container{

        grid-template-columns: 1fr;
        gap: 2rem;
   
    }

    .card{

        margin: auto;

    }
    
}

`