import React from 'react'
import ContentItem from './UtilComponents/ContentItem'

const EducationContentItem = () => {

    return (
        <ContentItem title="Nnamdi Azikiwe University">
            <div className="education-content-item-body">
                <label htmlFor="extra-info">Electronic and Computer Engineering</label>
                <textarea name="extra-info" id="extra-info" className="highlight-input" placeholder="Ex. Relevant course work: Algorthims"></textarea>
            </div>
        </ContentItem>
    )
}

export default EducationContentItem
