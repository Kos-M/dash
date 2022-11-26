import React from "react";

// components

import Editor from "components/Editor/Editor.js";
 
export default function EditorPage() {


// function handleThemeChange(th) {
//   const theme = th;
//   console.log("theme...", theme);

//   if (["light", "vs-dark"].includes(theme.value)) {
//     setTheme(theme);
//   } else {
//     defineTheme(theme.value).then((_) => setTheme(theme));
//   }
// }

  return (
    <>
    <Editor
    theme={'Monokai'}
    code={`
    const path = require('path');
    const { bullish } = require('technicalindicators');
    const { Big } = require('big.js');
   

    `}
    />
    </>
  );
}
