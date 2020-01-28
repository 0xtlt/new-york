import React from 'react'
import styled from "styled-components";
import PageWrapper from "../styles/pageWrapper";

const Article = styled.div`
    display: flex;
    margin-top: 100px;
`;

const LeftPart = styled.div`
    width: 30%;
`;

const LittleTitle = styled.h4`
    margin: 0;
    font-weight: bold;
`;

const RightPart = styled.div`
    width: 70%;
    
    p:first-child {
        margin-top: 0;
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