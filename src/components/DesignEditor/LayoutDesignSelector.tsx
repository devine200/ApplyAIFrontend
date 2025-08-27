import React, { useEffect, useState } from "react";
import ResumeImage from "../../assets/icons/resume.png";
import ResumeLayoutSelection, {
  type ColorOption,
} from "./ResumeLayoutSelection";

const LayoutDesignSelector = () => {
    const [activeLayoutIndex, setActiveLayoutIndex] = useState<number>(0);
    const [activeColorIndex, setActiveColorIndex] = useState<number>(2);

    const handleLayoutSelection = (index: number) => {
        setActiveLayoutIndex(index);
    }

    const handleColorSelection = (index: number) => {
        setActiveColorIndex(index);
    }

    const [layoutSelections, setLayoutSelections] = useState([
        {
        templateName: "Classic",
        templateImg: ResumeImage,
        isActive: false,
        colorOptions: [
            { color: "red", isActive: false },
            { color: "green", isActive: false },
            { color: "blue", isActive: true },
            { color: "purple", isActive: false },
        ],
        },
        {
        templateName: "Classic",
        templateImg: ResumeImage,
        isActive: false,
        colorOptions: [
            { color: "red", isActive: false },
            { color: "green", isActive: false },
            { color: "blue", isActive: true },
            { color: "purple", isActive: false },
        ],
        },
        {
        templateName: "Classic",
        templateImg: ResumeImage,
        isActive: true,
        colorOptions: [
            { color: "red", isActive: false },
            { color: "green", isActive: false },
            { color: "blue", isActive: true },
            { color: "purple", isActive: false },
        ],
        },
        {
        templateName: "Classic",
        templateImg: ResumeImage,
        isActive: false,
        //   colorOptions: [
        //     { color: "red", isActive: false },
        //     { color: "green", isActive: false },
        //     { color: "blue", isActive: true },
        //     { color: "purple", isActive: false },
        //   ],
        },
    ]);

  useEffect(() => {
        setLayoutSelections((prevSelections) =>
        prevSelections.map((selection, index) => ({
            ...selection,
            isActive: index === activeLayoutIndex,
        }))
        );
    }, [activeLayoutIndex]);

  useEffect(() => {
        setLayoutSelections((prevSelections) =>
            prevSelections.map((selection, index) => {
                if (index === activeLayoutIndex && selection.colorOptions) {
                    selection.colorOptions = selection.colorOptions.map(
                        (colorOption, colorIndex) => ({
                            ...colorOption,
                            isActive: colorIndex === activeColorIndex,
                        })
                    );
                }
                return selection;
            })
        );
    }, [activeLayoutIndex, activeColorIndex]);

  return (
        <div className="layout-selector">
        {layoutSelections.map(
            ({ templateName, isActive, templateImg, colorOptions }, index) => (
            <ResumeLayoutSelection
                index={index}
                templateName={templateName}
                isActive={isActive}
                templateImg={templateImg}
                onSelect={handleLayoutSelection}
                onColorSelect={handleColorSelection}
                colorOptions={
                colorOptions
                    ? (colorOptions as [
                        ColorOption,
                        ColorOption,
                        ColorOption,
                        ColorOption
                    ])
                    : undefined
                }
            />
            )
        )}
        </div>
    );
};

export default LayoutDesignSelector;
