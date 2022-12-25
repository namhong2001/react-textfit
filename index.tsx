import bsearch from "@namhong2001/binary-search";
import {
  HTMLAttributes,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
} from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  mode?: "single" | "multi";
  min?: number; // inclusive
  max?: number; // inclusive
}

const Textfit: React.FC<PropsWithChildren<Props>> = ({
  children,
  mode = "multi",
  min = 0,
  max = 300,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const isOverflown = useCallback(() => {
    const el = ref.current!;
    return el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth;
  }, []);

  const setFontSize = useCallback(() => {
    const el = ref.current!;

    const originVisibility = el.style.visibility;

    el.style.visibility = "hidden";
    const fontSize = bsearch(min, max + 1, (mid) => {
      el.style.fontSize = `${mid}px`;
      return !isOverflown();
    });
    el.style.fontSize = `${fontSize}px`;
    el.style.visibility = originVisibility;
  }, [isOverflown, min, max]);

  useEffect(() => {
    const el = ref.current!;

    setFontSize();
    const observer = new ResizeObserver(setFontSize);
    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [children, mode, setFontSize]);

  return (
    <div
      ref={ref}
      style={{
        whiteSpace: mode === "single" ? "nowrap" : "normal",
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Textfit;
