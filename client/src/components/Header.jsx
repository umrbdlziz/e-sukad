const Header = () => {
  return (
    <header className="border-b-2 border-purple-700 ">
      <div className="flex flex-row justify-between items-center px-5 h-20 max-w-7xl mx-auto w-full">
        <div className="flex justify-center items-center gap-6">
          <img src="usm-esport.png" className="w-[50px] h-[50px]" />
          <h1>Welcome, Umar</h1>
        </div>
        <div className="flex flex-row gap-3">
          <img src="user.png" className="w-[25px] h-[25px] cursor-pointer" />
          <img src="setting.svg" className="w-[25px] h-[25px] cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
