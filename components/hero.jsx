import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative flex items-center justify-center h-screen mt-2 sm:mt-0">
      {/* HERO TEXT */}
      <div className="absolute text-center sm:inset-0 z-10 bg-white/40 h-[46rem] sm:w-2/4 sm:h-fit sm:my-14 sm:ml-14 sm:px-20">
        <h1 className="text-center text-7xl my-20">
          <span className="text-black">
            Yaşamınıza <br /> Denge <br /> Getirin
          </span>
        </h1>
        <p className="w-3/4 mx-auto text-lg leading-9 my-14 font-medium">
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
