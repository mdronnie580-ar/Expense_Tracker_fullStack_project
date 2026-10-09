import React, { useState, useEffect } from "react";
import ExpenseForm from "../components/ExpenseForm";
import axios from "axios";
function Expanse() {
    const [showForm, setShowForm] = useState(false);
    const [editingExpense, setEditingExpense] = useState(null);
    const [expenses, setExpenses] = useState([]);

    useEffect(()=>{
      const getExpense = async ()=>{
        try{
        const userId = localStorage.getItem('userId');
        if(!userId || userId === "undifine"){
          console.error("user id is missing .please login again");
          return ;
        }
        const response = await axios.get(`http://localhost:3000/api/expense?userId=${userId}`);
        setExpenses(response.data);
      }catch(err){
          console.log("error : ", err);
      }
      };
      getExpense();
    },[])
    
    const addExpense = (expense)=>{
          setExpenses((prev)=>[...prev, expense]);
    }
    // delete items
    const expenseDelete = async (id)=>{
        try{
            await axios.delete(`http://localhost:3000/api/expense/${id}`);
            setExpenses((prev)=>{
              return prev.filter((expense)=> expense._id !== id);
            })
        }catch(err){
          console.log(err);
        }
    }
    // edit and update data
      const editExpense =(expense) =>{
          setEditingExpense(expense);
          setShowForm(true);
      }
  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-800">
          Expenses
        </h1>

        <p className="text-gray-500 mt-1">
          Track and manage your expenses easily.
        </p>
      </div>


      {/* Search & Actions */}
      <div className="bg-white p-4 rounded-xl shadow-sm mb-6">

        <div className="flex flex-col md:flex-row gap-4">

          {/* Search */}
          <input
            type="text"
            placeholder="Search expenses..."
            className="flex-1 border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
          />

          {/* Category */}
          <select
            className="border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
          >
            <option>All Categories</option>
            <option>Food</option>
            <option>Transport</option>
            <option>Shopping</option>
            <option>Bills</option>
            <option>Entertainment</option>
          </select>

          {/* Type */}
          <select
            className="border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
          >
            <option>All Types</option>
            <option>Expense</option>
            <option>Income</option>
          </select>

          {/* Add Expense */}
          <button
            onClick={()=>setShowForm(true)}
            className="bg-blue-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-blue-700"
          >
            + Add Expense
          </button>

        </div>

      </div>


      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">


        {/* Expense List */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm">

          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-slate-800">
              Expense List
            </h2>
          </div>


          {/* Table */}
          <div className="overflow-x-auto">

            <table className="w-full"> 
                 <thead>
                   <tr className="text-left text-gray-500 border-b">
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Title</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Amount</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead> 
        

              <tbody>
                {
                  expenses.length == 0? <tr><td colSpan="5" className="text-gray-600 text-xl py-2 text-center font-semibold" >list is empty</td></tr> :
                  expenses.map((expense)=>(
                    <tr key={expense._id}
                    className="border-b hover:bg-gray-50 "
                    >
                      <td className="px-6 py-4 "> <span className=" px-4 py-1 bg-gray-100 rounded-sm text-gray-700">{expense.date.split("T")[0]}</span> </td>
                      <td className="px-6 py-4 "> <span className="bg-blue-100 px-6 py-1 rounded-sm text-blue-800"> {expense.title} </span> </td>
                      <td className="px-6 py-4"><span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-sm"> {expense.category} </span> </td>
                      <td className="px-6 py-4"> <span className="bg-purple-100 px-3 py-1 rounded-sm text-purple-800">-${expense.amount} </span></td>
                      <td className="px-6 py-4"> <span className="bg-blue-500 px-4 py-2 rounded-sm text-white hover:bg-blue-700" onClick={()=> editExpense(expense) }>Edit</span> </td>
                      <td> <span className="bg-red-600 px-3 py-2 rounded-sm text-gray-800 font-semibold hover:bg-red-700 hover:text-gray-100"
                      onClick={()=>expenseDelete(expense._id)}>Delete</span> </td>
                   </tr>
                  
                  ))
                }
              </tbody>

            </table>

          </div>

        </div>


        {/* Expense Summary */}
        <div className="bg-white rounded-xl shadow-sm p-6">

          <h2 className="text-xl font-bold text-slate-800 mb-6">
            Expense Summary
          </h2>


          {/* Total */}
          <div className="bg-blue-50 rounded-xl p-5 mb-6">

            <p className="text-gray-500">
              Total Expenses
            </p>

            <h3 className="text-3xl font-bold text-slate-800 mt-2">
              $1,250.00
            </h3>

          </div>


          {/* Categories */}
          <div className="space-y-4">

            <div className="flex justify-between">
              <span>🍔 Food</span>
              <span className="font-medium">35%</span>
            </div>

            <div className="flex justify-between">
              <span>🚌 Transport</span>
              <span className="font-medium">20%</span>
            </div>

            <div className="flex justify-between">
              <span>🛒 Shopping</span>
              <span className="font-medium">15%</span>
            </div>

            <div className="flex justify-between">
              <span>💡 Bills</span>
              <span className="font-medium">12%</span>
            </div>

            <div className="flex justify-between">
              <span>🎮 Entertainment</span>
              <span className="font-medium">10%</span>
            </div>

          </div>

        </div>

      </div>
      {
        showForm && <ExpenseForm
    onClose={() => {
        setShowForm(false);
        setEditingExpense(null);
    }}
    onAddExpense={addExpense}
    editingExpense={editingExpense}
    setExpenses={setExpenses}
/>
      }

    </div>
  );
}
export default Expanse;
