import HeaderContentForm from "./ContentEditor/HeaderContentForm"

const ContentEditorLayout = () => {
  return (
    <div className="layout-section content-editor-layout">
        <HeaderContentForm />
        <div className="content-editor-children">content</div>
        <div className="content-editor-children">content</div>
        <div className="content-editor-children">content</div>
        <div className="content-editor-children">content</div>
    </div>
  )
}

export default ContentEditorLayout