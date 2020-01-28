import React from "react";
import styled from "styled-components";
import PageWrapper from "../styles/pageWrapper";

const TopPage = styled.div`
    display: flex;
`;

const LeftPart = styled.div`
    border-top: solid 6px black;
    width: calc(40vw - 75px);
    margin-right: 75px;
    display: flex;
    flex-wrap: wrap;
`;

const RightPart = styled.div`
    border-top: solid 6px black;
    width: 60vw;
`;

const BigH1 = styled.h1`
    font-weight: bold;
    font-size: 5em;
    line-height: 120%;
    letter-spacing: 0;
    margin: 0;
`;

const LittleH2 = styled.h2`
    font-weight: normal;
    width: 80%;
`;

const Description = styled.h4`
    align-self: flex-end;
    font-weight: lighter;
    width: 30%;
    font-size: .8em;
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