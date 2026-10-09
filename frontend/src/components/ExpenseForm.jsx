import React from 'react'
import { useState } from 'react'
import axios from "axios"
function ExpenseForm({onClose, onAddExpense, editingExpense, setExpenses}) {
    const [title, setTitle] = useState(editingExpense?.title || '');
    const [amount, setAmount] = useState( editingExpense?.amount || "");
    const [category, setCategory] = useState(editingExpense?.category || "");
    const [date, setDate] = useState( editingExpense?.date ? editingExpense.date.split("T")[0] : "");
    const [description, setDescription] = useState(editingExpense?.description || "");


    // handleSubmit 
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const userId = localStorage.getItem("userId");
             const expenseData ={
                title,
                amount,
                category,
                date,
                description,
                userId
             };
             if(editingExpense){
                const response = await axios.put(`http://localhost:3000/api/expense/${editingExpense._id}`, expenseData);
                console.log("updated:", response.data);
                setExpenses((prev)=> prev.map((expense)=> expense._id === editingExpense._id ? response.data : expense));
             }else{
                const response = await axios.post("http://localhost:3000/api/expense/add", expenseData);
                console.log("added : ", response.data);
                onAddExpense(response.data.data);
             }
             onClose();

        }catch(err){
            console.log("error : ", err);
        }

    }
  return (
    <div className='fixed inset-0 bg-black/40 flex justify-center items-center'>
        <div className='bg-white w-full w-max-lg rounded-xl p-6'>
            {/*header */}
            <div className='flex justify-between mb-6'>
                <h1 className='text-2xl font-bold text-slate-800'> add Expense </h1>
                <button className='text-2xl text-gray-500 font-semibold'
                 onClick={onClose}> X </button>
            </div>

            {/*Form */}
            <form onSubmit={handleSubmit} className=' space-y-4'>
                <div>
                    <label className='block font-medium mb-1'> Title </label>
                    <input
                    value={title}
                     onChange={(e)=>setTitle(e.target.value)} 
                    className='border w-full border-gray-400 px-4 py-3 outline-none focus:border-blue-500'
                     type="text" placeholder='e.g Lunce' required />
                </div>

                {/*amount */}
                <div>
                    <label  className='block font-medium mb-1' > Amonunt </label>
                    <input  
                        value={amount}
                        onChange={(e)=>setAmount(e.target.value)}
                        className='border w-full border-gray-400 px-4 py-3 outline-none focus:border-blue-500' 
                        type="Number" required/>
                </div>
                {/*category */}
                <div>
                    <label  className='block font-medium mb-1'>  category </label>
                    <select 
                         value={category}
                         onChange={(e)=>setCategory(e.target.value)}
                         className='border w-full border-gray-400 px-4 py-3 outline-none focus:border-blue-500'>
                        <option value=""> select category </option> 
                        <option value= "Food">Food</option>
                        <option value= "Transport">Transport</option>
                        <option value= "Shopping">Shopping</option>
                        <option value= 'Bills'> Bills </option>
                        <option value= "Entertainment"> Entertain </option>
                        <option value="others"> others </option>
                     </select>
                </div>
                {/*Date */}
                <div>
                    <label  className='block font-medium mb-1'>  Date </label>
                    <input  
                        value={date}
                        onChange={(e)=>setDate(e.target.value)}
                        className='border w-full border-gray-400 px-4 py-3 outline-none focus:border-blue-500' 
                        type="date" required/>
                </div>
                {/*Description */}
                <div>
                    <label  className='block font-medium mb-1' > Description </label>
                    <textarea 
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                      className='border w-full border-gray-400 px-4 py-3 outline-none focus:border-blue-500' 
                      placeholder='optional description' rows= "3" ></textarea>
                </div>
                {/*Button */}
                <div className='flex justify-end gap-3 pt-2'>
                    <button 
                            onClick={onClose}
                            className='border border-gray-300 rounded-lg text-xl hover:bg-gray-100 px-5 py-3 ' type='button'>
                    cancel
                    </button>
                <button className='border px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white' type='submit'> add Expense </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ExpenseForm