import { useEffect } from "react";
import { useState } from "react";


const PricePlan = () => {
  const [plans, setPlans] = useState([])
  useEffect(() => {
    fetch('plans.json')
    .then(res => res.json())
    .then(data => setPlans(data))
  },[])
  const handleClick = (id) => {
    console.log(`Purchasing plan with ID: ${id}`);
  };

  return (
    <div className="flex gap-6 mt-14 ml-32">
      {plans.map((plan) => (
        <div key={plan.id} className="card w-72 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{plan.title}</h2>
            <h1 className="text-2xl font-bold">${plan.price}/Per month</h1>
            {plan.features.map((feature, index) => (
              <p key={index}>{feature}</p>
            ))}
          </div>
          <div className="card-actions">
            <button className="btn btn-primary w-full" onClick={() => handleClick(plan.id)}>Purchase Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricePlan;
