import React from "react";
import styles from "../styles/Home.module.css";

export function AnchorCard({
  children,
  className,
  ...props
}: {
  children: any;
  className?: string | Function;
  href: string;
}): JSX.Element {
  return (
    <a
      className={
        typeof className === "function"
          ? className(styles.card)
          : [styles.card, className].join(" ").trim()
      }
      {...props}
    >
      {children}
    </a>
  );
}
