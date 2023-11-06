import { FaEllipsisH, FaFile, FaPlusCircle } from "react-icons/fa";
import Footer from "./Footer";

export default function Data() {
  return (
    <div>
      <div className="d-flex ps-3">
        <div className="border-bottom border-2 pb-2 px-5 fst-italic" style={{color: "#495057"}}>Registration</div>
        <div className="pb-2 px-5" style={{color: "#25A0E2", borderBottom: "1px solid #25A0E2"}}>Patient</div>
        <div className="border-bottom border-2 pb-2 px-5 fst-italic" style={{color: "#495057"}}>Pending Appointment</div>
      </div>
      <div className='border border-2 m-3'>
        <div className='p-3'>
          <button type="button" className="btn d-flex justify-content-center align-items-center" style={{ backgroundColor: "#1998B4", color: "white"}}>
            <FaPlusCircle className="me-2"/> Add Patient
          </button>
        </div>
        <div className="d-flex justify-content-between px-3">
          <div className="d-flex align-items-center gap-2">
            <div>
              Show
            </div>
            <select className="form-select" name="" id="">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
            <div>
              entries
            </div>
          </div>
          <div className="d-flex align-items-center gap-2">
            <div>
              Search:
            </div>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder=""/>
            </form>
          </div>
        </div>
        <div className='p-3'>
        <table className="table border border-2 bg-transparent">
          <thead className="fw-normal">
            <tr className="fst-italic opacity-50" style={{fontSize: 12}}>
              <th className="fw-medium" scope="col">New Reg</th>
              <th className="fw-medium" scope="col">Medical No</th>
              <th className="fw-medium" scope="col">Patient Name</th>
              <th className="fw-medium" scope="col">Birth Date</th>
              <th className="fw-medium" scope="col">Address</th>
              <th className="fw-medium" scope="col">Phone No.</th>
              <th className="fw-medium" scope="col">Mobile Phone</th>
              <th className="fw-medium" scope="col">No BPJS</th>
              <th className="fw-medium" scope="col">Healthcare</th>
              <th className="fw-medium" scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{fontSize: 12}}>
              <th scope="row" className="ps-4"><FaFile/></th>
              <td style={{color: "#25A0E2"}}>013-023-10-23</td>
              <td>Fernando Riyo Simbolon (28)</td>
              <td>08/10/1998</td>
              <td>Jalan 8</td>
              <td>098765125</td>
              <td>None</td>
              <td>03231277123</td>
              <td>RS MATA JEC@</td>
              <td><div className="btn" style={{backgroundColor: "#878A991A", fontSize: 12}}><FaEllipsisH/></div></td>
            </tr>
            <tr style={{fontSize: 12}}>
              <th scope="row" className="ps-4"><FaFile/></th>
              <td style={{color: "#25A0E2"}}>013-023-10-23</td>
              <td>Fernando Riyo Simbolon (28)</td>
              <td>08/10/1998</td>
              <td>Jalan 8</td>
              <td>098765125</td>
              <td>None</td>
              <td>03231277123</td>
              <td>RS MATA JEC@</td>
              <td><div className="btn" style={{backgroundColor: "#878A991A", fontSize: 12}}><FaEllipsisH/></div></td>
            </tr>
            <tr style={{fontSize: 12}}>
              <th scope="row" className="ps-4"><FaFile/></th>
              <td style={{color: "#25A0E2"}}>013-023-10-23</td>
              <td>Fernando Riyo Simbolon (28)</td>
              <td>08/10/1998</td>
              <td>Jalan 8</td>
              <td>098765125</td>
              <td>None</td>
              <td>03231277123</td>
              <td>RS MATA JEC@</td>
              <td><div className="btn" style={{backgroundColor: "#878A991A", fontSize: 12}}><FaEllipsisH/></div></td>
            </tr>
          </tbody>
        </table>
        </div>
      <div className="d-flex justify-content-end mx-3">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
          </ul>
        </nav>
      </div>
      </div>
      <Footer/>
    </div>
  )
}