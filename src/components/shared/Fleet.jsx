import avenis from '../../assets/images/avenis.png'
import burg from '../../assets/images/burg.png'
import access from "../../assets/images/access.png"
const Fleet = () => {
  return (
    <div className='lg:w-[60vw] lg:m-auto'>
      <div className='my-[20vw] mx-3 lg:my-[5vw]'>
        <h1 className='text-4xl font-bold mb-3 text-center'>OUR FLEET</h1>
        <p className='font-medium  text-[18px]'>At <b>Rishikesh On Wheels</b>, the road ahead is not just a path; it&apos;s a canvas for your unique story. Embrace the freedom of choice, and let your journey with us be a reflection of your individuality. Your adventure begins with selecting the perfect ride from our versatile fleet – embark on it today!</p>
      </div>
      <div className='flex flex-col gap-10 m-3 md:flex-row lg:flex-row lg:items-center lg:justify-center'>
        <div className='bg-[#F7FAFA] p-4 rounded-sm lg:p-[3vw]'>
          <img src={access} alt="" className='mb-4 mx-auto' width={300} />
          <h1 className='text-lg font-bold'>SUZUKI ACCESS 125</h1>
        </div>
        <div className='bg-[#F7FAFA] p-4 rounded-sm lg:p-[3vw]'>
          <img src={burg} alt="" className='mb-4 mx-auto' width={300} />
          <h1 className='text-lg font-bold'>SUZUKI BURGMAN STREET</h1>
        </div>
        <div className='bg-[#F7FAFA] p-4 rounded-sm align-center lg:p-[3vw]'>
          <img src={avenis} alt="" className='mb-4 mx-auto' width={250} />
          <h1 className='text-lg font-bold'>SUZUKI AVENIS</h1>
        </div>
      </div>
    </div>
  )
}

export default Fleet