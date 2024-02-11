import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import Button from "./common/Button";
import { IoMenu } from "react-icons/io5";

export default function Header(){

    return(
        <Wrapper>
            <div className="header container">
                <div className="logo">
                    <img src="/asset/logo.png" alt="logo" />
                </div>
                <div className="search-container">
                    <div className="search-bar">
                        <IoSearch className="icon"/>
                        <input type="text" placeholder="Search For brand, category, coupon" className="search" />
                    </div>
                </div>
                <div className="btns">
                    <Button>login / SignUp</Button>
                </div>
                <div className="hamburger">
                    <IoMenu className="menu"/>
                </div>
            </div>
        
        
        </Wrapper>
    )
}

const Wrapper = styled.section`
.hamburger{

    display: none;
    .menu{
        color: var(--primary-color);
        font-size: 3rem;
        cursor: pointer;
    }

}

/* border: 1px solid black; */

.header{
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;

    align-items: center;

    .logo{
        width: 120px;
        height: 50px;

        img{
            width: 100%;
            height: 100%;
        }
    }

    .search-bar{
        width: 35rem;
        height: 3rem;
        display: flex;
        align-items: center;
        gap: .5rem;
        flex-direction: row;
        border: 1px solid #E3E3E3;
        background-color:#E3E3E3;
        padding: .5rem 1.5rem;
        border-radius: 5px;

        .icon{
            font-size:2rem;
            color: var(--para);
        }
        .search{
            width: 100%;
            height: 100%;
            background-color: transparent;
            border: none;
            outline: none;
        }
    }


}

@media (max-width:700px) {

    .hamburger{
        display: block;
    }
    .btns{
        display: none;
    }
    
   .search-container{
        display: none;
    }
        
}

`