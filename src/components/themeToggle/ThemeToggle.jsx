"use client";

import Image from "next/image";
import styles from "./themeToggle.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme((prev) => {
      if (prev === "light") {
        localStorage.setItem("theme", "dark");
        return "dark";
      } else {
        localStorage.setItem("theme", "light");
        return "light";
      }
    });
  };

  return (
    <div
      className={styles.container}
      onClick={toggleTheme}
      style={
        theme === "dark"
          ? { backgroundColor: "white" }
          : { backgroundColor: "#0f172a" }
      }
    >
      <Image
        src="/moon.png"
        alt=""
        width={14}
        height={14}
      />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, backgroundColor: "#0f172a" }
            : {
                right: 1,
                backgroundColor: "white",
              }
        }
      />
      <Image
        src="/sun.png"
        alt=""
        width={14}
        height={14}
      />
    </div>
  );
};
export default ThemeToggle;
