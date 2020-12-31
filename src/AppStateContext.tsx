import React, { createContext, useReducer, useContext } from "react";

// Define the AppStateContext
const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

interface AppStateContextProps {
  state: AppState;
}

// Define the AppState Type
interface Task {
  id: string;
  text: string;
}

interface List {
  id: string;
  text: string;
  tasks: Task[];
}

export interface AppState {
  lists: List[];
}

const appData: AppState = {
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [
        {
          id: "c0",
          text: "Generate app Scaffold",
        },
      ],
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [
        {
          id: "c2",
          text: "Learn Typescript",
        },
      ],
    },
    {
      id: "2",
      text: "Done",
      tasks: [
        {
          id: "c3",
          text: "Begin to use static typing",
        },
      ],
    },
  ],
};

// Actions

type Action =
  | {
      type: "ADD_LIST";
      payload: string;
    }
  | {
      type: "ADD_TASK";
      payload: { text: string; listId: string };
    };

// Defien appStateReducer
const appStateReducer = (state: AppState, action: Action): AppState => {
    switch (action.type) {
      case "ADD_LIST":
        // Reducer Logic here
        return {
          ...state
        }
      case "ADD_TASK":
        // Reducer Logic here
        return {
          ...state
        }
    
      default: {
        return state
      }
        
    }
} 

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <AppStateContext.Provider value={{ state: appData }}>
      {children}
    </AppStateContext.Provider>
  );
};

// Inplement Custom Hook to get access to the data
export const useAppState = () => {
  return useContext(AppStateContext);
};
