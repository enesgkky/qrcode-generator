import QRCode from "qrcode.react"
import { useState } from "react"

function App() {

  const [value, setValue] = useState("")

  const downloadHandle = () => {
    const canvas = document.getElementById('canvasId');
    const qrCodeURL = canvas.toDataURL('image/png');
    const downloadLink = document.createElement('a');
    downloadLink.href = qrCodeURL;
    downloadLink.download = 'qrcode.png';
    downloadLink.click();
  }

  return (
    <>
      <div className="h-screen w-full bg-[#18181b] flex items-center justify-center text-white">
        <div className="bg-gray-900 border border-yellow-500 rounded-md p-4">
          <h1 className="text-lg text-center py-4 font-semibold">QR Code Generator</h1>
          <input value={value} onChange={e => setValue(e.target.value)} type="text" className="bg-gray-700 outline-none text-white p-2 rounded-md min-w-[20rem] transition-all focus:ring-2 ring-inset ring-yellow-500 " placeholder="Input text" />
          <div className="flex items-center justify-center py-8">
            <QRCode size={256} id="canvasId" value={value ? value : "https://enesgokkaya.com"} renderAs="canvas" />
          </div>
          <button onClick={downloadHandle} className="bg-yellow-400 w-full hover:bg-yellow-200 transition-colors py-3 rounded-md text-black">
            Download
          </button>
        </div>
      </div>
    </>
  )
}

export default App
