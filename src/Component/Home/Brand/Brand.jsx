import photo1 from '../../../assets/images/brand1.png'
import photo2 from '../../../assets/images/brand2.png'
import photo3 from '../../../assets/images/brand3.png'
import photo4 from '../../../assets/images/brand4.png'
import photo5 from '../../../assets/images/brand5.png'

const Brand = () => {
    return (
        <div className='flex min-h-32 justify-around bg-orange-600 w-full pt-5 mt-4'>
            <img className=' size-1/2' src={photo1} alt="" />
            <img className=' size-1/2' src={photo2} alt="" />
            <img className=' size-1/2' src={photo3} alt="" />
            <img className=' size-1/2' src={photo4} alt="" />
            <img className=' size-1/2' src={photo5} alt="" />
        </div>
    );
};

export default Brand;