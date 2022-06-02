import {Route} from 'react-router-dom';
import styled from "styled-components/"
import './App.css';
// import styled from "styled-components";
import Main from "./Main"
import Detail from "./Detail"
 
import { useHistory } from "react-router-dom";
import React, { useEffect } from "react";
import { loadWordFB} from "./redux/modules/WordList"
import { useDispatch } from "react-redux";





function App() {
  const dispatch = useDispatch();
  const history = useHistory();

 useEffect(() => {
    dispatch(loadWordFB());
  }, [dispatch]);

  return (
    <div className="App">
      <Route path="/" exact>
      <Title onClick={() => {
          history.push("/");
        }}>9✖9</Title>
<AddBtn onClick={() => {
          history.push("/Detail");
        }}>➕</AddBtn>
        
        <Main/>
        
        
      </Route>
      <Route path="/Detail">
        <Detail mainTitle = { Title }/>
      </Route>
 
    </div>
  );
};


const Title = styled.h2`
width: 95%;

background-color: #15133C;
color: #EC994B;
font-size: 50px;
font-weight: 700;
margin: 0px auto;
padding: 20px;
border: 2px solid black;
border-radius: 10px;
`

const AddBtn = styled.button`
width: 70px;
height: 70px;
background-color: #EC994B;
line-height: ;
margin: 5px 20px auto;
border-radius: 50%;
border: 2px solid black;
position: absolute;
right: 30px;
top: 10px;
font-size: 30px;


`
export default App;