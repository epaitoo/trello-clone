import React from "react";
import { ColumnContainer, ColumnTitle } from "../styles";
import { AddNewItem } from "./AddNewItem";

// Define the props using TS interface
interface ColumnProps {
  text: string;
}

export const Column = ({
  text,
  children,
}: React.PropsWithChildren<ColumnProps>) => (
  <ColumnContainer>
    <ColumnTitle>{text}</ColumnTitle>
    {children}
    <AddNewItem
      toggleButtonText="+ Add another Task"
      onAdd={console.log}
      dark
    />
  </ColumnContainer>
);
