import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

// Slice들을 모아 store를 만들 때 configureStore를 사용한다.
// configureStore에는 객체를 전달하면 된다.
const store = configureStore({
  // 카운터에 대한 리듀서다.
  reducer: {
    // 각각의 슬라이스의 리듀서들이 들어가면 된다.
    // state의 키값이 될 이름 : 슬라이스 리듀서
    counter: counterSlice.reducer, // counterSlice.reducer => 카운터슬라이스 안의 리듀서들을 하나로 합쳐 하나로 만든 reducer를 자동으로 만들어준 reducer
  },
});

export default store;
