import styled from "styled-components";

export default function Navbar(){

    return(
        <Wrapper>
            
        <div className="navbar container">
                <ul className="nav-items">

                    <li className="nav-item active">Home</li>
                    <li className="nav-item">Deals</li>
                    <li className="nav-item">Coupon</li>
                    <li className="nav-item">Store</li>
                    <li className="nav-item">Contact Us</li>
                </ul>
        </div>
        </Wrapper>
    )
}


const Wrapper = styled.nav`
background-color: var(--bg-color);

.container{
    padding-top: 0px;
    padding-bottom: 0px;
}
.nav-items{
    
    height: 100%;
    color: white;
    display: flex;
    /* flex-wrap: nowrap; */

    align-items: center;
    justify-content: center;
    gap: 3rem;

    .nav-item{
        font-size: 1.8rem;
        font-weight: 300;
        font-family: "Open Sans", sans-serif;
        font-weight: 400;
        padding: 1rem .5rem ;
        cursor: pointer;
        white-space: nowrap;
        transition: all .3s linear;
        
        &:hover {
            color: var(--primary-color);
        }

    }

    .active{
        color: var(--primary-color);
        border-bottom: 3px solid var(--primary-color);
    }
}


`