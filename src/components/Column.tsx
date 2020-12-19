import React from "react";
import { ColumnContainer, ColumnTitle } from "../styles";

// Define the props using TS interface
interface ColumnProps {
  text: string;
}

export const Column = ({ text }: ColumnProps) => (
  <ColumnContainer>
    <ColumnTitle>{text}</ColumnTitle>
  </ColumnContainer>
);
