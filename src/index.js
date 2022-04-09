import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./App.scss";

const content = document.getElementById("root");
const AppRoot = createRoot(content);

AppRoot.render(<App />);
