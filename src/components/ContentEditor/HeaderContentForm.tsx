import ContentEditor from "./UtilComponents/ContentEditor"
import ViewIcon from "../../assets/icons/view.png"
import HideIcon from "../../assets/icons/hide.png"
import IconBtn from "./UtilComponents/IconBtn"
import SwitchBtn from "./UtilComponents/SwitchBtn"
import { useSelector } from "react-redux"
import type { RootState } from "../../store/store"

const HeaderContentForm = () => {
  const { location, contactInfos, showFullUrls } = useSelector((state: RootState) => state.contentEditor.header);
  return (
    <ContentEditor title="Resume Header" isEditable={false}>
      <div className="">
        <div className="header-label-holder">
          <label htmlFor="location" className="label">{location.name}</label>
          <IconBtn label="Hide Location" btnIcon={location.isHidden ? HideIcon: ViewIcon} handleClick={() => {}} />
        </div>
        <input type="text" id="location" className="highlight-input" placeholder="Location" defaultValue={location.value}/>
        <div className="contact-info-settings">
          {
            contactInfos.map(({ name, isHidden})=> <IconBtn label={`Hide ${name}`} btnIcon={isHidden ? HideIcon: ViewIcon} handleClick={() => {}} />)
          }
        </div>
      </div>
      <SwitchBtn label="Show Full URLs" isChecked={showFullUrls} handleClick={()=>{}} />
    </ContentEditor>
  )
}

export default HeaderContentForm