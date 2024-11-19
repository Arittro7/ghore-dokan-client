const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://as2.ftcdn.net/v2/jpg/09/85/26/31/1000_F_985263111_wj5fmNqBzzTmzD0ybiLOEdDbJkK9udN4.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div>
            <h1 className="mb-5 text-5xl font-bold">Welcome to PonnoLagbe!</h1>
            <p className="mb-5 text-2xl">
              Your One-Stop Shop for All Things You Love. <br /> 
              Shop Smart, Shop Local, Shop PonnoLagbe! <br /> ✨ Enjoy Exclusive Deals, Fast Delivery,
              and Hassle-Free Shopping ✨
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
