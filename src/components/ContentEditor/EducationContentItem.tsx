import React from 'react'
import ContentItem from './ContentItem'

const EducationContentItem = () => {

    return (
        <ContentItem title="Nnamdi Azikiwe University">
            <label htmlFor="extra-info">Electronic and Computer Engineering</label>
            <textarea name="extra-info" id="extra-info" className="highlight-input" placeholder="Ex. Relevant course work: Algorthims"></textarea>
        </ContentItem>
    )
}

export default EducationContentItem
