import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import "../styles/Resume/resume1.css";
import Resume1 from "./Resumes/resume1";
import Resume2 from "./Resumes/resume2";
import Resume3 from "./Resumes/resume3";
import Resume4 from "./Resumes/resume4";

const PDFPreviewLayout = () => {
  const { selectedTemplateIdx } = useSelector(
    (state: RootState) => state.designEditor
  );

  const resumes = [
    <Resume1 />,
    <Resume2 />,
    <Resume3 />,
    <Resume4 />
  ]

  return (
    <div className="layout-section">
      <div className="pdf-preview">
        {resumes[selectedTemplateIdx]}
      </div>
    </div>
  );
};

export default PDFPreviewLayout;
