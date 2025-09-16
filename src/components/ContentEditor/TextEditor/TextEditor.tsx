import React, { useRef } from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import list from "suneditor/src/plugins/submenu/list";
import "../../../styles/TextEditor.css";

interface TextEditorProps {
  value?: string;
  handleChange?: (value: string) => void;
}

const TextEditor = ({value, handleChange}: TextEditorProps) => {
  const editor = useRef(null);
  const getSunEditorInstance = (sunEditor) => {
    editor.current = sunEditor;
    // Set default content to a list
    sunEditor.setContents("<ul><li><br></li></ul>");
    // Move cursor into the first list item
    const li = sunEditor.core.context.element.wysiwyg.querySelector("li");
    if (li) sunEditor.core.setRange(li, 0, li, 0);
  };

  return (
    <>
      <SunEditor
        setContents={value ? value : "Write something here..."}
        onChange={handleChange ? handleChange : ()=>{}}
        setOptions={{
          buttonList: [
            ["bold", "underline", "italic"],
            ["list"],
            ["outdent", "indent"],
            ["undo", "redo"],
          ]
        }}
        setDefaultStyle="text-align: left;"
        getSunEditorInstance={getSunEditorInstance}
      />
    </>
  );
};

export default TextEditor;
