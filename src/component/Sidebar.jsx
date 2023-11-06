import { FaBox, FaHome, FaLayerGroup, } from "react-icons/fa"

export default function Sidebar() {
  return (
    <div style={{width: "200px", background: "linear-gradient(to bottom, #1998B4, #41A474)"}}>
      <div className='text-center px-2 pt-4 pb-4' style={{fontSize: 24, color: "white"}}>
        <strong style={{color: "black"}}>
          VELZON
        </strong>
      </div>
      <p className='ps-3 text-light fw-light'><em>MENU</em></p>
      <div className='px-4 text-light d-flex flex-column gap-3'>
        <div className='d-flex align-items-center gap-3'>
          <FaHome />
          <div className='mb-1'>Encounter</div>
        </div>
        <div className='d-flex align-items-center gap-3'>
          <FaBox />
          <div className='mb-1'>Inpatient</div>
        </div>
        <div className='d-flex align-items-center gap-3'>
          <FaLayerGroup />
          <div className='mb-1'>Layouts</div>
        </div>
      </div>
    </div>
  )
}