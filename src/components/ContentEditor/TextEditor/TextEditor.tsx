import React, { useRef } from "react";
import SunEditor from "suneditor-react";
import SunEditorCore from "suneditor/src/lib/core";
import "suneditor/dist/css/suneditor.min.css";
import "../../../styles/TextEditor.css";

interface TextEditorProps {
  value?: string;
  hasOptions: boolean | true;
  placeholder?: string;
  height?: string;
  handleChange?: (value: string) => void;
}

const TextEditor = ({value, handleChange, hasOptions, placeholder, height}: TextEditorProps) => {
  const editor = useRef<SunEditorCore>(null);
  const getSunEditorInstance = (sunEditor: SunEditorCore) => {
    editor.current = sunEditor;
  };
  const buttonList = hasOptions ? [
      ["bold", "underline", "italic"],
      ["list"],
      ["outdent", "indent"],
      ["undo", "redo"],
    ] : [];

  return (
    <>
      <SunEditor
        setContents={value ? value : ""}
        onChange={handleChange ? handleChange : ()=>{}}
        setOptions={{
          buttonList,
          placeholder,
        }}
        setDefaultStyle="text-align: left;"
        getSunEditorInstance={getSunEditorInstance}
        height={height}
      />
    </>
  );
};

export default TextEditor;
