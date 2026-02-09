import { useState } from "react";

function RegistrationForm() {
  const [DataFrom, setDataFrom] = useState({
    name:"",
    email:"",
    password:"",
    gender:""
  })

  
  const handlechange=(pra)=>{
    const {name,value}=pra.target;
    // console.log(pra.target);
    
    setDataFrom(
       {
         ...DataFrom,
        [name]:value
       }
    );


  }
  const HandleSubmit =(e)=>{
    e.preventDefault();
    console.log(DataFrom);
    setDataFrom({
    name:"",
    email:"",
    password:"",
    gender:""
  })
  }

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={HandleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Registration Form
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={DataFrom.name}
            onChange={handlechange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={DataFrom.email}
            onChange={handlechange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
           value={DataFrom.password}
           onChange={handlechange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Gender */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-1">Gender</label>
          <select
            name="gender"
         value={DataFrom.gender}
         onChange={handlechange}
            className="w-full px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
        >
          Register
        </button>
      </form>
    </div>

        {/* <div className="min-h-screen py- bg-gray-100">
            <h1 className="text-2xl">Name :{DataFrom.name}</h1>
            <h1 className="text-2xl">Email :{DataFrom.email}</h1>
            <h1 className="text-2xl">Password :{DataFrom.password}</h1>
            <h1 className="text-2xl">Gender :{DataFrom.gender}</h1>
</div> */}
    </>
    
  );
}

export default RegistrationForm;