import React from 'react'

interface DesignEditorSectionProps {
    title: string;
    hasBottomBorder?: boolean;
    children: React.ReactNode;
}

const DesignEditorForm = ({title, children, hasBottomBorder}: DesignEditorSectionProps) => {
  return (
    <div className={`design-editor-form ${hasBottomBorder ? "bottom-border" : ""}`}>
        <h3>{title}</h3>
        {children}
      </div>
  )
}

export default DesignEditorForm