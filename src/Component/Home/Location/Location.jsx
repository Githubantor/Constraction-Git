import photo1 from '../../../assets/images/faq-img.png'
const Location = () => {
    return (
        <div className='mt-10 ml-32 flex'>
            <div className='/ w-1/2'>
                <h2 className="text-3xl font-bold">Our Beif History is Our 
                <br />
                pride and Motivation</h2>
                <img src={photo1} alt="" />
            </div>
            <div className=''>
            <div className="collapse collapse-plus bg-base-200 mb-2">
  <input type="radio" name="my-accordion-3" defaultChecked /> 
  <div className="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div className="collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200 mb-2">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div className="collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div className="collapse-content"> 
    <p>hello</p>
  </div>
</div>
            </div>
        </div>
    );
};

export default Location;