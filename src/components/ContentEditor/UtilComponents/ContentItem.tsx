import React, {useState} from 'react'
import grabIcon from "../../../assets/icons/reorder.png"

interface ContentItemProps {
    title: string;
    children: React.ReactNode;
}

const ContentItem = ({title, children}: ContentItemProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="content-item">
            <div className="content-item-header">
                <div className="heading">
                    <button className="grabbable icon-btn"><img src={grabIcon} alt="grab icon" /></button>
                    <h4>{title}</h4>
                </div>
                <button
                    className={`toggle-form pointer ${isOpen ? "" : "toggle-form-down"}`}
                    onClick={handleToggle}
                    >
                    {">"}
                </button>
            </div>
            <div className={`content-item-body ${isOpen ? "" : "content-hidden"}`}>
                {children}
            </div>
        </div>
    )
}

export default ContentItem
