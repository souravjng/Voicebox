import React from 'react';
import styled from 'styled-components';

const Dashboard = () => {
  return (
    <Div1>
    <h1>Dashboard</h1>
    <DivSuperContainer>
    </DivSuperContainer>
    </Div1>

  )
}

const Div1 = styled.div`
  margin-left:3.4%;
  margin-top:-8px;
  background-color:#e0e0e0;
  width: 97%;
  height: 755px;
h1{
  
  font-family: "Mona Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight:400;
  margin: 0px 0px 0px 50px ;
  font-size: 50px;
}
`;
const DivSuperContainer = styled.div`
  border: 1px solid #8080808f;
  background-color:white;
  margin: 10px 0px 0px 35px ;
  border-radius:4px;
  width: 95%;
  height: 650px;`;



export default Dashboard;