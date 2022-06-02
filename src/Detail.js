import React from "react";
import  {useRef}  from "react";
import styled from "styled-components/"
import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";
import { createWordFB } from "./redux/modules/WordList";

const Detail = ()  => {

    let history = useHistory();
    const dispatch = useDispatch();

    const word = useRef(null);
    const mean = useRef(null);
    const example = useRef(null);

    // const params = useParams();
    // const id_index = params.id;

    const addWordList = () => {

        dispatch(createWordFB({
            word: word.current.value,
            mean: mean.current.value,
            example: example.current.value,
        })
        );
        
         history.push("/");
         };
    

    return (
            <Dcontainer>
                <Title> 
                Add Words </Title>
                <Line />
                <Dbox>
                <단어>
                <p>단어</p>
                <input type="text" ref={word}></input>
                </단어>

                <설명>
                <p>설명</p>
                <input type="text" ref={mean}></input>
                </설명>

                <예시>
                <p>예시</p>
                <input type="text" ref={example}></input>
                </예시>

                </Dbox>
                <Addword onClick={addWordList}> 
                Add-Word!</Addword>
                

            </Dcontainer>
    );
};



const Dcontainer = styled.div`
background-color: #e9e9e9;
`


const Title = styled.h2`

`
const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

const Dbox = styled.div`
max-width: 350px;
mid-height: 500vw;
background-color: #fff;
padding: 16px;
margin: 20px auto;
border-radius: 5px;
border: 1px solid #ddd;

display: flex;
flex-direction: column;
height: 100%;
`

const 단어= styled.div`
border: 1px solid #ddd;
padding: 16px;
margin-top: 10px;

text-align: left;
`

const 설명= styled.div`
border: 1px solid #ddd;
padding: 16px;
margin-top: 10px;
text-align: left;
`

const 예시= styled.div`
border: 1px solid #ddd;
padding: 16px;
margin-top: 10px;
text-align: left;
`

const Addword = styled.button`

`




export default Detail;