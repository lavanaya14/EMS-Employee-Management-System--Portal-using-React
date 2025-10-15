import React, {useState} from "react";


const Login = ({handleLogin}) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
   handleLogin(email, password)
    setemail("")
    setpassword("")
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 rounded-xl p-20">
        <form
          onSubmit={(e) => {
            submitHandler(e)
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
          value={email}
            onChange={(e) => {
              setemail(e.target.value)
            }}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
          />
          <input
          value={password}
          onChange={(e) => {
            setpassword(e.target.value)
          }}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full mt-3 placeholder:text-gray-400"
            type="password"
            placeholder="Enter password"
          />
          <button className="mt-5 text-white border-none outline-none border-2 bg-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
