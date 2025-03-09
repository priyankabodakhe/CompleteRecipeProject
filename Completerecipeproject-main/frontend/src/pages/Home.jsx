import React from 'react';

const Home = () => {
  return (
    <div className="container">
  <img 
    src="/ban1.jpg" 
    className="img-fluid mx-auto d-block pt-1" 
    alt="Banner" 
    style={{ width: '1000px', height: '350px' }} 
  />
  <div className="row row-cols-1 row-cols-md-2 g-4 m-2">

        
        <div className="col">
          <div className="card h-100 text-center">
            <img src="/veg.jpg" className="card-img-top mx-auto d-block" alt="Veg Recipes" style={{ width: '70%', height: '250px' }} />
            <div className="card-body">
              <h5 className="card-title">Veg Recipes</h5>
              <p className="card-text">Explore a variety of healthy and delicious vegetarian dishes, from comforting home-cooked meals to exotic plant-based cuisines.</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 text-center">
            <img src="/nonveg.jpg" className="card-img-top mx-auto d-block" alt="Non-Veg Recipes" style={{ width: '70%', height: '250px' }} />
            <div className="card-body">
              <h5 className="card-title">Non-Veg Recipes</h5>
              <p className="card-text">Savor the richness of flavors with our selection of meat, poultry, and seafood recipes, perfect for every occasion and craving.</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 text-center">
            <img src="/Snacks.jpg" className="card-img-top mx-auto d-block" alt="Snacks & Appetizers" style={{ width: '70%', height: '250px'}} />
            <div className="card-body">
              <h5 className="card-title">Snacks & Appetizers Recipes</h5>
              <p className="card-text">Quick, crispy, and delightful bites to satisfy your hunger, ideal for gatherings, tea-time treats, or just a tasty indulgence.</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 text-center">
            <img src="/Desserts.jpg" className="card-img-top mx-auto d-block" alt="Desserts" style={{ width: '70%', height: '250px' }} />
            <div className="card-body">
              <h5 className="card-title">Desserts Recipes</h5>
              <p className="card-text">Indulge in a sweet escape with decadent cakes, creamy puddings, and traditional desserts that bring joy to every bite.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
