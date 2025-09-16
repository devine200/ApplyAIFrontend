import ContentEditor from "./UtilComponents/ContentEditor";
import ViewIcon from "../../assets/icons/view.png";
import HideIcon from "../../assets/icons/hide.png";
import IconBtn from "./UtilComponents/IconBtn";
import SwitchBtn from "./UtilComponents/SwitchBtn";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { v4 as uuidv4 } from "uuid";
import {
  toggleLocationVisibility,
  toggleContactVisibility,
  updateLocation,
  toggleShowFullUrls,
} from "../../store/ContentEditor/contentEditor";

const HeaderContentForm = () => {
  const { location, contactInfos, showFullUrls, elementID } = useSelector(
    (state: RootState) => state.contentEditor.header
  );
  const dispatch = useDispatch();

  return (
    <ContentEditor name={elementID} title="Resume Header" isEditable={false}>
      <div className="">
        <div className="header-label-holder">
          <label htmlFor="location" className="label">
            {location.name}
          </label>
          <IconBtn
            label="Hide Location"
            btnIcon={location.isHidden ? HideIcon : ViewIcon}
            handleClick={() => {
              dispatch(toggleLocationVisibility());
            }}
          />
        </div>
        <input
          type="text"
          id="location"
          className="highlight-input"
          placeholder="Location"
          defaultValue={location.value}
          onChange={(e) => {
            dispatch(updateLocation(e.target.value));
          }}
        />
        <div className="contact-info-settings">
          {contactInfos.map(({ name, isHidden }) => (
            <IconBtn
              label={`Hide ${name}`}
              key={uuidv4()}
              btnIcon={isHidden ? HideIcon : ViewIcon}
              handleClick={() => {
                dispatch(toggleContactVisibility(name));
              }}
            />
          ))}
        </div>
      </div>
      <SwitchBtn
        label="Show Full URLs"
        isChecked={showFullUrls}
        handleClick={() => {
          dispatch(toggleShowFullUrls());
        }}
      />
    </ContentEditor>
  );
};

export default HeaderContentForm;
