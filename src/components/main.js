import bg from "../assets/images/bg.jpeg";

function Main() {
  return (
    <div
      className="d-flex py-5 align-items-center justify-content- flex-column text-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      {/* Title */}
      <p className="w-75 w-md-50 mt-5 fs-3 fs-md-1 text-white fw-bold">
        Bring Serenity to Your Place With Interior Plants
      </p>

      {/* Subtitle */}
      <p className="w-100 w-md-25 text-white opacity-75 mb-5">
        Find your dream plant for your home decoration with us, and we will make it happen.
      </p>
    </div>
  );
}

export default Main;
