// WordList.js
import {db} from '../../firebase';
import { collection,
    doc,
    getDoc,
    getDocs,
    addDoc,  
    deleteDoc } 
    from "firebase/firestore";


// Actions
const LOAD= 'WordList/LOAD';
const CREATE = 'WordList/CREATE';
const DELETE = 'WordList/DELETE';


const initialState = {
    list: [],    //,??

};

// Action Creators
export function loadWord(word_list){
    return { type: LOAD, word_list};
}
export function createWord (WordList) {
return { type: CREATE , WordList };
}

export function deleteWordList(WordList_index) {
    return { type: DELETE, WordList_index };
  }


//middlewares
export const loadWordFB = () => {
    return async function (dispatch) {
        const word_data = await getDocs(collection(db,"wordlist"));
    
     let word_list = [];

     word_data.forEach((w) => {
       word_list.push({id:w.id, ...w.data()});
     });

     dispatch(loadWord(word_list));
    }
}

export const createWordFB= (WordList) => {
    return async function (dispatch) {
        const docRef = await addDoc(collection(db,"wordlist"),WordList);
        const _word = await getDoc(docRef);
        const word_data = { id: _word.id, ..._word.data() };
        dispatch(createWord(word_data));
    }
}
export const deleteWordListFB = (WordList_id) => {
    return async function (dispatch, getState) {
     
      const docRef = doc(db, "wordlist", WordList_id);
      await deleteDoc(docRef);
      const _WordList_list = getState().WordList.list;
      const WordList_index = _WordList_list.findIndex((b) => {
        return b.id === WordList_id;
      });
      dispatch(deleteWordList(WordList_index));
    };
  };
  


// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "WordList/LOAD" : {
            return{ list: action.word_list };
        }

        case "WordList/CREATE": {
            const new_word_list = [...state.list, action.WordList];
            return {list : new_word_list};
            
        }

        case "WordList/DELETE": {
            const new_word_list= state.list.filter((l, idx) => {
              return parseInt(action.WordList_index) !== idx;
            });
            return { list: new_word_list };
          }
    // do reducer stuff
    default: return state;
    }
    }