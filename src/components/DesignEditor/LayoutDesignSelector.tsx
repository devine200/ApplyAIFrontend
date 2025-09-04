import React from "react";
import ResumeLayoutSelection from "./ResumeLayoutSelection";
import type { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { selectTemplateColor, selectTemplateLayout } from "../../store/DesignEditor/designEditor";

const LayoutDesignSelector = () => {
    const dispatch = useDispatch();
    const handleLayoutSelection = (index: number) => {
        dispatch(selectTemplateLayout(index));
    }

    const handleColorSelection = (index: number) => {
        dispatch(selectTemplateColor(index));
    }

    const { resumeTemplates, selectedTemplateIdx } = useSelector((state: RootState) => state.designEditor);

  return (
        <div className="layout-selector">
        {resumeTemplates.map(
            ({ templateSelection }, index) => {
                const { name, templateImg, colors, selectedColorIdx } = templateSelection
                return (
                    <ResumeLayoutSelection
                        index={index}
                        isActive={index === selectedTemplateIdx}
                        templateName={name}
                        templateImg={templateImg}
                        onSelect={handleLayoutSelection}
                        onColorSelect={handleColorSelection}
                        colorOptions={colors as [string, string, string, string]}
                        activeColorIdx={selectedColorIdx || 0}
                    />
                )
            }
        )}
        </div>
    );
};

export default LayoutDesignSelector;
