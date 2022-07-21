
import { useState, useEffect } from "react";

export const useDidUpdateEffect = (fn: Function, defs: Array): void => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        if (isMounted) {
            setIsMounted(true);
            return;
        }
        fn();
    }, defs);
};