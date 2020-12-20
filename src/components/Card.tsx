import React from "react";
import { CardContainer } from "../styles";

// Define the props using TS interface
interface CardProps {
  text: string;
}

export const Card = ({ text }: CardProps) => (
  <CardContainer>{text}</CardContainer>
);
