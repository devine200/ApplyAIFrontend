import "../../../styles/SwitchBtn.css"

interface SwitchBtnProps {
    label: string;
    isChecked?: boolean;
    handleClick: () => void;
}
const SwitchBtn = ({label, handleClick, isChecked}: SwitchBtnProps) => {
  return (
    <div className="switch-btn">
      <label className="toggle" aria-label="Airplane mode">
        <input type="checkbox" role="switch" defaultChecked={isChecked} onChange={handleClick}/>
        <span className="track"></span>
        <span className="thumb"></span>
      </label>
      <span className="label">{label}</span>
    </div>
  );
};

export default SwitchBtn;
