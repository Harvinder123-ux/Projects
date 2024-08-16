import React, { useRef, useState, useEffect } from "react";
import visible from "/visibility.png";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

// ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

import "react-toastify/dist/ReactToastify.css";

const Manger = () => {
  const ref = useRef();
  const passRef = useRef();
  const [form, setform] = useState({
    site: "",
    username: "",
    password: "",
  });

  const [passwordArray, setpasswordArray] = useState([]);

  useEffect(() => {
    //in this we are saying if we have password then loac it
    let passwords = localStorage.getItem("password");
    if (passwords) {
      setpasswordArray(JSON.parse(passwords));
    }
  }, []);

  //as of now this function we are using for showing toggling the icon as well
  const showPass = () => {
    // alert("Show the pass");
    // ref.current.src = "visibility-off.png";
    // return ref.current.src.includes("visibility-off.png") ? "visibility.png" : "visibility-off.png";

    if (ref.current.src.includes("visibility.png")) {
      ref.current.src = "visibility-off.png";
      passRef.current.type = "text";
    } else {
      ref.current.src = "visibility.png";
      passRef.current.type = "password";
    }
  };

  //This function we are going to used for save the password
  const savePassword = () => {
    if (
      form.site.length > 3 &&
      form.password.length > 5 &&
      form.username.length > 3
    ) {
      console.log(form);
      //here we are updating the state when we get the new pass
      setpasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
      //here we are saving the new password in local storage which is updated
      localStorage.setItem(
        "password",
        JSON.stringify([...passwordArray, { ...form, id: uuidv4() }])
      );
      console.log([...passwordArray, form]);

      toast("🦄 Password Saved!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        // transition: Bounce,
      });
    } else {
       toast("🦄 Password Not Saved!")
    }
  };
  //This function we are going to used for delete the password
  const deletePassword = (id) => {
    console.log("Deleting the password with id", id);

    let c = confirm("Do You Really Want to Delete This Data");
    if (c) {
      setpasswordArray(passwordArray.filter((item) => item.id !== id));
      //here we are saving the new password in local storage which is updated
      localStorage.setItem(
        "password",
        JSON.stringify(passwordArray.filter((item) => item.id !== id))
      );
      console.log([...passwordArray, form]);

      toast("🦄 Password Deleted!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        // transition: Bounce,
      });
    }
  };

  //edit the passwords
  const editPassword = (id) => {
    console.log("Editing the password with id", id);
    //so it returing the array so on id has only element so im gonna select the first item of an array
    setform(passwordArray.filter((item) => item.id === id)[0]);
    setpasswordArray(passwordArray.filter((item) => item.id !== id));
  };

  //This Function we are using for handling the change of inputs
  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  //This Function is for copying the text
  const copyFunction = (text) => {
    navigator.clipboard.writeText(text);
    let newData = text;
    // alert("Your Text Copied to The Clipboard");
    toast("🦄 Copied To Clipboard!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      // transition: Bounce,
    });

    console.log(newData);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition="Bounce"
      />
      {/* Same as */}
      <ToastContainer />
      {/* <div className="absolute inset-0 -z-10 w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> */}

      <div className="md:myContainer md:p-0 min-h-[80vh]">
        <h1 className="font-bold text-4xl text-center">
          {" "}
          <span className="text-sky-400 font-bold">&lt;</span>
          <span className="text-sky-400 ">Pass</span>
          <span className="text-white">Pro</span>
          <span className="text-sky-400 font-bold">/&gt; </span>
        </h1>
        <p className="text-sky-400 text-center hover:text-white hover:font-bold cursor-pointer">
          Your Own Password Manager
        </p>
        <div className="text-white flex flex-col  p-4 gap-5 justify-center ">
          <input
            onChange={handleChange}
            className="rounded-lg border-2 border-sky-500 w-full p-3 text-black"
            type="text"
            name="site"
            id="site"
            placeholder="Enter Website URL"
            value={form.site}
          />
          <div className="flex flex-col md:flex-row items-center gap-5 md:justify-between">
            <input
              onChange={handleChange}
              className="rounded-lg border-2 border-sky-500 w-full p-3 text-black"
              type="text"
              name="username"
              id="user"
              placeholder="Enter Username"
              value={form.username}
            />
            <div className="relative w-full md:w-1/3">
              <input
                ref={passRef}
                onChange={handleChange}
                className="rounded-lg border-2 border-sky-500 w-full p-3 text-black"
                type="password"
                name="password"
                id="pass"
                placeholder="Enter Password"
                value={form.password}
              />
              <span className="absolute right-3  top-3 text-black">
                <img
                  ref={ref}
                  className="w-7 h-full invert cursor-pointer"
                  onClick={showPass}
                  src={visible}
                  alt=""
                />
              </span>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center"> */}
        {/* <button className="text-center text-white text-xl font-bold bg-sky-600 rounded-lg p-3">Add Password</button> */}
        <button
          // disabled={Object.values(form).some((value) => value === "")}
          onClick={savePassword}
          className="text-black w-fit flex bg-sky-400 hover:bg-sky-100 border-1 hover:border-sky-300  items-center rounded-full gap-2  px-6 py-2 mx-auto "
        >
          <lord-icon
            src="https://cdn.lordicon.com/jgnvfzqg.json"
            trigger="hover"
            style={{ width: "30px", height: "30px" }}
          ></lord-icon>
          Save
        </button>

        <div className="passwords">
          <h1 className="passHeading text-center text-3xl text-sky-500 hover:text-white my-5">
            Your Passwords
          </h1>
          {passwordArray.length === 0 && (
            <div className="text-white text-center my-5">
              No PassWords To Show
            </div>
          )}
          {passwordArray.length !== 0 && (
            <div>
              <h1 className="passHeading text-center text-sky-500 hover:text-white my-5">
                Here are Your Passwords
              </h1>
            </div>
          )}

          <table className="table-auto w-full text-white overflow-hidden rounded-lg">
            <thead className="bg-sky-300  text-black my-2 mb-2 p-2 text-xl">
              <tr className="">
                <th className="py-2">Site</th>
                <th className="py-2">Username</th>
                <th className="py-2">Password</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-[#3e13ff1f] ">
              {passwordArray.map((item, key) => {
                return (
                  <tr key={key} className="p-5 ">
                    {/* 
                    Removed 'flex' from <tr> to ensure that <td> aligns with <th>. 
                    Keeping 'p-5' here for padding between rows.
                  */}
                    <td className="font-bold hover:text-sky-400 p-1 py-2">
                      <div className="flex justify-center gap-2 items-center">
                        {/* 
                        'flex' applied inside <div> to manage internal content layout 
                        (link and icon alignment). 
                      */}
                        <a
                          href={item.site}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.site}
                        </a>
                        <div onClick={() => copyFunction(item.site)}>
                          <img
                            className="w-5 cursor-pointer"
                            src="/copy.png"
                            alt="Copy Icon"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="font-bold hover:text-sky-400 p-1 py-2 ">
                      <div className="flex justify-center gap-2 items-center">
                        {item.username}
                        <div onClick={() => copyFunction(item.username)}>
                          <img
                            className="w-5 cursor-pointer"
                            src="/copy.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </td>

                    <td className=" font-bold hover:text-sky-400 p-1 py-2 ">
                      <div className="flex justify-center gap-2 items-center">
                        {item.password}
                        <div onClick={() => copyFunction(item.password)}>
                          {" "}
                          <img
                            className="w-5 cursor-pointer"
                            src="/copy.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </td>
                    <td className=" font-bold hover:text-sky-400 p-1 py-2">
                      <div className="flex justify-center gap-2">
                        {" "}
                        <span className="cursor-pointer">
                          <img
                            className="w-5"
                            onClick={() => editPassword(item.id)}
                            src="/edit.png"
                            alt=""
                          />
                        </span>
                        <span className="cursor-pointer">
                          <img
                            onClick={() => deletePassword(item.id)}
                            className="w-5"
                            src="/delete.png"
                            alt=""
                          />
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Manger;
