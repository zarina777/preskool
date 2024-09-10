import { Link } from "react-router-dom";

const Auth = () => {
  return <div className=" px-40 py-4">
    <span className="text-red-700 text-4xl">Auth Page</span>
  <br />
  <br />
    <Link to={"/students"} className=" underline text-blue-700">
      Go to students dashboard
    </Link>
    <br />
    <Link to={"/admin"} className=" underline text-blue-700">
      Go to admin dashboard
    </Link>
    <br />
    <Link to={"/teacher"} className=" underline text-blue-700">
      Go to teacher dashboard
    </Link>
  </div>;
};

export default Auth;
