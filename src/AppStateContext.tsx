import React, { createContext, useReducer, useContext } from "react";
import { nanoid } from "nanoid";
import {
  findItemIndexById,
  overrideItemAtIndex,
  moveItem,
} from "./utils/arrayUtils";

// Define the AppStateContext
const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

interface AppStateContextProps {
  state: AppState;
  dispatch: React.Dispatch<Action>;
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
    }
  | {
      type: "MOVE LIST";
      payload: {
        dragIndex: number;
        hoverIndex: number;
      };
    };

// Define appStateReducer
const appStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "ADD_LIST":
      // Reducer Logic here
      return {
        // use spread operator to get the previous state
        ...state,
        // set list to new array with list from old state plus new item
        lists: [
          ...state.lists,
          { id: nanoid(), text: action.payload, tasks: [] },
        ],
      };
    case "ADD_TASK": {
      // Reducer Logic here

      // Get index of the list
      const targetListIndex = findItemIndexById(
        state.lists,
        action.payload.listId
      );

      const targetList = state.lists[targetListIndex];

      const updatedTargetList = {
        ...targetList,
        tasks: [
          ...targetList.tasks,
          { id: nanoid(), text: action.payload.text },
        ],
      };

      return {
        ...state,
        lists: overrideItemAtIndex(
          state.lists,
          updatedTargetList,
          targetListIndex
        ),
      };
    }
    case "MOVE LIST": {
      const { dragIndex, hoverIndex } = action.payload;
      return {
        ...state,
        lists: moveItem(state.lists, dragIndex, hoverIndex),
      };
    }

    default: {
      return state;
    }
  }
};

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(appStateReducer, appData);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

// Inplement Custom Hook to get access to the data
export const useAppState = () => {
  return useContext(AppStateContext);
};
