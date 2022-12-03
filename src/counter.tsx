import React, { useEffect } from "react";
import { useCounter } from "./useCounter"

export const Counter = () => {
  const { count, isLoading, increment } = useCounter();

  useEffect(() => {
    increment();
  }, []);

  if (isLoading) return <div>------</div>;

  return <div>{count}</div>;
}
