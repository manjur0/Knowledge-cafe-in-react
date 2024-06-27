import profile from "../assets/profile.png";

const Header = () => {
  return (
    <div className="flex justify-between p-5  mx-10 border-b-2">
      <div className="text-3xl font-bold">Knowledge Cafe</div>
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;
