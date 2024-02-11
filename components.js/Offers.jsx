import styled from "styled-components";
import { FaFire } from "react-icons/fa";
import { RiTimerLine } from "react-icons/ri";
import { IoTrophySharp } from "react-icons/io5";
import { OfferCard } from "./common/OfferCard";

export default function Offers() {


    return (

        <Wrapper>

            <div className="container">
                <div className="tabs">
                    <span className="tab-btn active">
                        <IoTrophySharp className="icon" />
                        <span className="label">Popular Coupons</span>
                    </span>
                    <span className="tab-btn">
                        <RiTimerLine className="icon" />

                       <span className="label"> Ending Soon</span>
                    </span>
                    <span className="tab-btn">
                        <FaFire className="icon" />

                       <span className="label"> Latest Coupons</span>
                    </span>
                </div>

                <div className="offer-container">
                    <OfferCard />
                    <OfferCard />
                    <OfferCard />
                    <OfferCard />
                    <OfferCard />
                    <OfferCard />
                    <OfferCard />
                    <OfferCard />
                </div>
            </div>

        </Wrapper>

    )
}

const Wrapper = styled.section`

.tabs{
    display: flex;
    align-items: center;
    justify-content: center;
    /* border: 2px solid red; */


    .tab-btn{
        display: flex;
        cursor: pointer;
        align-items: center;
        justify-content: center;
        /* border:2px solid green; */
        padding: 1rem 1.5rem;
        color: var(--primary-color);
        font-family: "Open Sans";
        gap: 1rem;
        font-size: 1.7rem;
        font-weight: 500;
        border-radius: 5px;



        &:hover{
            background-color: white;
        }

        .icon{
            color: var(--para);

        }
        .label{
            text-align: center;
        }
    }

    .active{
        background-color: white;
    }
}


.offer-container{
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 2rem;
}


@media (max-width:950px) {

    .offer-container{
        margin-top: 3rem;
        display: grid;
        grid-template-columns: repeat(3,1fr);
        gap: 2rem;
    }
    
}
@media (max-width:700px) {

    .offer-container{
        margin-top: 3rem;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        gap: 2rem;
    }

    .tab-btn{
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
    }
    
}
`