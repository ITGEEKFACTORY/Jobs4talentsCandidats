const FormField = ({ label, name, value, onChange, type = 'text', required = true }) => (
  <div>
    {/* <label className="block text-sm font-medium text-gray-700"></label> */}
    <h6 className="font-medium">{label}</h6>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full mt-2 px-3 py-2.5 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
      //required={required}
    />
  </div>
);


export default FormField;


          
