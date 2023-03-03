import React from "react";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    up: (state, action) => {
      state.value = state.value + action.step;
    },
  },
});

const store = configureStore({
  // 카운터에 대한 리듀서다.
  reducer: {
    counter: counterSlice.reducer,
  },
});

// function reducer(state, action) {
//   if (action.type === "up") {
//     return { ...state, value: state.value + action.step };
//   }

//   return state;
// }

// const initialState = { value: 1 };
// const store = createStore(reducer, initialState);

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    console.log(state);
    return state.counter.value;
  });
  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: "up", step: 2 });
        }}
      >
        +
      </button>
      {count}
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter></Counter>
      </div>
    </Provider>
  );
}

export default App;
