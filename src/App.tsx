import React from "react";
import { Column } from "./components/Column";
import { AppContainer } from "./styles";
import { AddNewItem } from "./components/AddNewItem";
import { useAppState } from "./AppStateContext";

const App = () => {
  const { state, dispatch } = useAppState();

  return (
    <AppContainer>
      {state.lists.map((list, i) => (
        <Column key={list.id} id={list.id} text={list.text} index={i} />
      ))}

      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={text => dispatch({ type: "ADD_LIST", payload: text })}
      />
    </AppContainer>
  );
};

export default App;
