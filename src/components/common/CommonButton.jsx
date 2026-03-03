

const CommonButton = ({label, styleLabel, styleButton, styleContainer, onClick, type="button"}) => {
  return (
    <div className={`${styleContainer}`}>
     <button onClick={onClick} type={type} className={`${styleButton}`}><p className={`${styleLabel}`}>{label}</p></button>
     </div>
  )
}

export default CommonButton