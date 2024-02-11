import styled from "styled-components";

export default function Banner(){


    return(

        <Wrapper className="section">
            <div className="container">
                <img src="/asset/bannar.png" alt="" />
            </div>


        </Wrapper>
    )
}


const Wrapper = styled.section`
img{
    width: 100%;
}
`