import styled from "styled-components";

export default function PopularCategory(){

    const categories = [
        "Flight", "Medicines", "OTT", "Food", "Recharge",
        "Lab", "Fashion", "Bus", "Hosting", "Bills",
        "Eyewear", "Electronics", "Education", "Pizza", 
        "Entertainment", "Flowers", "Kids", "Lifestyle",
        "Hotel", "Services", "Bike", "Jewellery", "Beauty",
        "Travel", "Kitchen", "Footwear", "Furniture", "Novelties"
    ];

    return(

        <Wrapper className="section">
            <div className="container">
                <div className="side-img">
                    <img src="/asset/categories.png" alt="categories" />
                </div>
                <div className="category-container">

                    <div className="header">
                        <h2 >Popular Categories</h2>
                        <div className="underline"></div>

                        <div className="categories">
                            {
                                categories.map((cat,i)=>{
                                    return (<span key={i}>{cat}</span>)
                                })
                            }
                        </div>
                    </div>

                </div>  
            </div>


        </Wrapper>
    )
}


const Wrapper = styled.section`
    

.container{
    border-radius: 1rem;
    overflow: hidden;
    /* border: 2px solid red; */
    display: flex;
    gap: 2rem;
}

.side-img{
    border-radius: 1rem 0rem 0rem 1rem ;
    overflow: hidden;
    width: 400px;
}
.category-container{
    width: 100%;
    /* border: 1px solid red; */
    


    .header{
        h2{
            font-size: 2.5rem;
            font-family: "Open Sans";
            font-weight: 500;
            /* text-align: center; */

        }

        .underline{
            height: 4px;
            width: 100px;
            margin: .5rem 0;
            background-color: var(--primary-color);
            border-radius: 1rem;
        }
    }


    .categories{
        margin-top: 1.5rem;
        display: grid;
        grid-template-columns: repeat(4,1fr);
        span{
            font-size: 1.5rem;
            padding:  1.3rem;
            font-family: "Open Sans";
            text-align: center;
            border: 1px solid silver;
        }
    }
}

@media (max-width:700px) {

    .container{
        flex-direction: column;

        .side-img{
            margin: auto;
            width: 70%;
            display: inline-block;

            img{
                width: 100%;
            }
        }
    }
    
}
`