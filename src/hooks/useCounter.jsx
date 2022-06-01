import { useCallback, useMemo, useState } from "react";
export const useCounter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);
  const dobleCount = useMemo(() => {
    return count * 2;
  }, [count]);
  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((prevcount) => prevcount + 1);
    }
  }, [count]);

  const handleDisplay = useCallback(() => {
    setIsShow((prevprevisShow) => !prevprevisShow);
  }, []);

  return { count, dobleCount, isShow, handleClick, handleDisplay };
};
