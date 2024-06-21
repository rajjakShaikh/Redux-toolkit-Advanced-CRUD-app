import React from "react";
// import Rupaylogin from "./svg/Rupaylogin";

function Testingpgae() {
  return (
    <div className="bg-gray-600">
      <div className="mx-5 lg:gap-10  grid  lg:grid-cols-2 sm:grid-cols-1 gap-3 ">
        <div className="bg-green-500 p-4">{/* <Rupaylogin /> */}</div>
        <div className="bg-red-500 p-4">
          <form className="w-full">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Welcome Back To
            </h2>
            <p className="font-thin text-lg mb-4 text-center">
              Rupay Corporate Connect Portal
            </p>
            <div className="mt-5">
              <label className="block font-bold text-gray-700">Domain</label>
              <input
                type="text"
                //   value={domainName}
                //   onChange={(e) => setDomainName(e.target.value)}
                className="mt-1 block w-full p-2 bg-gray-200 rounded"
                required
                placeholder="Enter your domain"
              />
            </div>
            <div className="mt-5">
              <label className="block font-bold text-gray-700">User ID</label>
              <div className="relative flex items-center">
                <svg
                  className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 text-gray-500 pointer-events-none w-7 h-7 text-black-700"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M7 17v1c0 .6.4 1 1 1h8c.6 0 1-.4 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                <input
                  type="text"
                  // value={userId}
                  // onChange={(e) => setUserId(e.target.value)}
                  className="mt-1 block w-full p-2 bg-gray-200 rounded pl-10"
                  required
                  placeholder="Enter your email ID/UserID"
                />
              </div>
            </div>
            <div className="mt-5 mb-4">
              <label className="block font-bold text-gray-700">Password</label>
              <div className="relative flex items-center">
                <svg
                  className="absolute top-1/2 left-2 mt-1 transform -translate-y-1/2 z-10 w-7 h-7 text-gray-500 dark:text-black"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7c0-1.1.9-2 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6c.6 0 1 .4 1 1v3a1 1 0 1 1-2 0v-3c0-.6.4-1 1-1Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  // onChange={handlePwd}
                  className="mt-1 block w-full p-2 bg-gray-200 rounded pl-10"
                  required
                  placeholder="Enter your 12 characters password"
                />
              </div>
            </div>
            <div className="mt-5 text-right">
              <a href="/forget-password" className="underline text-gray-700">
                Forgot Password?
              </a>
            </div>
            <div>
              <button
                type="submit"
                className="w-full mt-5 bg-blue-800 text-white py-2 rounded"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    // <div className="grid gap-3 mx-3 grid-cols-3 lg:grid-cols-4">
    //   <div className="bg-red-500 p-4">1</div>
    //   <div className="bg-blue-500 p-4">2</div>
    //   <div className="bg-yellow-500 p-4">3</div>
    //   <div className="bg-green-500 p-4 col-span-4 lg:col-span-1">4</div>
    // </div>
  );
}

//  <div class="mx-5 grid gap-10 md:grid-cols-3">
//    <div class="col-span-1 bg-green-500 p-4">1</div>
//    <div class="col-span-1 bg-red-500 p-4">2</div>
//    <div class="col-span-2 md:col-span-1 bg-blue-500 p-4">3</div>
//  </div>;

export default Testingpgae;

  // const handleaddform = () => {
  //   const newtodoitem = {
  //     title: newTitle,
  //     Description: newDescription,
  //   };
  //   let UpdateTodoarray = [...alltodos];
  //   UpdateTodoarray.push(newtodoitem);
  //   setalltodos(UpdateTodoarray);
  //   localStorage.setItem(alltodos);
  // };