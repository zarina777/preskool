import { FaRegSquarePlus } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { FiRefreshCcw } from "react-icons/fi";
import { Link } from "react-router-dom";
const HeroAdmin = () => {
  return (
    <div className="content px-2 pt-[100px]">
      {/* 1 */}
      <div className="d-md-flex d-block align-items-center justify-content-between mb-3">
        <div className="my-auto mb-2">
          <h3 className="page-title mb-1">Admin Dashboard</h3>
          <nav>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/admin">Dashboard</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Admin Dashboard
              </li>
            </ol>
          </nav>
        </div>
        <div className="d-flex my-xl-auto right-content align-items-center flex-wrap">
          <div className="mb-2">
            <Link
              to="/create-student"
              className="btn btn-primary d-flex align-items-center me-3"
            >
              <FaRegSquarePlus /> &nbsp; Add New Student
            </Link>
          </div>
          <div className="mb-2">
            <Link
              to="/fees-detail"
              className="btn btn-light d-flex align-items-center"
            >
              Fees Details
            </Link>
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className="row">
        <div className="col-md-12">
          <div className="card bg-dark">
            <div className="overlay-img">
              <img
                src="assets/img/bg/shape-04.png"
                alt="img"
                className="img-fluid shape-01"
              />
              <img
                src="assets/img/bg/shape-01.png"
                alt="img"
                className="img-fluid shape-02"
              />
              <img
                src="assets/img/bg/shape-02.png"
                alt="img"
                className="img-fluid shape-03"
              />
              <img
                src="assets/img/bg/shape-03.png"
                alt="img"
                className="img-fluid shape-04"
              />
            </div>
            <div className="card-body">
              <div className="d-flex align-items-xl-center justify-content-xl-between flex-xl-row flex-column">
                <div className="mb-3 mb-xl-0">
                  <div className="d-flex align-items-center flex-wrap mb-2">
                    <h1 className="text-white me-2">
                      Welcome Back, Mr. Herald
                    </h1>
                    <Link
                      to="profile.html"
                      className="avatar avatar-sm img-rounded bg-gray-800 dark-hover"
                    >
                      <FaRegEdit />
                    </Link>
                  </div>
                  <p className="text-white">Have a Good day at work</p>
                </div>
                <p className="flex">
                  <FiRefreshCcw />
                  <div className="d-inline-block text-white">
                    Updated Recently on 15 Jun 2024
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3 */}
      <div className="row">
        {/* Students  */}
        <div className="col-xxl-3 col-sm-6 d-flex">
          <div className="card flex-fill animate-card border-0">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="avatar avatar-xl bg-danger-transparent me-2 p-1">
                  <img src="assets/img/icons/students.png" alt="img" />
                </div>
                <div className="overflow-hidden flex-fill">
                  <div className="d-flex align-items-center justify-content-between">
                    <h2 className="counter">3654</h2>
                    <span className="badge bg-danger">1.2%</span>
                  </div>
                  <p>Total Students</p>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between border-top mt-3 pt-3">
                <p className="mb-0">
                  Active : <span className="text-dark fw-semibold">3643</span>
                </p>
                <span className="text-light">|</span>
                <p>
                  Inactive : <span className="text-dark fw-semibold">11</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Teachers */}
        <div className="col-xxl-3 col-sm-6 d-flex">
          <div className="card flex-fill animate-card border-0">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="avatar avatar-xl me-2 bg-secondary-transparent p-1">
                  <img src="assets/img/icons/teacher.png" alt="img" />
                </div>
                <div className="overflow-hidden flex-fill">
                  <div className="d-flex align-items-center justify-content-between">
                    <h2 className="counter">284</h2>
                    <span className="badge bg-skyblue">1.2%</span>
                  </div>
                  <p>Total Teachers</p>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between border-top mt-3 pt-3">
                <p className="mb-0">
                  Active : <span className="text-dark fw-semibold">254</span>
                </p>
                <span className="text-light">|</span>
                <p>
                  Inactive : <span className="text-dark fw-semibold">30</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Staffs */}
        <div className="col-xxl-3 col-sm-6 d-flex">
          <div className="card flex-fill animate-card border-0">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="avatar avatar-xl me-2 bg-warning-transparent p-1">
                  <img src="assets/img/icons/staffs.png" alt="img" />
                </div>
                <div className="overflow-hidden flex-fill">
                  <div className="d-flex align-items-center justify-content-between">
                    <h2 className="counter">162</h2>
                    <span className="badge bg-warning">1.2%</span>
                  </div>
                  <p>Total Staff</p>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between border-top mt-3 pt-3">
                <p className="mb-0">
                  Active : <span className="text-dark fw-semibold">161</span>
                </p>
                <span className="text-light">|</span>
                <p>
                  Inactive : <span className="text-dark fw-semibold">02</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Classes */}
        <div className="col-xxl-3 col-sm-6 d-flex">
          <div className="card flex-fill animate-card border-0">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="avatar avatar-xl me-2 bg-success-transparent p-1">
                  <img src="assets/img/icons/class.png" alt="img" />
                </div>
                <div className="overflow-hidden flex-fill">
                  <div className="d-flex align-items-center justify-content-between">
                    <h2 className="counter">82</h2>
                    <span className="badge bg-success">1.2%</span>
                  </div>
                  <p>Total classes</p>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between border-top mt-3 pt-3">
                <p className="mb-0">
                  Active : <span className="text-dark fw-semibold">81</span>
                </p>
                <span className="text-light">|</span>
                <p>
                  Inactive : <span className="text-dark fw-semibold">01</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAdmin;
