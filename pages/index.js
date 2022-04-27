import Head from "next/head";
import styled from "styled-components";
import { MdMeetingRoom } from "react-icons/md";

import React from "react";

function handleCreateChatRoom() {}

export default function Home() {
  return (
    <MainDiv>
      <Head>
        <title>Evessenger</title>
        <meta name="messenger with events" />
      </Head>
      <h1>Evessenger</h1>
      <p>
        Use Evessenger to create chat rooms, invite your friends, and easily
        plan events with them
      </p>
      <p>Create a chat room</p>
      <button>
        <MdMeetingRoom size={70} />
      </button>
    </MainDiv>
  );
}

const MainDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  flex-wrap: nowrap;
  text-align: center;
`;
