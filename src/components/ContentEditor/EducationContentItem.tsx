import React from 'react'
import ContentItem from './UtilComponents/ContentItem'
import type { RootState } from '../../store/store';
import { useSelector } from 'react-redux';

interface EducationContentItemProps {
    school: string,
    course: string,
    relevantCourses: string,
    elemID: string;
}

const EducationContentItem = ({school, course, relevantCourses, elemID}: EducationContentItemProps) => {
    const {activeSelection} = useSelector((state: RootState) => state.resumeEditor)
    return (
        <div
            id={elemID}
            className={elemID === activeSelection ? "edit-selected" : ""}
        >
            <ContentItem title={school}>
                <div className="education-content-item-body">
                    <label htmlFor="extra-info">{course}</label>
                <textarea name="extra-info" id="extra-info" className="highlight-input" placeholder="Ex. Relevant course work: Algorthims" defaultValue={relevantCourses}></textarea>
            </div>
        </ContentItem>
      </div>
    )
}

export default EducationContentItem
