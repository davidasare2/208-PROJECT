import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="flex flex-1 h-screen">
      <div className="flex flex-col lg:flex-row flex-1">
        <div className="relative w-full lg:w-[999px] h-full">
          <img
            src={require("../src/Assets/project1.jpg")}
            className="absolute inset-0 w-full h-full object-cover lg:relative sm:absolute sm:h-[999px] lg:w-full lg:h-auto"
          />
        </div>
        <div className="flex flex-col w-full lg:w-[300px] items-center justify-center mt-4 lg:mt-0 lg:ml-4">
          <div className=" w-full p-4">
            <input
              className="bg-slate-200 w-full py-3 mb-4 rounded-xl px-3"
              placeholder="Email"
            />
            <input
              className="bg-slate-200 w-full py-3 mb-4 rounded-xl px-3"
              placeholder="Password"
            />
            <div className="text-center mb-4">
              <a href="#" className="text-blue-500">
                Forgot password
              </a>
            </div>
            <div className="flex items-center justify-center">
              <button className="bg-slate-100 w-[200px] sm:w-[270px] h-12 rounded-xl border-2 border-black bg-white">
                <p>Log In</p>
              </button>
            </div>
            <div className="flex-1 mt-5">
              <text className>New Member?</text>
              <button className="text-blue-500  ">
                <p>sign up</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
