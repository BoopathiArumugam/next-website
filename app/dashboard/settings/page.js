'use client'
import { useRouter } from "next/navigation";

export default function Setting() {
  
  const router=useRouter();
   
  const back=()=>{
      router.push('/')
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={back} className="bg-blue-700 rounded text-white font-bold py-2 px-4">Courses</button>
    </main>
  );
}