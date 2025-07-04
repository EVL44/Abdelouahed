import { FaArrowLeft } from 'react-icons/fa'
import Link from 'next/link'

function Work() {
  return (
    <div className='h-[80vh] w-full flex flex-col items-center justify-center'>
      <h1 className='text-accent text-4xl font-extrabold'>ERROR 404</h1>
      <p className='text-surface/60 text-center '>this page is not ready yet, go somewhere else.</p>
      <Link href='/' className='flex gap-4 items-center justify-center'>
        <FaArrowLeft className='text-accent' /> 
        <span className='text-accent font-bold'>Go Home </span>
      </Link>
      
    </div>
  )
}

export default Work