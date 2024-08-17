import { useEffect, useState } from "react";

export function useLocal<T>(key: string, initalVal: T | (() => T)) {
  const [value, setValue] = useState<T>(() => {
    const jsonVal = localStorage.getItem(key);
    if (jsonVal != null) return JSON.parse(jsonVal);

    if (typeof initalVal === "function") {
      return (initalVal as () => T)();
    } else {
      return initalVal;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
