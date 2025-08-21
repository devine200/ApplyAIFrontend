import ContentEditor from "./ContentEditor"
import ViewIcon from "../../assets/icons/view.png"
import IconBtn from "./IconBtn"
import SwitchBtn from "./SwitchBtn"

const HeaderContentForm = () => {
  return (
    <ContentEditor title="Resume Header" isEditable={false}>
      <div className="">
        <div className="header-label-holder">
          <label htmlFor="location" className="label">Location</label>
          <IconBtn label="Hide Location" btnIcon={ViewIcon} handleClick={() => {}} />
        </div>
        <input type="text" id="location" className="highlight-input" placeholder="Location" />
        <div className="contact-info-settings">
          <IconBtn label="Hide Phone Number" btnIcon={ViewIcon} handleClick={() => {}} />
          <IconBtn label="Hide LinkedIn" btnIcon={ViewIcon} handleClick={() => {}} />
          <IconBtn label="Hide GitHub" btnIcon={ViewIcon} handleClick={() => {}} />
        </div>
      </div>
      <SwitchBtn label="Show Full URLs" handleClick={()=>{}} />
    </ContentEditor>
  )
}

export default HeaderContentForm