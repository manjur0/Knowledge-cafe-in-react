import profile from "../assets/profile.png";

const Header = () => {
  return (
    <div className="flex justify-between p-5   border-b-2 max-w-7xl mx-auto">
      <div className="text-3xl font-bold">Knowledge Cafe</div>
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;
