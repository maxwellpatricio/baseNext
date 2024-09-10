"use client"
import styled from "styled-components";
import { Card } from "@/components/Card/Card";
import Header from "@/components/Header/Header";

const CardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: #1f2229; */
  overflow: hidden;
`;

export default function Home() {
    return (
        <>
            <Header />
            <CardContainer>
                <Card title="Integração Base" />
            </CardContainer>
        </>
    );
}
