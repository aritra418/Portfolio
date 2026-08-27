"use client";

import { useState } from "react";

export function Topbar() {
  const [val, setVal] = useState<
    "Aboutme" | "Myprojects" | "Opensource" | "Contactme" | "null"
  >("null");

  const defaultAboutTheme = "cursor-pointer p-3 rounded-2xl hover:text-text1";
  const selectedAboutTheme = "text-text1 bg-text1/20 cursor-pointer override";

  return (
    <div className="p-3 fixed z-50 top-0 w-full flex justify-between pl-8 pt-2">
      <a
        href="https://github.com/aritra418"
        target="_blank"
        rel="noopener noreferrer"
        className="text-text1 text-xl cursor-pointer font-semibold p-3"
      >
        ~/.aritra418
      </a>
      <div className="flex justify-evenly gap-4 pr-8 text-xl text-text1/50 pt-0.5">
        <div
          className={
            (val === "Aboutme" ? `${selectedAboutTheme}` : "") +
            defaultAboutTheme
          }
          onClick={() => setVal("Aboutme")}
        >
          About me
        </div>
        <div
          className={
            (val === "Myprojects" ? `${selectedAboutTheme}` : "") +
            defaultAboutTheme
          }
          onClick={() => setVal("Myprojects")}
        >
          My projects
        </div>
        <div
          className={
            (val === "Opensource" ? `${selectedAboutTheme}` : "") +
            defaultAboutTheme
          }
          onClick={() => setVal("Opensource")}
        >
          Opensource
        </div>
        <div
          className={
            (val === "Contactme" ? `${selectedAboutTheme}` : "") +
            defaultAboutTheme
          }
          onClick={() => setVal("Contactme")}
        >
          Contact me
        </div>
      </div>
    </div>
  );
}
