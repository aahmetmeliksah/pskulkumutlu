import Image from 'next/image'
import { Caveat } from 'next/font/google'

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function Quote() {
  return (
    <div className="grid justify-center py-7 px-3 sm:p-28 bg-black text-white">
      {/*  */}
      {/*  */}
      {/*  */}
      <div className="col-start-1 row-start-1 py-5 px-10 sm:py-0 sm:px-0 mt-20 ml-10 sm:mt-32 mr-24 sm:text-center sm:justify-center z-10">
        <p className="text-2xl mb-8">"Hayatımız düşüncelerimizin eseridir."</p>

        <p>
          <span className={`${caveat.className} text-xl`}>Marcus Aurelius</span>
        </p>
      </div>
      {/*  */}
      {/*  */}
      {/*  */}
      <div className="col-start-1 row-start-1 sm:col-start-2">
        <Image
          src="/assets/quote-flower.webp"
          width={600}
          height={600}
          className="mr-36 object-cover sm:mr-0 sm:h-full sm:w-full"
        />
      </div>
    </div>
  )
}
