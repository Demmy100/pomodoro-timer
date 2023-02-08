import React from 'react'
import styled from 'styled-components'
const BackDrop = () => {
  return (
   <KBackdrop />
  )
}

export default BackDrop
const KBackdrop = styled.div`
width: 100%;
height: 60%;
position: fixed;
top: 0;
left: 0;
z-index: 100;
background-color: rgba(0, 0, 0, 0.5);
`;
