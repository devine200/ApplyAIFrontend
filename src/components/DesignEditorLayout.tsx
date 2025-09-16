import React from "react";
import { v4 as uuidv4 } from 'uuid';
import type { DesignField } from "../types";
import EditorTab from "./EditorTab";
import LayoutDesignSelector from "./DesignEditor/LayoutDesignSelector";
import StyleSelector from "./DesignEditor/StyleSelector";
import DesignEditorForm from "./DesignEditor/DesignEditorSection";
import SkillLayoutSelector from "./DesignEditor/SkillLayoutSelector";
import type { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { selectSkillLayout, updateLayoutFieldSelection, updateTextFormatFieldSelection, updateContentFormatFieldSelection } from "../store/DesignEditor/designEditor";


const DesignEditorLayout = () => {
  const dispatch = useDispatch();
  const { resumeTemplates, selectedTemplateIdx } = useSelector(
    (state: RootState) => state.designEditor
  );
  const { layoutFields, textFormatFields, contentFormatFields } =
    resumeTemplates[selectedTemplateIdx];

  const handleSkillsLayoutChange = (isListed: boolean) => {
    dispatch(selectSkillLayout(isListed))
  }

  const handleLayoutFieldSelection = (fieldIdx: number, optionIdx: number) => {
    dispatch(updateLayoutFieldSelection({ fieldIdx, selectedOptionIdx: optionIdx }))
  }

  const handleTextFormatFieldSelection = (fieldIdx: number, optionIdx: number) => {
    dispatch(updateTextFormatFieldSelection({ fieldIdx, selectedOptionIdx: optionIdx }))
  }

  const handleContentFormatFieldSelection = (fieldIdx: number, optionIdx: number) => {
    dispatch(updateContentFormatFieldSelection({ fieldIdx, selectedOptionIdx: optionIdx }))
  }

  return (
    <div className="layout-section">
      <EditorTab />
      <div className="design-editor-section">
        <DesignEditorForm title="Layout & Design" hasBottomBorder={true}>
          <LayoutDesignSelector />
          {layoutFields.map(
            ({ name, options, selectedOptionIdx }: DesignField, index) => (
              <StyleSelector
                key={uuidv4()}
                fieldIdx={index}
                styleName={name}
                styleOptions={options}
                activeIndex={selectedOptionIdx}
                onSelection={handleLayoutFieldSelection}
                />
              )
            )}
        </DesignEditorForm>

        <DesignEditorForm title="Font & Text Formatting" hasBottomBorder={true}>
          {textFormatFields.map(
            ({ name, options, selectedOptionIdx }: DesignField, index) => (
              <StyleSelector
              key={uuidv4()}
              fieldIdx={index}
              styleName={name}
              styleOptions={options}
              activeIndex={selectedOptionIdx}
              onSelection={handleTextFormatFieldSelection}
              />
            )
          )}
        </DesignEditorForm>

        <DesignEditorForm title="Content Format">
          {contentFormatFields.map(
            ({ name, options, selectedOptionIdx }: DesignField, index) => name.toLowerCase() !== "skills layout" ? (
              <StyleSelector
                key={uuidv4()}
                fieldIdx={index}
                styleName={name}
                styleOptions={options}
                activeIndex={selectedOptionIdx}
                onSelection={handleContentFormatFieldSelection}
                />
              ) : (
                <SkillLayoutSelector isListed={options[selectedOptionIdx] === "listed"} onSelection={handleSkillsLayoutChange}/>
              )
            )}
        </DesignEditorForm>
      </div>
    </div>
  );
};

export default DesignEditorLayout;
