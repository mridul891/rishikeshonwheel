
import Info from '../../assets/constant/info.js'
import one from '../../assets/images/neergarh_waterfall.jpg'
import two from '../../assets/images/Kunjapuri.jpg'
import three from '../../assets/images/haridwar.jpg'
import four from '../../assets/images/River-rafting.jpg'
import five from '../../assets/images/PatnaWaterfall.jpg'
import six from '../../assets/images/neelkanth_mahadev.jpg'
const Blog = () => {
    const info = [one, two, three, four, five, six];
    return (
        <div className='lg:w-[60vw] lg:m-auto'>
            <h1 className='text-2xl text-center mt-3 lg:text-4xl font-bold lg:mb-3'>Things To Do In Rishikesh</h1>
            <div className='my-[2rem] mx-3 lg:my-[5vw]'>
                {Info.map((_, index) => (
                    <div className='flex flex-col gap-10 mb-5 pl-2 lg:p-10 lg:flex-row bg-stone-100 lg:mb-10 text-black' key={index}>
                        <img src={info[index]} className='h-[40vh]' />
                        <div className='flex flex-col justify-center'>

                            <h1 className="text-2xl  lg:text-4xl font-bold mb-4 font-Poppin">
                                {_.heading}
                            </h1>
                            <span className="mb-4 font-medium  text-[18px]">{_.des}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Blog