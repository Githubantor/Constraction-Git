import photo1 from '../../../assets/images/about.jpg'
import photo2 from '../../../assets/images/about-shape.png'
import {  TbWorldShare } from 'react-icons/tb';
import { FaArrowAltCircleRight, FaAward } from 'react-icons/fa';

const Hero1 = () => {
    return (
        <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img src={photo1} className="max-w-sm rounded-lg shadow-2xl relative" />
        <img className=' absolute mt-64 mr-96 size-72' src={photo2} alt="" />
   <div>
   <div className='ml-56'>
        <h3 className='text-3xl font-bold text-orange-500'>Build your Dream</h3>
      <h1 className="text-5xl font-bold">Hero Constraction</h1>
      <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolore deserunt excepturi modi, deleniti laborum, sunt nihil accusamus vero quidem quaerat velit, obcaecati veniam temporibus veritatis beatae. Omnis, ratione perferendis!</p>
     <div>
        <h2 className='text-2xl font-bold'>Our projects completed ratio</h2>
     <div className=''>
     <progress className="progress w-56" value="92" max="100"></progress>
      <h3 className='text-xl font-semibold mt-2'>customer setisfation</h3>
      <progress className="progress progress-accent w-56" value="70" max="100"></progress>
      <h3 className='text-xl font-semibold mt-2'>total complete projects</h3>
      <div className='flex gap-3'>
        <div>
            <div>
           <div  className='flex gap-4'>
           <TbWorldShare className='/ size-10 text-orange-500 mt-6' />
            <h2 className='text-xl font-bold mt-6'>World Service</h2>
           </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
        <div>
            <div>
           <div className='flex gap-4'>
           <FaAward className='/ size-10 text-orange-500 mt-6' />
            <h2 className='text-xl font-bold mt-6'>Award</h2>
           </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
      </div>
      <div>
        <button className='btn btn-sm w-1/2 bg-orange-500 text-white'>Get Now <FaArrowAltCircleRight></FaArrowAltCircleRight></button>
      </div>
     </div>
     </div>
    </div>
   </div>
  
  </div>
  
</div>
    );
};

export default Hero1;
