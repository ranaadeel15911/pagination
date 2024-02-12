import Image from "next/image";
import Link from "next/link";
const data = [
  'entry 1',
  'entry 2',
  'entry 3',
  'entry 4',
  'entry 5',
  'entry 6',
  'entry 7',
  'entry 8',
  'entry 9',
  'entry 10',
  'entry 11',
  'entry 12',
  'entry 13',
  'entry 14',
  'entry 15',
  'entry 16',
]
export default function Home({searchparams}) {
  console.log(searchparams)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <Link href={'/new'} className="text-white border border-white rounded-full px-2">Go to Pagination</Link>
    </main>
  );
}
