import styled from "styled-components";
import Button from "./common/Button";

export default function Newsletter() {


    return (
        <Wrapper className="section">

            <div className="container">

                <div className="newsletter-card">

                    <div className="img">
                        <img src="/asset/newsletter.png" alt="" />
                    </div>

                    <div className="form">

                        <h2 className="title">Subscribe to our Newsletter!</h2>
                        <p className="desc">Be the first to get exclusive offers ands the latest news</p>
                        <input className="input" type="text" placeholder="Enter your email address" />
                        <div className="btn">
                            <Button>Subscribe</Button>
                        </div>


                    </div>


                </div>
            </div>


        </Wrapper>
    )
}


const Wrapper = styled.section`
    
    background-color:#dadada ;

    .newsletter-card{
        background-color: white;
        border-radius:1rem;
        display: grid;
        grid-template-columns: 1fr 1fr;


        .img{
            
            img{
                /* width: 100%; */
            }
        }

        .form{
            display: flex;
            flex-direction: column;
            gap: 2rem;
            padding: 3rem;

            .title{
                font-size: 3rem;
                font-family: "Open Sans";
                max-width: 250px;
            }
            .desc{
                font-size: 1.7rem;
                font-family: "Open Sans";
                max-width: 280px;
                color: var(--para);
            }

            input{
                padding: 1rem 1.5rem;
                border: none;
                border: 1px solid var(--para);
                border-radius: 8px;
                font-size: 1.6rem;
                outline: none;
                font-family: "Open Sans";
            }

        }
 
 
 }


 @media (max-width:700px) {

    .newsletter-card{
        grid-template-columns: 1fr;
        align-items: center;
        justify-content: center;

        .img{
            text-align: center;
        }
    }
    
 }
`