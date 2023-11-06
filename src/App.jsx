import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {FaExclamation, FaExpand, FaGripLines, FaRegBell, FaRegMoon, FaSistrix } from 'react-icons/fa';
// import './App.css
import Sidebar from './component/sidebar';
import Statistic from './component/Statistic';
import Data from './component/Data';

function App() {

  return (
      <div className='d-flex' style={{height: "100%"}}>
        <Sidebar/>
        <div className='bg-light' style={{flex: 1}}>
          <div className='border border-2 d-flex justify-content-between'>
            <div className='px-3 py-2 d-flex align-items-center gap-3' style={{width: "300px"}}>
              <div>
                <FaGripLines/>
              </div>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              </form>
              <div>
                <FaRegBell
                />
              </div>
            </div>
            <div className='d-flex justify-content-center align-items-center gap-4'>
              <div className='d-flex gap-4'>
                <FaExpand/>
                <FaRegMoon/>
              </div>
              <div className='text-center d-flex flex-column'>
                <div>your ip address is:</div>
                <div className='p-1 rounded-2' style={{ color: "#25A0E2", backgroundColor: "#25A0E219"}}>172.16.101.105</div>
              </div>
              <div style={{backgroundColor: "#F3F3F9"}}>
                <div className='d-flex justtify-content-center align-items-center gap-3 m-3'>
                  <div style={{width: '30px', height: '30px'}}>
                    <img style={{objectFit: "cover", width: '100%', height: '100%', borderRadius: "50px"}} src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                  </div>
                  <div className='pe-2'>
                    <div>Donny Trisno</div>
                    <div className='opacity-50'>IT ADMINISTRATOR</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='border-bottom border-2'>
            <div className='px-3 py-2 d-flex justify-content-between align-items-center'>
              <div><strong>Registration</strong></div>
              <div>Registration {">"} <span className='opacity-50'>Lists</span></div>
            </div>
          </div>
          <div className='d-flex p-2 border-bottom border-2' style={{ backgroundColor: "#25A0E219", fontSize: 12}}>
              <div className='mx-3'>
               <FaExclamation/>
              </div>
              <div className='fst-italic' style={{color: "#1C78AA", fontWeight: 600}}>
                1/6 : Info : DR. Dr. Waldensius Girsang, SpM (K), Tidak Praktek, 02-11 OKTOBER 2023, krn Symposium @amsterdam, 2/6 : Dr.Florence Tidak Praktek 19-28 Oktober 2023 Cuti Info Zr.Kristin.
              </div>
            </div>
          <div className='p-3'>
            <Statistic/>
          </div>
            <Data/>
        </div>
      </div>
  )
}

export default App
