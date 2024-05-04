import Footer_Head from '../../public/footer-head.png';
import city from '../../public/background-image.png';

export default function Footer() {
  return (
    <div>
      <img className='w-full' src={Footer_Head} alt="" />
      <div className='bg-[#081831] '>
        <img className='pt-72 w-full' src={city} alt="" />
      </div>
    </div>
  )
}
