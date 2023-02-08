import React, { useState } from "react";
import "./App.css";
import styled from 'styled-components'
import Tags from "./components/Tags/Tags";
import Timer from "./components/Timer/Timer";
import Modal from "./components/Modal/Modal";
import {FaCog} from 'react-icons/fa'

const App = () => {
  const [isOpen, setIsOpen] = useState(false);


  const onClose = () => {
    setIsOpen(false)
  }


  const onOpen = () => {
    setIsOpen(true)
  }


  return (
    <>
    <Modal isOpen={isOpen} onClose={onClose}/>
     <Title>Pomodoro</Title>
     <Tags/>
     <Timer/>
     {/*Settings icon*/ }
     <CogIcon onClick={onOpen}>
      <FaCog cursor="pointer"/>
     </CogIcon>
    </>
   
  );
};

export default App;
const Title = styled.h1`
font-size: 6rem;
padding: 2rem 0;
text-align: center;
`;
const CogIcon = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 4rem;
`;