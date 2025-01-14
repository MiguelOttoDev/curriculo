import { FaLocationDot } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Contacts(){
    return(
        <div className='flex flex-col'>
            <div className='flex items-center'>
              <FaLocationDot className='mr-2 text-yellow-600' />
              <p className='text-sm text-zinc-600 border-b border-zinc-400 my-2 pb-2 w-full'>
                Rua Coração de Maria, 326,<br />
                Jardim Maria Aparecida, Sete Barras,<br />
                11910000, Brasil
              </p>
            </div>

            <div className='flex items-center'>
              <BsTelephoneFill className='mr-2 text-yellow-600' />
              <p className='text-sm text-zinc-600 border-b border-zinc-400 my-2 pb-2 w-full'>
                13996775011
              </p>
            </div>

            <div className='flex items-center'>
              <MdEmail className='mr-2 text-yellow-600' />
              <p className='text-sm text-zinc-600 w-full'>
                miguel1712otto@gmail.com
              </p>
            </div>
          </div>
    )
}