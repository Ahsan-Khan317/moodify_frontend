const Inputs = ({type,name,placeholder,form_val,handleChange})=>{
    return(
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={form_val}
            onChange={(e)=>{handleChange(e)}}
            className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 outline-none"
          />
    )
}
export default Inputs