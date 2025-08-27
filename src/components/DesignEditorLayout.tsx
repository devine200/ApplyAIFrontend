import React from "react";
import type { EditorTabEnum } from "../types";
import EditorTab from "./EditorTab";
import LayoutDesignSelector from "./DesignEditor/LayoutDesignSelector";
import StyleSelector from "./DesignEditor/StyleSelector";
import DesignEditorForm from "./DesignEditor/DesignEditorSection";
import SkillLayoutSelector from "./DesignEditor/SkillLayoutSelector";

interface ContentEditorLayoutProps {
  activeTab: EditorTabEnum;
  onTabChange: (tab: EditorTabEnum) => void;
}

const DesignEditorLayout = ({
  activeTab,
  onTabChange,
}: ContentEditorLayoutProps) => {
  return (
    <div className="layout-section">
      <EditorTab activeTab={activeTab} onTabChange={onTabChange} />
      <div className="design-editor-section">
        <DesignEditorForm title="Layout & Design" hasBottomBorder={true}>
          <LayoutDesignSelector />
          <StyleSelector
            styleName="Margin Size"
            styleOptions={["Small", "Medium", "Large"]}
            activeIndex={1}
          />
          <StyleSelector
            styleName="Page Size"
            styleOptions={["Small", "Medium", "Large"]}
            activeIndex={1}
          />
        </DesignEditorForm>

        <DesignEditorForm title="Font & Text Formatting" hasBottomBorder={true}>
          <StyleSelector
              styleName="Font Family"
              styleOptions={["Small", "Medium", "Large"]}
              activeIndex={1}
            />
          <StyleSelector
              styleName="Font Size"
              styleOptions={["Small", "Medium", "Large"]}
              activeIndex={1}
            />
          <StyleSelector
              styleName="Line Height"
              styleOptions={["Small", "Medium", "Large"]}
              activeIndex={1}
            />
        </DesignEditorForm>

        <DesignEditorForm title="Content Format">
          <StyleSelector
              styleName="Format Date"
              styleOptions={["Left", "Center", "Right"]}
              activeIndex={0}
            />
          <StyleSelector
              styleName="Bullet Icon"
              styleOptions={["Black", "Gray", "White"]}
              activeIndex={0}
            />
          <SkillLayoutSelector isListed={true}/>
        </DesignEditorForm>
      </div>
    </div>
  );
};

export default DesignEditorLayout;
