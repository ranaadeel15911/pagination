'use client'
import { useRouter, useSearchParams } from 'next/navigation'
const Pagination = ({haspreviouspage,hasnextpage,length}) => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const page = searchParams.get('page') ?? '1'
    const per_page = searchParams.get('per_page') ?? '15'
    const total_pages = Math.ceil(39/per_page)
    const abc = []
 for (let index = 0; index < total_pages; index++) {
    // const element = array[index];
    console.log(index + 1)
    abc.push(index + 1)
}
console.log(abc)
  return (
    <div className='flex gap-2'>
        <button className='bg-blue-500 px-3 py-2' disabled={!haspreviouspage} onClick={()=>router.push(`/new?page=${Number(page) - 1}&per_page=${per_page}`)}>Previous </button>
        <div>
            {/* {page} / {Math.ceil(length/per_page)} */}
            {abc.map((inde)=>{
                return(
                   <h3 key={inde} className='inline-block px-3'><button className={`${page == inde && 'text-red-600'}`} key={inde} onClick={()=>router.push(`/new?page=${Number(inde)}&per_page=${per_page}`)}>{inde}</button> </h3>
                ) 
            })}

        </div>

        <button disabled={hasnextpage} className='bg-blue-500 px-3 py-2' onClick={()=>router.push(`/new?page=${Number(page) + 1}&per_page=${per_page}`)}>Next </button>
    </div>
  )
}

export default Pagination