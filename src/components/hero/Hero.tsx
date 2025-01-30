import { Stars } from "./";


export const Hero = () => {
  return (
    <div className="relative bg-gray-900 py-20 overflow-hidden">
      <Stars />
      <div className="container flex flex-col items-center gap-10 mx-auto px-4 text-center relative z-10 pt-10 md:pt-14">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Navigate the web with Compass</h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">Shorten URLs and generate QR Codes in seconds</p>
        <div className="flex justify-center space-x-4">
          <button
            className="text-3xl py-2 px-5 bg-white text-primary hover:bg-transparent hover:text-white font-bold transition-colors"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}