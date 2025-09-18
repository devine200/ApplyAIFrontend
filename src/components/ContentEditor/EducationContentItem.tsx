import React from "react";
import ContentItem from "./UtilComponents/ContentItem";
import type { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import TextEditor from "./TextEditor/TextEditor";
import { updateRelevantCourses } from "../../store/ContentEditor/contentEditor";

interface EducationContentItemProps {
  school: string;
  course: string;
  relevantCourses: string;
  elemID: string;
}

const EducationContentItem = ({
  school,
  course,
  relevantCourses,
  elemID,
}: EducationContentItemProps) => {
  const { activeSelection } = useSelector(
    (state: RootState) => state.resumeEditor
  );
  const dispatch = useDispatch();

  const handleTextChange = (value: string) => {
    const parser = new DOMParser();
    const elem = parser.parseFromString(value, "text/html");
    const body = elem.querySelector("body");
    // let updatedValue = value;
    let listValue = ""
    for(const child of body!.children) {
      console.log(child.textContent)
      if(child.textContent !== ""){
        listValue += `<li>${child.textContent}</li>`;
      }
    }
  
    dispatch(updateRelevantCourses({certId: elemID, value: listValue !== "" ? `<ul>${listValue}</ul>` : listValue}));
  }

  return (
    <div
      id={elemID}
      className={elemID === activeSelection ? "edit-selected" : ""}
    >
      <ContentItem title={school}>
        <div className="education-content-item-body">
          <label htmlFor="extra-info">{course}</label>
          <TextEditor 
            value={relevantCourses}
            hasOptions={false}
            height="80px"
            placeholder="Ex. Relevant course work: Algorthims"
            handleChange={handleTextChange}
          />
        </div>
      </ContentItem>
    </div>
  );
};

export default EducationContentItem;
