import { FaUniversity } from "react-icons/fa";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";

export default function ResultCard({ data }) {

  const [confetti,setConfetti] = useState(true)

  useEffect(()=>{

    const timer = setTimeout(()=>{
      setConfetti(false)
    },8000)

    return ()=>clearTimeout(timer)

  },[])

  if(!data) return null

  return(

<div className="relative w-full mt-6">

{/* Confetti */}
{confetti && (
<Confetti
width={510}
height={240}
recycle={false}
numberOfPieces={310}
/>
)}

<div className="relative overflow-hidden rounded-3xl shadow-2xl border border-indigo-200 bg-gradient-to-br from-white via-indigo-50 to-blue-100 p-7 animate-resultPop">

{/* Decorative background circle */}
<div className="flex items-center justify-center absolute -top-10 -right-10 w-40 h-40 bg-indigo-200 opacity-30 rounded-full blur-2xl"></div>
<h2 className="text-xl font-bold text-indigo-700 mb-6 flex items-center gap-2">
🎉 Prediction Result
</h2>

<div className="flex gap-5 items-center">

<div className="bg-indigo-500 text-white p-4 rounded-2xl shadow-lg">
<FaUniversity size={28}/>
</div>

<div className="space-y-2">

<p className="text-lg font-semibold text-gray-800">
{data.institute_name}
</p>

<p className="text-gray-600">
Branch:
<span className="ml-2 font-semibold text-indigo-600">
{data.branch_code}
</span>
</p>

<p className="text-gray-600">
Closing Rank:
<span className="ml-2 font-semibold text-purple-600">
{data.closing_rank}
</span>
</p>

</div>

</div>

{/* bottom highlight */}
<div className="mt-6 bg-white/70 border border-indigo-100 rounded-xl px-4 py-3 text-sm text-gray-600">

🎯 Based on previous counselling cutoff data

</div>

</div>

</div>

)

}