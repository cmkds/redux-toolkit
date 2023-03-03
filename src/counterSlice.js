import { createSlice } from "@reduxjs/toolkit";

// Slice는 작은 스토어
// counter라는 기능을 위한 작은 스토어인 slice
// 각각의 기능별로 slice를 만들어 하나로 합친다.
// createSlice를 이용해서 slice를 만든다.
const counterSlice = createSlice({
  // Slice의 필수 객체로
  // name 이름, initialState 초기값, reducers 리듀서 (타입별로 함수를 정해준다.)
  name: "counterSlice", //Slice를 지칭할 이름 dispatch 안에서 type { 여기서 사용됨/}
  initialState: { value: 0 }, // 초기값
  reducers: {
    up: (state, action) => {
      // 키= 설정한 이름 : (state,action) =>
      state.value = state.value + action.payload;
    },
  },
});

export default counterSlice;
export const { up } = counterSlice.actions;
