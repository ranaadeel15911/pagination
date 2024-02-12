import Image from "next/image";
import Pagination from "@/app/(components)/pagination"
const data = [
  {
    img:'https://images.unsplash.com/photo-1536782376847-5c9d14d97cc0?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name:'card 1'
  },
  { img:'https://fastly.picsum.photos/id/1080/200/300.jpg?hmac=3jCG4X8ni9cpiEppj6KVvqhpJ_owIFtDQOABJmhG1I0', name:'card 2'},
  { img:'https://fastly.picsum.photos/id/369/200/200.jpg?hmac=mfma93Qqk_dWRARrDhIl7oid7sWebuZHhKQFsnMwwwE', name:'card 3'},
  { img:'https://fastly.picsum.photos/id/600/200/200.jpg?hmac=x3_SXBDfy4wqgriXAHmONXmt4rEB-k8sVoY7P5q8Bgs', name:'card 4'},
  { img:'https://fastly.picsum.photos/id/1026/200/200.jpg?hmac=CWxlEHUZLgcfP2qGDrSBD-5MXHOjsY-ic-LwDigTunc', name:'card 5'},
  { img:'https://fastly.picsum.photos/id/634/200/200.jpg?hmac=3WUmj9wMd1h3UZICk1C5iydU5fixjx0px9jw-LBezgg', name:'card 6'},
  { img:'https://fastly.picsum.photos/id/651/200/200.jpg?hmac=p8_kpEZVVgCD0ruS4M5WHOZ2-VETfCi3aXmYAbav3NE', name:'card 7'},
  { img:'https://fastly.picsum.photos/id/467/200/200.jpg?hmac=1DxsR7q_iuL1x5DGvv6KSaWR1rN1aawK2Iz0mZx40Mk', name:'card 8'},
  { img:'https://fastly.picsum.photos/id/518/200/200.jpg?hmac=nY2cAnZ0_ItWhhAsJ_XL3RsNkDo7_zobodK8FWIoCDM', name:'card 9'},
  { img:'https://fastly.picsum.photos/id/72/200/300.jpg?hmac=8tyK7lgBqIQNIGPVnmsVP3SL5bYCsSDmdZtnIJNQv3o', name:'card 10'},
  { img:'https://fastly.picsum.photos/id/172/200/300.jpg?hmac=Z5LhQNM9g-UdcCGfryluTaIrxwIaAD_pMo_izKB2nuA', name:'card 11'},
  { img:'https://fastly.picsum.photos/id/73/200/300.jpg?hmac=18C0Ky7sRbCcHNCGBISk2jzYf6gPrAJCyHxKbLKcu20', name:'card 12'},
  { img:'https://fastly.picsum.photos/id/218/200/300.jpg?hmac=S2tW-K1x-k9tZ7xyNVAdnie_NW9LJEby6GBgYpL7kfo', name:'card 13'},
  { img:'https://fastly.picsum.photos/id/2/200/300.jpg?hmac=HiDjvfge5yCzj935PIMj1qOf4KtvrfqWX3j4z1huDaU', name:'card 14'},
  { img:'https://fastly.picsum.photos/id/730/200/300.jpg?hmac=Xa_29B3ZIok8lz4JGLZUBU_ARxJew0twrMWMHEy_T1I', name:'card 15'},
  { img:'https://fastly.picsum.photos/id/537/200/300.jpg?hmac=LG3kZs5AdrMmsgeVOdrfP0C5KT3WmP-q5TauEZdR4vk', name:'card 16'},
  { img:'https://fastly.picsum.photos/id/755/200/300.jpg?hmac=CfzLROBA3atEQnBKXK5SeavNo-1QRwZRwcqZwwdBMdM', name:'card 17'},
  { img:'https://fastly.picsum.photos/id/29/200/300.jpg?hmac=LrtD-VNd4eRyyMbqI05Mpy4EQNgTdZkSEt5ULyXx4lw', name:'card 18'},
  { img:'https://fastly.picsum.photos/id/288/200/300.jpg?hmac=45WLionXnoogi0-njKuSNnVY5hnswMhf-CrxwzKTcrc', name:'card 19'},
  { img:'https://fastly.picsum.photos/id/975/200/300.jpg?hmac=BGcA8uNiSpWczZjtm2d5f7y562W9AF2nh_3KDsyu_yM', name:'card 20'},
  { img:'https://fastly.picsum.photos/id/1080/200/300.jpg?hmac=3jCG4X8ni9cpiEppj6KVvqhpJ_owIFtDQOABJmhG1I0',name:'card 21'},
{img:'https://fastly.picsum.photos/id/369/200/200.jpg?hmac=mfma93Qqk_dWRARrDhIl7oid7sWebuZHhKQFsnMwwwE',name:'card 22'},
{img:'https://fastly.picsum.photos/id/600/200/200.jpg?hmac=x3_SXBDfy4wqgriXAHmONXmt4rEB-k8sVoY7P5q8Bgs',name:'card 23'},
{img:'https://fastly.picsum.photos/id/73/200/300.jpg?hmac=18C0Ky7sRbCcHNCGBISk2jzYf6gPrAJCyHxKbLKcu20',name:'card 24'},
{img:'https://fastly.picsum.photos/id/634/200/200.jpg?hmac=3WUmj9wMd1h3UZICk1C5iydU5fixjx0px9jw-LBezgg',name:'card 25'},
{img:'https://fastly.picsum.photos/id/651/200/200.jpg?hmac=p8_kpEZVVgCD0ruS4M5WHOZ2-VETfCi3aXmYAbav3NE',name:'card 26'},
{img:'https://fastly.picsum.photos/id/467/200/200.jpg?hmac=1DxsR7q_iuL1x5DGvv6KSaWR1rN1aawK2Iz0mZx40Mk',name:'card 27'},
{img:'https://fastly.picsum.photos/id/518/200/200.jpg?hmac=nY2cAnZ0_ItWhhAsJ_XL3RsNkDo7_zobodK8FWIoCDM',name:'card 28'},
{img:'https://fastly.picsum.photos/id/72/200/300.jpg?hmac=8tyK7lgBqIQNIGPVnmsVP3SL5bYCsSDmdZtnIJNQv3o',name:'card 29'},
{img:'https://fastly.picsum.photos/id/172/200/300.jpg?hmac=Z5LhQNM9g-UdcCGfryluTaIrxwIaAD_pMo_izKB2nuA',name:'card 30'},
{img:'https://fastly.picsum.photos/id/73/200/300.jpg?hmac=18C0Ky7sRbCcHNCGBISk2jzYf6gPrAJCyHxKbLKcu20',name:'card 31'},
{img:'https://fastly.picsum.photos/id/72/200/300.jpg?hmac=8tyK7lgBqIQNIGPVnmsVP3SL5bYCsSDmdZtnIJNQv3o',name:'card 32'},
{img:'https://fastly.picsum.photos/id/2/200/300.jpg?hmac=HiDjvfge5yCzj935PIMj1qOf4KtvrfqWX3j4z1huDaU',name:'card 33'},
{img:'https://fastly.picsum.photos/id/730/200/300.jpg?hmac=Xa_29B3ZIok8lz4JGLZUBU_ARxJew0twrMWMHEy_T1I',name:'card 34'},
{img:'https://fastly.picsum.photos/id/537/200/300.jpg?hmac=LG3kZs5AdrMmsgeVOdrfP0C5KT3WmP-q5TauEZdR4vk',name:'card 35'},
{img:'https://fastly.picsum.photos/id/755/200/300.jpg?hmac=CfzLROBA3atEQnBKXK5SeavNo-1QRwZRwcqZwwdBMdM',name:'card 36'},
{img:'https://fastly.picsum.photos/id/29/200/300.jpg?hmac=LrtD-VNd4eRyyMbqI05Mpy4EQNgTdZkSEt5ULyXx4lw',name:'card 37'},
{img:'https://fastly.picsum.photos/id/1080/200/300.jpg?hmac=3jCG4X8ni9cpiEppj6KVvqhpJ_owIFtDQOABJmhG1I0',name:'card 38'},
{img:'https://fastly.picsum.photos/id/975/200/300.jpg?hmac=BGcA8uNiSpWczZjtm2d5f7y562W9AF2nh_3KDsyu_yM',name:'card 39'} ,
]
console.log(data.length)
export default function page({searchParams}) {
    console.log(data.length)
  console.log(searchParams)
  const page = searchParams['page'] ?? '1'
  // ?? is called nullish coalescing operator means if page value undefined or null we will return '1' to page
  const per_page = searchParams['per_page'] ?? '15'
  const start = (Number(page) - 1) * Number(per_page)
  const end = start + Number(per_page)
  const enteries = data.slice(start, end)
// const abc = {adeel:'abcd',usama:"ghij"}
// console.log(abc.adeel)
// console.log(abc['adeel'])
  return (
    <>
    <main className="flex items-center mx-4 flex-wrap sm:gap-6 lg:gap-10 ">
     {
        enteries.map((emtry)=>{
            return (
                <div className=" bg-white border mx-[2px] my-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  {/* <a href="#" > */}
    <Image  width={70} height={50}  className="rounded-t-lg"  src={emtry.img} alt="image" />
    <h1 className="text-white text-center">{emtry.name}</h1>
  {/* </a> */}
  {/* <div className="p-5">
    <a href="#">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Read more
      <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
      </svg>
    </a>
  </div> */}
</div>
            )
        })
            // <p key={{name:'card'}{name:'card'}p>
        }
     </main>
<div className="fixed top-[620px] left-11 ">
     <Pagination
     haspreviouspage = {start > 0}
     hasnextpage = {end > data.length}
     length = {data.length}
     />
     </div>
     </>
  );
}
