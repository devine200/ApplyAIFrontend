import "../../../styles/SwitchBtn.css"

interface SwitchBtnProps {
    label: string;
    handleClick: () => void;
}
const SwitchBtn = ({label, handleClick}: SwitchBtnProps) => {
  return (
    <div className="switch-btn">
      <label className="toggle" aria-label="Airplane mode" onClick={handleClick}>
        <input type="checkbox" role="switch"/>
        <span className="track"></span>
        <span className="thumb"></span>
      </label>
      <span className="label">{label}</span>
    </div>
  );
};

export default SwitchBtn;
