import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative flex items-center justify-center h-screen">
      {/* HERO TEXT */}
      <div className="w-3/4 top-1/2 bg-white/20 z-10 py-40 px-0 my-28 ml-40 rounded-3xl text-center">
        <h1 className="text-center text-7xl mb-10">
          <span className="text-black">
            Yaşamınıza <br /> Denge <br /> Getirin
          </span>
        </h1>
        <p className="w-3/5 mx-auto text-lg leading-9 mt-14 rounded-3xl">
          Kendinizi köşeye sıkışmış, kaybolmuş veya bunalmış mı hissediyorsunuz?
          Hepimiz zor günler geçirebiliriz ama mutlulukla dolu yepyeni bir
          yaşama başlamak için doğru adımı atabilirsiniz. Deneyimli bir klinik
          psikolog olarak duygusal ve psikolojik ihtiyaçlarınızı anlamak,
          yaşamın zorluklarıyla başa çıkmanıza ve iç dengenizi bulmanıza
          yardımcı olmak için buradayım.
        </p>
      </div>
      {/* HERO IMAGE */}
      <div className="image-container w-full h-full">
        <Image
          src="/assets/balance-stones.jpg"
          alt="balance stones"
          className="z-0"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          quality={100}
        />
      </div>
    </div>
  )
}
