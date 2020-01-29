import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    margin-top: 100px;
    background: #111111;
    
    @media (max-width: 1024px) {
       margin-top: 50px;
    }
`;

const Spacer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    
    &:last-child {
        align-self: flex-end;
    }
`;

const LeftTitle = styled.h4`
    color: white;
    font-size: 2.4em;
    margin: 0;

    @media (max-width: 1024px) {
       font-size: 1.1em;
    }
`;

const RightText = styled.h4`
    color: white;
    font-size: 2.4em;
    margin: 0;
    
    @media (max-width: 1024px) {
       font-size: 1.1em;
    }
`;

const LittleText = styled.p`
    color: white;
    margin: 0;
    
    @media (max-width: 1024px) {
       font-size: .7em;
    }
`;

const FooterWrapper = styled.div`
    padding: 50px;
    max-width: 1200px;
    min-height: 200px;
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    
    @media (max-width: 1024px) {
       padding: 15px;
       min-height: 100px;
    }
`;

function Footer({data}) {
    return <Wrapper>
        <FooterWrapper>
            <Spacer>
                <LeftTitle>{data.primary.left_title.text}</LeftTitle>
                <RightText>{data.primary.right_title.text}</RightText>
            </Spacer>
            <Spacer>
                <LittleText>{data.primary.author_name.text}</LittleText>
                <LittleText>{data.primary.middle_text.text}</LittleText>
                <LittleText>{data.primary.date}</LittleText>
            </Spacer>
        </FooterWrapper>
    </Wrapper>
}

export default Footer;