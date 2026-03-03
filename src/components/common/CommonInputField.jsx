

const InputField = ({label, type="text", placeholder, name, styleInput, styleContainer, styleLabel, errors, register}) => {
  return (
    <div className={`${styleContainer} `}>
        <label className={`${styleLabel}`}>{label}</label>
        <input type={type} placeholder={placeholder}  {...(register && register(name))} className={styleInput}/>
        {errors[name] && (<p className="text-xs text-red-500">{errors[name].message}</p>)}
    </div>
  )
}

export default InputField