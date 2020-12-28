import React from "react";
import { ColumnContainer, ColumnTitle } from "../styles";
import { Card } from "./Card";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "../AppStateContext";

// Define the props using TS interface
interface ColumnProps {
  text: string;
  index: number;
}

const { state } = useAppState();

export const Column = ({ text, index }: ColumnProps) => (
  <ColumnContainer>
    <ColumnTitle>{text}</ColumnTitle>
    {state.lists[index].tasks.map((task) => (
      <Card text={task.text} key={task.id} />
    ))}
    <AddNewItem
      toggleButtonText="+ Add another Task"
      onAdd={console.log}
      dark
    />
  </ColumnContainer>
);
