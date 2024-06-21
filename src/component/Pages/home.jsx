// import { useEffect, useState } from "react";
// import { Pagination } from "flowbite-react";

// function Home() {
//   const [newTitle, setNewTitle] = useState("");
//   const [newDescription, setnewDescription] = useState("");
//   const [alltodos, setalltodos] = useState([]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [currentTodoIndex, setCurrentTodoIndex] = useState(null);

//   const [totalPages, setTotalPages] = useState(0);
//   const [perPage, setPerPage] = useState(5);
//   const [currentPage, setCurrentPage] = useState(1);

//   const handleSaveEdit = () => {
//     let updatedTodos = [...alltodos];
//     updatedTodos[currentTodoIndex] = {
//       ...updatedTodos[currentTodoIndex],
//       title: newTitle,
//       Discription: newDescription,
//     };

//     setalltodos(updatedTodos);
//     localStorage.setItem("todoList", JSON.stringify(updatedTodos));
//     setNewTitle("");
//     setnewDescription("");
//     setIsEditing(false);
//     setCurrentTodoIndex(null);
//   };

//   const onPageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const handleaddform = () => {
//     if (isEditing) {
//       handleSaveEdit();
//     } else {
//       let addData = {
//         id: alltodos.length + 1,
//         title: newTitle,
//         Discription: newDescription,
//       };
//       let updatewitharray = [...alltodos, addData];
//       setalltodos(updatewitharray);
//       setTotalPages(Math.ceil(updatewitharray.length / perPage));
//       localStorage.setItem("todoList", JSON.stringify(updatewitharray));
//       setNewTitle("");
//       setnewDescription("");
//     }
//   };

//   const handledelete = (index) => {
//     let deletetodo = [...alltodos];
//     deletetodo.splice(index, 1);
//     setalltodos(deletetodo);
//     localStorage.setItem("todoList", JSON.stringify(deletetodo));
//     setTotalPages(Math.ceil(deletetodo.length / perPage));
//   };

//   const handleEdit = (index) => {
//     setCurrentTodoIndex(index);
//     setNewTitle(alltodos[index].title);
//     setnewDescription(alltodos[index].Discription);
//     setIsEditing(true);
//   };

//   useEffect(() => {
//     let savedTodos = JSON.parse(localStorage.getItem("todoList"));
//     if (savedTodos) {
//       setalltodos(savedTodos);
//       setTotalPages(Math.ceil(savedTodos.length / perPage));
//     }
//   }, [perPage]);

//   const handleReset = () => {
//     localStorage.clear();
//     setalltodos([]);
//     setTotalPages(0);
//   };

//   // Get current todos
//   const indexOfLastTodo = currentPage * perPage;
//   const indexOfFirstTodo = indexOfLastTodo - perPage;
//   const currentTodos = alltodos.slice(indexOfFirstTodo, indexOfLastTodo);

//   return (
//     <div className="bg-gray-100 overflow-y-auto  flex flex-col items-center py-10">
//       <h1 className="text-4xl text-gray-800 font-bold mb-10">My Todo List</h1>
//       <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 mb-10">
//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2">Title</label>
//           <input
//             type="text"
//             value={newTitle}
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//             placeholder="Enter Title"
//             onChange={(e) => setNewTitle(e.target.value)}
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2">
//             Description
//           </label>
//           <input
//             type="text"
//             value={newDescription}
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//             placeholder="Enter Description"
//             onChange={(e) => setnewDescription(e.target.value)}
//           />
//         </div>
//         <button
//           className="w-full py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           onClick={handleaddform}
//         >
//           {isEditing ? "Save" : "Add"}
//         </button>
//       </div>
//       <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-6">
//         <table className="min-w-full table-auto">
//           <thead>
//             <tr>
//               <th className="px-4 py-2 text-left text-gray-600">ID</th>
//               <th className="px-4 py-2 text-left text-gray-600">Title</th>
//               <th className="px-4 py-2 text-left text-gray-600">Description</th>
//               <th className="px-4 py-2 text-left text-gray-600">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentTodos.map((todo, index) => (
//               <tr key={index} className="border-t">
//                 <td className="px-4 py-2">{todo.id}</td>
//                 <td className="px-4 py-2">{todo.title}</td>
//                 <td className="px-4 py-2">{todo.Discription}</td>
//                 <td className="px-4 py-2">
//                   <button
//                     className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
//                     onClick={() => handledelete(indexOfFirstTodo + index)}
//                   >
//                     Delete
//                   </button>
//                   <button
//                     className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2"
//                     onClick={() => handleEdit(indexOfFirstTodo + index)}
//                   >
//                     Edit
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <button
//           className="px-3 py-1 bg-gray-500 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 mt-4"
//           onClick={handleReset}
//         >
//           Reset
//         </button>
//         <Pagination
//           currentPage={currentPage}
//           totalPages={totalPages}
//           onPageChange={onPageChange}
//           showIcons
//           className="mt-4"
//         />
//       </div>
//     </div>
//   );
// }

// export default Home;

// import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../UserReducer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const Users = useSelector((state) => state.users);
  console.log("userdata is", Users);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }));
    console.log("delete user");
    toast.error("user is deleted", {
      autoClose: 1000,
      position: "top-center",
    });
  };

  return (
    <>
      <ToastContainer />
      <div className="bg-gray-400 h-12 w-full flex justify-center py-2 ">
        <h3 className="text-gray-900 font-bold text-[20px]">
          Redux Toolkit CRUD APP
        </h3>
      </div>
      <div className="container">
        <div className="overflow-x-auto">
          <div className="flex justify-start">
            <Link to={"/adduser"}>
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md px-6 py-2 mb-4">
                Create +
              </button>
            </Link>
          </div>

          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 text-left text-gray-600">ID</th>
                <th className="px-4 py-2 text-left text-gray-600">Name</th>
                <th className="px-4 py-2 text-left text-gray-600">Email</th>
                <th className="px-4 py-2 text-center text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody>
              {Users.map((user) => (
                <tr key={user.id} className="border-b">
                  <td className="px-4 py-2 text-left">{user.id}</td>
                  <td className="px-4 py-2 text-left">{user.name}</td>
                  <td className="px-4 py-2 text-left">{user.email}</td>
                  <Link
                    to={`/edit/${user.id}`}
                    className=" text-black border mx-4 my-2 border-gray-600  px-4 py-2 rounded hover:bg-blue-600 hover:text-white"
                  >
                    edit
                  </Link>

                  <button
                    className="mx-4 text-black border border-red-400 my-2 px-4 py-1 rounded hover:bg-red-600 hover:text-white"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Home;
