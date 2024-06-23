import photo1 from '../../../assets/images/service1.png'
import photo2 from '../../../assets/images/service2.png'
import photo3 from '../../../assets/images/service3.png'

const Engineers = () => {
    return (
        <div className="mt-9">
            <h3 className="text-2xl font-bold text-orange-500 text-center">What we do</h3>
            <h4 className="text-xl font-bold text-center">High quality service of our industry</h4>
            <div className='flex gap-4 justify-center mt-6'>

            <div className='flex gap-4 justify-center mt-6'>
            <div className="card w-72 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10 pb-9">
    <img src={photo1} alt="Shoes" className="rounded-xl" />
  </figure>
  <div>
    <h3 className='font-bold text-orange-500 text-center pb-5'>Hero constraction</h3>
  </div>
  </div>
</div>
            <div className='flex gap-4 justify-center mt-6'>
            <div className="card w-72 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10 pb-9">
    <img src={photo2} alt="Shoes" className="rounded-xl" />
  </figure>
  <div>
    <h3 className='font-bold text-orange-500 text-center pb-5'>Hero constraction</h3>
  </div> 
  </div>
</div>
            <div className='flex gap-4 justify-center mt-6'>
            <div className="card w-72 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10 pb-9">
    <img src={photo3} alt="Shoes" className="rounded-xl" />
  </figure>
  <div>
    <h3 className='font-bold text-orange-500 text-center pb-4'>Hero constraction</h3>
  </div>
  </div>
</div>
            </div>
            </div>
    );
};

export default Engineers;