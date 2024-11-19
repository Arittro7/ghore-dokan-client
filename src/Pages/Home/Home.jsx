import Banner from "../../Components/Home/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      
      <div className="container mx-auto">
        
      <div className="my-24">
        <h1 className="text-center text-3xl font-semibold mb-6">Featured Product</h1>
      </div>

      <div className="my-24">
        <h1 className="text-center text-3xl font-semibold mb-6">User Review</h1>
      </div>

      <div className="my-24">
        <h1 className="text-center text-3xl font-semibold mb-6">Frequently Asked Questions</h1>
      </div>
      </div>
      
    </div>
  );
};

export default Home;
