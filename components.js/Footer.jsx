import styled from "styled-components";
import PlaystoreButton from "./common/PlaystoreButton";
import AppleButton from "./common/AppleButton";

export default function Footer(){

    return(
        <Wrapper className="section">
            <div className="container">
                <div className="footer-container">
                    <div className="col col-1">
                        <div className="logo">
                        <img src="/asset/logo2.png" alt="" />
                        </div>
                        <p className="desc">Lorem Ipsum is simply dummy of the printing and type setting.</p>
                        <div className="btns">
                        <PlaystoreButton/>
                        <AppleButton/>
                        </div>
                    
                        
                    </div>
                    <div className="col col-2">
                        <h2 className="main-label">Company</h2>
                        <ul>
                            <li className="nav-item">About Us</li>
                            <li className="nav-item">Privacy Policy</li>
                            <li className="nav-item">Terms</li>
                            <li className="nav-item">Blog</li>
                            <li className="nav-item"> Career</li>
                        </ul>
                    </div>
                    <div className="col col-3">
                        <h2 className="main-label">Company</h2>
                        <ul>
                            <li className="nav-item">About Us</li>
                            <li className="nav-item">Privacy Policy</li>
                            <li className="nav-item">Terms</li>
                            <li className="nav-item">Blog</li>
                            <li className="nav-item"> Career</li>
                        </ul>
                    </div>
                    <div className="col col-4">
                        <h2 className="main-label">Company</h2>
                        <ul>
                            <li className="nav-item">About Us</li>
                            <li className="nav-item">Privacy Policy</li>
                            <li className="nav-item">Terms</li>
                            <li className="nav-item">Blog</li>
                            <li className="nav-item"> Career</li>
                        </ul>
                    </div>
                    <div className="col col-5">
                        <h2 className="main-label">Company</h2>
                        <ul>
                            <li className="nav-item">About Us</li>
                            <li className="nav-item">Privacy Policy</li>
                            <li className="nav-item">Terms</li>
                            <li className="nav-item">Blog</li>
                            <li className="nav-item"> Career</li>
                        </ul>
                    </div>

                </div>
            </div>
        
        </Wrapper>
    )
}


const Wrapper = styled.section`
    
background-color: var(--bg-color);


.footer-container{
    display: grid;
    grid-template-columns: repeat(5,1fr);
}

.col{
    display: flex;
    flex-direction: column;
    gap: 2rem;


    .main-label{
        color: var(--primary-color);
        font-size: 1.7rem;
        font-family: "Open Sans";
    }
    ul{
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .nav-item{
            color: white;
            /* list-style:circle; */
            font-size: 1.5rem;
            font-family: "Open Sans";
            cursor: pointer;

            /* &:hover{
                color: var(--primary-color);
            } */

        }
    }
}

.col-1{
    .logo{
        width: 120px;
        height: 50px;

        img{
            width: 100%;
            height: 100%;
        }
    }

    .desc{
        color: white;
        font-family: "Open Sans";
        font-size: 1.3rem;
        font-weight: 400;
        padding-right: 1rem;

    }
    .btns{
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

}


@media (max-width:700px) {
    .footer-container{
        justify-content: center;
        align-items: center;
        gap: 2rem;
    }

    .col-1{
        grid-column: 1/-1;

        .btns{
            flex-direction: row;
        }
    }
    .col-2,.col-4{
        grid-column:1/3;
    }
    
}

`