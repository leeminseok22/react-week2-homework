import React from "react";
import styled from "styled-components/"


import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { deleteWordListFB } from "./redux/modules/WordList";



function Main(props) {
    const history = useHistory();
    
    const dispatch = useDispatch();
    const words = useSelector((state) => state.WordList.list);
   
    
  
    
    return (
        <Container>
          
            <Line />
            {words.map((list, index) => {
        return (
          <Cards key={index} id={list.id}>
            <Word>{list.word}</Word>
            <P>의미</P>
            <Mean>{list.mean}</Mean>
            <P>예시</P>
            <Ex>{list.example}</Ex>
              
            <Dbutton
              onClick={() => {
                dispatch(deleteWordListFB(list.id));
                 history.push("/");
              
              }}
            >🗑</Dbutton>
          </Cards>
        );
      })}

           

        </Container>

    );
};
const Cards = styled.div`
  box-sizing: border-box;
  width: 500px;
  height: 450px;
  font-size: 20px;
  font-decoration: underline;
  background-color: #f1faee;
  border: 2px solid #a8dadc;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  float: left;
  margin: 40px 20px 40px 20px;
  border-radius: 15px;
`;

const Word = styled.div`
  max-width: 100%;
  background-color: #a8dadc;
  font-size: 25px;
  font-weight: 900;
  margin: 0px;
  padding: 20px;
  border-radius: 15px;
  
`;

const Mean = styled.div`
  height: 125px;
  border-bottom: 2px solid #a8dadc;
  padding: 10px;
  overflow: auto;
 
`;

const Ex = styled.div`
  height: 125px;
  color: blue;
  padding: 10px;
  overflow: auto;
  
`;

const P = styled.div`
  color: #1d3557;
  font-weight: 600;
  border-bottom: 2px solid #a8dadc;
  padding: 5px;
  border-radius: 15px;
`;






const Line = styled.hr`
margin: 16px 0px;
border: 1px dotted #ddd;
`


const Container = styled.div`
background-color: #e9e9e9;
`
const Dbutton =styled.button`
`



export default Main;