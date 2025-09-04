import React from 'react'
import ContentItem from './UtilComponents/ContentItem'

interface EducationContentItemProps {
    school: string,
    course: string,
    relevantCourses: string,
}

const EducationContentItem = ({school, course, relevantCourses}: EducationContentItemProps) => {
    return (
        <ContentItem title={school}>
            <div className="education-content-item-body">
                <label htmlFor="extra-info">{course}</label>
                <textarea name="extra-info" id="extra-info" className="highlight-input" placeholder="Ex. Relevant course work: Algorthims" defaultValue={relevantCourses}></textarea>
            </div>
        </ContentItem>
    )
}

export default EducationContentItem
