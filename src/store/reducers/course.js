import { actionType } from "../actions/type";

const initialState = {
  courses: [],
  arrResults: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_COURSES:
      state.courses = action.payload;
      return { ...state };
    case actionType.CHECK_ANSWERS:
      let checkId = state.arrResults.findIndex(
        (item) => +item.QuestionId === +action.payload.QuestionId
      );
      if (checkId === -1) {
        state.arrResults.push(action.payload);
      } else {
        let cloneArr = [...state.arrResults];
        cloneArr[checkId].answer.content = action.payload.answer.content;
        cloneArr[checkId].answer.exact = action.payload.answer.exact;
        state.arrResults = cloneArr;
      }
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
