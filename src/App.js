import React from "react";
import Card from "./Card";
import "./App.css"
// import car from 

function App() {
  return (
    <div className=" w-95 lg:w-95 xl:w-3/4 m-auto h-min-screen ">
      <div className="w-full h-32 flex items-center" >
        <p className="text-white text-2xl" >SPECS</p>
      </div>
      <div className="w-full h-full flex flex-col " >
        <h4 className='tittle text-sm text-white text-custom-gray font-medium tracking-tight' >PERFORMANCE</h4>
        <div className="w-full h-full flex justify-between items-start flex-wrap md:justify-start " >
          {
            performance.map((item,index)=>(
            // <div className='w-50 mr-8  mt-1 flex flex-col items-start ' key={index} >
            //   <p className='key text-custom-xs text-custom-gray ' >{item.key}</p>
            //   <p className=' value text-custom-xs ' >{item.value}</p>
            // </div>
              <Card key={index} tittle={item.key} value={item.value} />
            ))
          } 
        </div>
      </div>
      <hr className="border-1 border-zinc-800 mt-12 mb-12" />
      <div className="w-full flex flex-col" >
        <h4 className='tittle text-sm text-white text-slate-400 font-medium tracking-tight' >DIMENSIONS</h4>
        <div className="w-full mt-4 flex flex-col-reverse sm:flex-row" >
          <div className="w-full sm:w-3/5  h-full md:h-64 flex justify-around sm:justify-between  items-center flex-wrap ">
          {
            DIMENSIONS.map((item,index)=>(
              <Card key={index} tittle={item.key} value={item.value} />
            ))
          } 
          </div>
          <div className="w-full sm:w-2/5 py-8 " >
            <img src="/car.png" alt="not found" className="w-full m-auto" />
          </div>
        </div>
      </div>
      <hr className="border-1 border-zinc-800 mt-12 mb-12" />
      <div className="w-full h-full" >
        <h4 className='tittle text-sm text-white text-slate-400 font-medium tracking-tight' >CHARGING</h4>
        <div className="w-full h-24 flex items-center justify-between sm:justify-start   flex-wrap ">
        {
          Charging.map((item,index)=>(
          //   <div className='w-24 px-20 bg-red-400' key={index} >
          //   <p className='text-sm text-white text-slate-400' >{item.key}</p>
          //   <p className='text-sm text-white text-slate-400' >{item.value}</p>
          // </div>
            <Card key={index} tittle={item.key} value={item.value} />
          ))
        }
        </div>
        <hr className="border-1 border-zinc-800 mt-12 mb-12" />
      </div>
      <div className="w-full h-full ">
        <h4 className='tittle text-sm text-white text-slate-400 font-medium tracking-tight'>WARRANTY</h4>
        <div className="w-full h-full flex justify-between sm:justify-start items-center flex-wrap ">
        {
          WARRANTY.map((item,index)=>(
            <Card key={index} tittle={item.key} value={item.value} />
          ))
        }
        </div>
      </div>
    </div>
  );
}

export default App;

const performance = [
  {
    key:"Speed",
    value:"1,200 FT/MIN"
  },
  {
    key:"Capacity",
    value:"15 PERSONS OR 2,000 LBS"
  },
  {
    key:"Acceleration",
    value:"3 SEC† FROM START TO MAX SPEED"
  },
  {
    key:"Drive",
    value:"GEARED TRACTION SYSTEM"
  },
  {
    key:"Travel",
    value:"UP TO 50 FLOORS"
  },
  {
    key:"Emergency Features",
    value:"AUTOMATIC RESCUE DEVICE (ARD) FIRE SERVICE OPERATION"
  },
  {
    key:"Safety",
    value:"OVERSPEED GOVERNOR SAFETY BRAKE SYSTEM"
  },
]

const DIMENSIONS =[
  {
    key:"Weight",
    value:"2,500 LBS"
  },
  {
    key:"Interior Size",
    value:"80 SQ FT"
  },
  {
    key:"Doors",
    value:"VERTICAL SLIDING DOORS"
  },
  {
    key:"Seating",
    value:"N/A"
  },
  {
    key:"Displays",
    value:"7” TOUCHSCREEN CONTROL PANEL"
  },
  {
    key:"Overall Width",
    value:"48"
  },
  {
    key:"Overall Height",
    value:"90"
  },
  {
    key:"Overall Depth",
    value:"60 "
  },
]

const Charging = [
  {
    key:"Power Source",
    value:"ELECTRIC"
  },
  {
    key:"Charging Speed",
    value:"FULL CHARGE IN 8 HOURS "
  },
]

const WARRANTY = [
  {
    key:"Basic System",
    value:"3 YEARS OR 30,000 TRIPS, WHICHEVER COMES FIRST"
  },
  {
    key:"Electrical Components",
    value:"5 YEARS OR 50,000 HOURS OF OPERATION, WHICHEVER COMES FIRST "
  },
]