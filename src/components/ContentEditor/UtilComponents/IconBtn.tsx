interface IconBtnProps {
    handleClick: () => void;
    btnIcon: string;
    label: string;
}

const IconBtn = ({handleClick, btnIcon, label}:IconBtnProps) => {
  return (
    <button className="icon-btn view-btn" onClick={handleClick}><img src={btnIcon} alt="view icon" /><span className="label">{label}</span></button>
  )
}

export default IconBtn