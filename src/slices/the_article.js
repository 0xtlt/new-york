import React from 'react'
import styled from "styled-components";
import PageWrapper from "../styles/pageWrapper";

const Article = styled.div`
    display: flex;
    margin-top: 100px;
    
    @media (max-width: 1024px) {
        margin-top: 50px;
    }
`;

const LeftPart = styled.div`
    width: 30%;
    
    @media (max-width: 1024px) {
        width: 25%;
    }
`;

const LittleTitle = styled.h4`
    margin: 0;
    font-weight: bold;
    
    @media (max-width: 1024px) {
        font-size: .87em;
    }
`;

const RightPart = styled.div`
    width: 70%;
    
    p:first-child {
        margin-top: 0;
    }
    
    @media (max-width: 1024px) {
        margin-left: 15px;
        width: calc(75% - 15px);
        
        p {
            font-size: .85em;
        }
    }
`;

function TheArticle({data}) {
    return <PageWrapper>
        <Article>
            <LeftPart><LittleTitle>{data.primary.left_title.text}</LittleTitle></LeftPart>
            <RightPart dangerouslySetInnerHTML={{__html: data.primary.right_content.html}} />
        </Article>
    </PageWrapper>
}

export default TheArticle;