import logo from "../assets/logo.svg";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center  w-full mb-10 mt-10'>
        <img src={logo} alt='reumia_logo' className='w-28 object-contain' />
        <button
          type='button'
          onClick={() => window.open("https://github.com/PedroFR91")}
          className='black_btn'
        >
          GitHub
        </button>
      </nav>
      <h1 className='head_text'>
        Genera Resúmenes con
        <br />
        <span className='orange_gradient'>Inteligencia Artificial</span>
      </h1>
      <h2 className='desc'>
        Simplifica tu lectura con Resum
        <span className='orange_gradient font-black'>IA</span>, un resumidor de
        artículos de código abierto que transforma artículos largos en resúmenes
        claros y concisos.
      </h2>
    </header>
  );
};

export default Hero;
