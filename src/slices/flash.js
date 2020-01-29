import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import PageWrapper from "../styles/pageWrapper";

const DoubleImages = styled.div`
    display: flex;
    margin-top: 70px;
    
    .gatsby-image-wrapper {
        width: 60%;
        height: 400px;
        filter: grayscale(100%);
        
        &:last-child {
            width: calc(40% - 20px);
            margin-left: 20px;
        }
    }
    
    @media (max-width: 1024px) {
        flex-wrap: wrap;
        
        .gatsby-image-wrapper {
            height: 200px;
            width: 80%;
            
            &:last-child {
                width: 80%;
                margin-top: 15px;
                margin-left: 20%;
            }
        }
    }
`;

const Title = styled.h2`
    font-size: 3em;
    width: 65%;
    line-height: 120%;
    margin-top: 25px;
    
    @media (max-width: 1024px) {
        font-size: 1.75em;
        width: 85%;
    }
`;

function Flash({data}) {
    return <PageWrapper>
        <DoubleImages>
            <Img fluid={data.primary.left_picture.localFile.childImageSharp.fluid}/>
            <Img fluid={data.primary.right_picture.localFile.childImageSharp.fluid}/>
        </DoubleImages>
        <Title>{data.primary.description_title.text}</Title>
    </PageWrapper>
}

export default Flash;