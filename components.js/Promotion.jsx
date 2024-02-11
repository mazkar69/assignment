
import styled from "styled-components";
import PlaystoreButton from "./common/PlaystoreButton";
import AppleButton from "./common/AppleButton";

export default function Promotion(){


    return(

        <Wrapper>
            <div className="container">
                <div className="inner-container">
                    <div className="card-content">
                            <h2 className="title">Want to be a part of our team</h2>
                            <p className="desc">Be a part of best site of discount coupons</p>
                            <div className="btns">
                                <PlaystoreButton/>
                                <AppleButton/>
                                
                            </div>
                    </div>
                    <div className="img">
                        <img src={"/asset/mob.png"} />
                    </div>
                </div>
            </div>
        
        </Wrapper>
    )
}



const Wrapper = styled.section`
    
.inner-container{
  
    border-radius: 1rem;
    overflow: hidden;
    background-color: #fdddde;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;

    .card-content{
        display: flex;
        padding: 3rem 5rem;
        flex-direction: column;
        gap: 2rem;
        .title{
            font-size: 3rem;
            max-width: 250px;
            color: var(--primary-color);
            font-family: "Open Sans";
        }
        .desc{
            font-size: 1.7rem;
            color: var(--para);
            font-family: "Open Sans";
            font-weight: 400;
            max-width: 250px;
        }

        .btns{
            display: flex;
            gap: 2rem;
        }
    }
    .img{
        /* border: 2px solid red; */
        img{
            width: 100%;
        }
    }
}


@media (max-width:700px) {

    .inner-container{
    grid-template-columns: 1fr;

    }

    .title{
        width: 100%;
    }
    .btns{
        /* flex-direction: column; */
    }

    .img{

        display: none;

    }

    
}

`