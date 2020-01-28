import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import PageWrapper from "../styles/pageWrapper";

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 100px;
    justify-content: space-between;
    
    .gatsby-image-wrapper {
        width: 100%;
        height: 500px;
        filter: grayscale(100%);
    }
`;

const BigTitle = styled.h2`
    max-width: 80%;
    font-size: 3em;
    line-height: 120%;
    margin-top: 25px;
    margin-bottom: 0;
`;

const LittleTitle = styled.h4`
    margin-top: 25px;
    margin-bottom: 0;
    font-weight: 600;
`;

function BigPicture({data}) {
    return <PageWrapper>
        <Wrapper>
            <Img fluid={data.primary.picture.localFile.childImageSharp.fluid} />
            <BigTitle>{data.primary.title.text}</BigTitle>
            <LittleTitle>{data.primary.description.text}</LittleTitle>
        </Wrapper>
    </PageWrapper>
}

export default BigPicture;