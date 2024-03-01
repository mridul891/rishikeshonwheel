import { Link } from 'react-router-dom'
import { Form } from './Form'
const ContactUs = () => {
   
    return (
        <div className='lg:w-[60vw] lg:m-auto'>
            <div className='my-[20vw] mx-3 lg:my-[5vw]'>
                <div className='flex flex-col font-medium  text-[18px] lg:flex-row lg:justify-around lg:items-center'>
                    <div className=' my-10'>
                        <h1 className='text-4xl font-bold mb-3'>CONTACT US</h1>
                        <p className='text-xl mb-8'> Address : <br />
                            346, Subhash Bankhandi Gram,<br />
                            Near Royal Confectionary, Rishikesh <br />
                            PIN:249201
                        </p>
                        <p className='text-xl mb-6'>
                            Phone : <Link to="tel:+919999934003" className='hover:text-[#FFA500]'>9999934003,</Link>
                            <Link to="tel:+917351515073" className='hover:text-[#FFA500]'>7351515073</Link>
                        </p>
                        <p className='text-xl'>
                            E-mail :
                            <Link to="mailto:info@rishikeshonwheels.com" className='hover:text-[#FFA500]'>
                                info@rishikeshonwheels.com
                            </Link>
                        </p>
                    </div>
                    <div>
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs