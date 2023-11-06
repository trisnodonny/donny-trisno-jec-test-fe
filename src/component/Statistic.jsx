import { FaCoins, FaHeartBroken, FaHeartbeat, FaRegArrowAltCircleDown, FaRegArrowAltCircleUp, FaRegEdit, FaTrophy, FaWaveSquare } from "react-icons/fa";

export default function Statistic() {
  return (
    <div className='d-flex justify-content-center'>
      <div className='py-4 px-3 border border-2'>
        <div className='d-flex gap-5 justify-content-center align-items-center'>
          <div className="opacity-50" style={{fontStyle: "italic", fontSize: 14}}>TOTAL REGISTRATION</div>
          <div className='ms-5' style={{color: "#0AB39C"}}><FaRegArrowAltCircleUp/></div>
        </div>
        <div className='d-flex gap-2 opacity-50'>
          <div style={{fontSize: 24}}>
            <FaRegEdit/>
          </div>
          <div style={{fontSize: 24, fontStyle: "italic"}}>197</div>
        </div>
      </div>
      <div className='py-4 px-3 border border-2'>
        <div className='d-flex gap-5 justify-content-center align-items-center'>
          <div className="opacity-50" style={{fontStyle: "italic", fontSize: 14}}>PENDING APPOINTMENT</div>
          <div className='ms-5' style={{color: "#0AB39C"}}><FaRegArrowAltCircleUp/></div>
        </div>
        <div className='d-flex gap-2 opacity-50'>
          <div style={{fontSize: 24}}>
            <FaWaveSquare/>
          </div>
          <div style={{fontSize: 24, fontStyle: "italic"}}>20</div>
        </div>
      </div>
      <div className='py-4 px-3 border border-2'>
        <div className='d-flex gap-5 justify-content-center align-items-center'>
          <div className="opacity-50" style={{fontStyle: "italic", fontSize: 14}}>PAYMENT COMPLETE</div>
          <div className='ps-5' style={{color: "#F06548"}}><FaRegArrowAltCircleDown/></div>
        </div>
        <div className='d-flex gap-2 opacity-50'>
          <div style={{fontSize: 24}}>
            <FaCoins/>
          </div>
          <div style={{fontSize: 24, fontStyle: "italic"}}>90%</div>
        </div>
      </div>
      <div className='py-4 px-3 border border-2'>
        <div className='d-flex gap-5 justify-content-center align-items-center'>
          <div className="opacity-50" style={{fontStyle: "italic", fontSize: 14}}>OUTSTANDING B2B</div>
          <div className='ms-5' style={{color: "#0AB39C"}}><FaRegArrowAltCircleUp/></div>
        </div>
        <div className='d-flex gap-2 opacity-50'>
          <div style={{fontSize: 24}}>
            <FaTrophy/>
          </div>
          <div style={{fontSize: 24, fontStyle: "italic"}}>10%</div>
        </div>
      </div>
      <div className='py-4 px-3 border border-2'>
        <div className='d-flex gap-5 justify-content-center align-items-center'>
          <div className="opacity-50" style={{fontStyle: "italic", fontSize: 14}}>JOURNEY TIME</div>
          <div className='ps-5' style={{color: "#F06548"}}><FaRegArrowAltCircleDown/></div>
        </div>
        <div className='d-flex gap-2 opacity-50'>
          <div style={{fontSize: 24}}>
            <FaHeartbeat/>
          </div>
          <div style={{fontSize: 24, fontStyle: "italic"}}>01:35:59</div>
        </div>
      </div>
    </div>
  )
}