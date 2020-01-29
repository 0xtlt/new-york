import React from "react";
import styled from "styled-components";
import PageWrapper from "../styles/pageWrapper";

const TopPage = styled.div`
    display: flex;
    
    @media (max-width: 1024px) {
        flex-wrap: wrap;
    }
`;

const LeftPart = styled.div`
    border-top: solid 6px black;
    width: calc(40vw - 75px);
    margin-right: 75px;
    display: flex;
    flex-wrap: wrap;
    
    @media (max-width: 1024px) {
        margin-right: 0;
        margin-top: 25px;
        border-top: none;
        order: 1;
        width: 100%;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: flex-start;
    }
`;

const RightPart = styled.div`
    border-top: solid 6px black;
    width: 60vw;
    
    @media (max-width: 1024px) {
        order: 0;
        width: 100%;
    }
`;

const BigH1 = styled.h1`
    font-weight: bold;
    font-size: 5em;
    line-height: 120%;
    letter-spacing: 0;
    margin: 0;
    
    @media (max-width: 1024px) {
        margin-top: 25px;
        font-size: 3em;
    }
`;

const LittleH2 = styled.h2`
    font-weight: normal;
    width: 80%;
    
    @media (max-width: 1024px) {
        width: initial;
        margin: 0;
        margin-right: 30px;
    }
`;

const Description = styled.h4`
    align-self: flex-end;
    font-weight: lighter;
    width: 30%;
    font-size: .8em;
    
    @media (max-width: 1024px) {
        width: initial;
        margin: 0;
        align-self: flex-start;
    }
`;

function BigTitle({data}) {
    return <PageWrapper>
        <TopPage>
            <LeftPart>
                <LittleH2>{data.primary.little_title.text}</LittleH2>
                <Description>{data.primary.description.text}</Description>
            </LeftPart>
            <RightPart><BigH1>{data.primary.big_title.text}</BigH1></RightPart>
        </TopPage>
    </PageWrapper>
}

export default BigTitle;