import styled from "styled-components";
import Heading from "./common/Heading";
import { SecoundaryCard } from "./common/SecoundaryCard";

export default function Coupon() {


    return (
        <Wrapper className="section">

            <div className="container">
                <Heading title={"Coupon By Categories"} />

                <div className="main-container">
                    <div className="tab-container">
                        <div className="tab-box active">
                            <img src="/asset/tab/fashion.png" alt="icon" />
                            <p className="tab-label">Fashion</p>
                        </div>
                        <div className="tab-box">
                            <img src="/asset/tab/food.png" alt="icon" />
                            <p className="tab-label">Food</p>
                        </div>
                        <div className="tab-box">
                            <img src="/asset/tab/beauty.png" alt="icon" />
                            <p className="tab-label">Beauty</p>
                        </div>
                        <div className="tab-box">
                            <img src="/asset/tab/toys.png" alt="icon" />
                            <p className="tab-label">Toys</p>
                        </div>
                        <div className="tab-box">
                            <img src="/asset/tab/hosting.png" alt="icon" />
                            <p className="tab-label">Cloud</p>
                        </div>
                        <div className="tab-box">
                            <img src="/asset/tab/gaming.png" alt="icon" />
                            <p className="tab-label">Gaming</p>
                        </div>
                        <div className="tab-box">
                            <img src="/asset/tab/mobile.png" alt="icon" />
                            <p className="tab-label">Phone</p>
                        </div>
                        <div className="tab-box">
                            <img src="/asset/tab/travel.png" alt="icon" />
                            <p className="tab-label">Travel</p>
                        </div>
                        <div className="tab-box">
                            <img src="/asset/tab/movies.png" alt="icon" />
                            <p className="tab-label">Movies</p>
                        </div>
                    </div>
                    <div className="cuopon-container">
                        <SecoundaryCard/>
                        <SecoundaryCard/>
                        <SecoundaryCard/>
                        <SecoundaryCard/>

                    </div>
                </div>

            </div>

        </Wrapper>
    )
}


const Wrapper = styled.div`

background-color: #dadada;


.main-container{
    border-radius: 8px;
    overflow: hidden;
}

.tab-container{
    display: grid;
    grid-template-columns: repeat(9,1fr);
    gap: 0;
    flex-wrap: nowrap;
    overflow-x: scroll;
        &::-webkit-scrollbar {
        display: none;
    }

    .tab-box{
        border-radius: 10px 10px 0px 0px;
        border-right: 1px solid #dadada;
        cursor: pointer;
        background-color: white;
        min-width: 10rem;
        height: 9rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 8px;

        &:hover{
            border-bottom: 3px solid var(--primary-color);
        }

        .tab-label{
            /* color: var(--para); */
            
            font-family: "Open Sans";
            font-size: 1.7rem;
        }
    }

    .active{
        border-bottom: 3px solid var(--primary-color);
    }
}
.cuopon-container{
    display: grid;
    grid-template-columns: repeat(4,1fr);
}


@media (max-width:700px) {

    .cuopon-container{
        display: grid;
        grid-template-columns: repeat(2,1fr);
    }
    
}
`