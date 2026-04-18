import { useState } from "react";
import { predictCollege } from "../services/api";
import { FaUniversity, FaUserGraduate, FaList } from "react-icons/fa";
import { MdOutlineNumbers } from "react-icons/md";
import ResultCard from "./ResultCard";
import { getCategory } from "../services/getCategory";
import { getGender } from "../services/getGender";


export default function Predictor(){

const [Rank,setRank] = useState("")
const [Gender,setGender] = useState("")
const [ExamName,setExamName] = useState("")
const [Category,setCategory] = useState("")
const [Result,setResult] = useState(null)
const [loading,setLoading] = useState(false)
const [category,setcategory] = useState([])
const [gender,setgender] = useState([])


const handleSubmit = async(e)=>{e.preventDefault()

    if (ExamName.trim() === "") {
      alert("Enter Exam Name");
      return;
    }
        if (Category.trim() === "") {
      alert("Enter Category");
      return;
    }
        if (Gender.trim() === "") {
      alert("Enter Gender");
      return;
    }
        if (Rank.trim() === "") {
      alert("Enter Rank");
      return;
    }

    setLoading(true)
    setResult(null)

    try{
        const res = await predictCollege(Rank,Gender,Category,ExamName)
        setResult(res.data)
    }catch{
        alert("No college found")
    }

    setLoading(false)
}

const FetchGender = async(ExamName)=>{
    setgender([])
    try{
        const gen = await getGender(ExamName)
        setgender(gen.data)
    }catch{
       alert("Please Try Again")
    }
}

const FetchCategory = async(ExamName)=>{
    setcategory([])
    try{
        const gen = await getCategory(ExamName)
        setcategory(gen.data)

    }catch{ 
        alert("Please Try Again")
    }
}

return(

<div className="relative w-full max-w-lg">

{/* FORM CARD */}
<div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 p-10">

<div className="flex items-center gap-3 mb-8">

<div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-3 rounded-xl text-white">
<FaUniversity size={22}/>
</div>

<h2 className="text-2xl font-bold text-gray-800">
College Predictor
</h2>

</div>

<form onSubmit={handleSubmit} className="space-y-5">

{/* Rank Input */}
<div className="relative">

<MdOutlineNumbers
className="absolute left-3 top-3 text-indigo-500"
/>

<input
type="number"
placeholder="Enter your rank"
value={Rank}
onChange={(e)=>setRank(e.target.value)}
className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
/>

</div>

{/* Exam */}
<div className="relative">

<FaUniversity
className="absolute left-3 top-3 text-indigo-500"
/>

<select
value={ExamName}

onChange={(e)=>{
    setExamName(e.target.value);
    setCategory("");
    setGender("");
    FetchCategory(e.target.value);
    FetchGender(e.target.value)

    }}
className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500"
>

<option value="" disabled>Select Exam</option>
<option>TS - EAPCET</option>
<option>AP - EAPCET</option>
<option>JEE - MAINS</option>


</select>

</div>


{/* Gender */}
<div className="relative">

<FaUserGraduate
className="absolute left-3 top-3 text-indigo-500"
/>

<select
value={Gender}
onChange={(e)=>setGender(e.target.value)}
className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500"
>

<option value=""  >Select Gender</option>
{gender.map((gen) => (
    <option key={gen} value={gen}>
        {gen}
    </option>
    ))}

</select>

</div>

{/* Category */}
<div className="relative">

<FaList
className="absolute left-3 top-3 text-indigo-500"
/>

<select
value={Category}
onChange={(e)=>setCategory(e.target.value)}
className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500"
>

<option value=""  >Select Category</option>
    {category.map((cat) => (
    <option key={cat} value={cat}>
        {cat}
    </option>
    ))}

</select>

</div>



{/* BUTTON */}
<button
disabled={loading}
className="w-full mt-4 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-[1.03] transition flex justify-center items-center gap-2 disabled:opacity-60"
>

{loading ? (
<>
<div className="spinner"></div>
Predicting...
</>
) : (
"Predict College"
)}

</button>

</form>

</div>

{/* RESULT */}
{Result && <ResultCard data={Result}/>}

</div>

)

}
