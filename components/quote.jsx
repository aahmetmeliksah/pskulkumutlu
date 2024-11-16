import Image from 'next/image'

export default function Quote() {
  return (
    <div className="flex justify-center p-28 bg-black text-white">
      <div className="mr-24 text-center flex flex-col justify-center">
        <p className="text-2xl mb-8">"Hayatımız düşüncelerimizin eseridir."</p>

        <p>
          <span>Marcus Aurelius</span>
        </p>
      </div>
      <div>
        <Image src="/assets/quote-flower.webp" width={450} height={450} />
      </div>
    </div>
  )
}
