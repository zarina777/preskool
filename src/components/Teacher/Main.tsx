import { Link } from "react-router-dom"


const Main = () => {
  return (
    <div className="content pt-[100px] px-2">
      <div className="d-md-flex d-block align-items-center justify-content-between mb-3">
        <div className="my-auto mb-2">
          <h3 className="page-title mb-1">Teacher Dashboard</h3>
          <nav>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a href="index.html">Dashboard</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Teacher Dashboard</li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 d-flex">
          <div className="card flex-fill bg-info bg-03">
            <div className="card-body">
              <h1 className="text-white mb-1"> Good Morning Ms.Teena</h1>
              <p className="text-white mb-3">Have a Good day at work</p>
              <p className="text-light">Notice : There is a staff meeting at 9AM today, Dont forget to
                Attend!!!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xxl-8 col-xl-12">
          <div className="row">
            <div className="col-xxl-7 col-xl-8 d-flex">
              <div className="card bg-dark position-relative flex-fill">
                <div className="card-body pb-1">
                  <div className="d-sm-flex align-items-center justify-content-between row-gap-3">
                    <div className="d-flex align-items-center overflow-hidden mb-3">
                      <div className="avatar avatar-xxl rounded flex-shrink-0 border border-white me-3">
                        <img src="assets/img/teachers/teacher-05.jpg" alt="Img" />
                      </div>
                      <div className="overflow-hidden">
                        <span className="badge bg-transparent-primary text-primary mb-1">#T594651</span>
                        <h3 className="text-white mb-1 text-truncate">Henriques Morgan </h3>
                        <div className="d-flex align-items-center flex-wrap text-light row-gap-2">
                          <span className="me-2">Classes : I-A, V-B</span>
                          <span className="d-flex align-items-center"><i className="ti ti-circle-filled text-warning fs-7 me-1"></i>Physics</span>
                        </div>
                      </div>
                    </div>
                    <Link to="/edit-teacher" className="btn btn-primary flex-shrink-0 mb-3">Edit
                      Profile</Link>
                  </div>
                  <div className="student-card-bg">
                    <img src="assets/img/bg/circle-shape.png" alt="Bg" />
                    <img src="assets/img/bg/shape-02.png" alt="Bg" />
                    <img src="assets/img/bg/shape-04.png" alt="Bg" />
                    <img src="assets/img/bg/blue-polygon.png" alt="Bg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main