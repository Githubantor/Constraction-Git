import bannar1 from '../../../assets/images/bannar.png'
import bannar2 from '../../../assets/images/slider-thumb (1).png'

const Bannar = () => {
    return (
        <div>
            <div className="hero">
            <img className='w-full rounded-xl' src={bannar1} alt="" />
        <div className="hero-overlay rounded-xl bg-opacity-60"></div>
        <div className="hero-content text-neutral-content flex">
          <div className="max-w-md flex">
            <div className='justify-start w-full ml-16'>
            <h1 className="mb-5 text-5xl font-bold">Get best exparience in our building</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <div>
                <button className='btn btn-sm bg-orange-500 w-1/2 border-orange-500 text-white ease-out duration-300'>
                  Get Now</button>
            </div>
            </div>
          </div>
          <div>
          <img className='/ size-4/5 mt-44 ml-44' src={bannar2} alt="" />
          </div>
        </div>
      </div> 
        </div>
    );
};

export default Bannar;