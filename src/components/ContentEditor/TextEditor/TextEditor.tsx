import React, { useRef } from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import "../../../styles/TextEditor.css";

const TextEditor = () => {
  const editor = useRef(null);
  const getSunEditorInstance = (sunEditor) => {
    editor.current = sunEditor;
  };

  const handleChange = (content: string) => {
    console.log(content);
  };
  return (
    <>
      <SunEditor
        setContents="<p>Write something here...</p>"
        onChange={handleChange}
        setDefaultStyle="text-align: left;"
        getSunEditorInstance={getSunEditorInstance}
      />
    </>
  );
};

export default TextEditor;
