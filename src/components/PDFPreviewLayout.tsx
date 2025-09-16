import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import "../styles/Resume/resume1.css";
import Resume1 from "./Resumes/resume1";
import Resume2 from "./Resumes/resume2";
import Resume3 from "./Resumes/resume3";
import Resume4 from "./Resumes/resume4";
import {
  updateActiveSelection,
  updateTab,
} from "../store/ResumeEditor/resumeEditor";
import { EditorTabEnum, type DesignField } from "../types";

const PDFPreviewLayout = () => {
  const { selectedTemplateIdx } = useSelector(
    (state: RootState) => state.designEditor
  );
  const { resumeTemplates } = useSelector(
    (state: RootState) => state.designEditor
  );
  const dispatch = useDispatch();

  const handleEditSection = (to: string) => {
    dispatch(updateTab(EditorTabEnum.CONTENT));
    setTimeout(() => {
      const elem = document.getElementById(to);
      elem?.scrollIntoView({ behavior: "smooth", block: "center" });
      console.log(elem);
      dispatch(updateActiveSelection(to));
      setTimeout(() => {
        dispatch(updateActiveSelection(""));
      }, 2000);
    }, 1000);
  };

  const getSelectedDesignField = (field: DesignField) => {
    const { options, selectedOptionIdx } = field;
    return options[selectedOptionIdx];
  };

  const resumes = [
    <Resume1
      resumeTemplate={resumeTemplates[0]}
      getDesignField={getSelectedDesignField}
      handleEditSection={handleEditSection}
    />,
    <Resume2
      resumeTemplate={resumeTemplates[1]}
      getDesignField={getSelectedDesignField}
      handleEditSection={handleEditSection}
    />,
    <Resume3
      resumeTemplate={resumeTemplates[2]}
      getDesignField={getSelectedDesignField}
      handleEditSection={handleEditSection}
    />,
    <Resume4
      resumeTemplate={resumeTemplates[3]}
      getDesignField={getSelectedDesignField}
      handleEditSection={handleEditSection}
    />,
  ];

  return (
    <div className="layout-section">
      <div className="pdf-preview">{resumes[selectedTemplateIdx]}</div>
    </div>
  );
};

export default PDFPreviewLayout;
