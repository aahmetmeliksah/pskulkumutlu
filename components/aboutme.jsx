import Image from 'next/image'
import { Caveat } from 'next/font/google'

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function AboutMe() {
  return (
    <div className="bg-aboutMeBgColor flex flex-col  h-fit py-7 items-center justify-center -mt-3 sm:mt-0 sm:flex-row sm:p-16">
      <div className="mb-10 sm:mb-0 sm:mr-14 object-fill">
        <Image
          src="/assets/coffee-mug.jpg"
          alt="Coffee Mug"
          height={400}
          width={400}
          className="sm:shadow-lg object-cover mt-5 h-80 w-[28rem] sm:h-full sm:mt-0 sm:w-9/12"
        />
      </div>

      <div className="max-w-lg text-center sm:text-left sm:-ml-28">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">
          Daha Fazla Bilgi Edinin
        </h2>
        <h3 className={`${caveat.className} text-xl italic mb-4 text-gray-600`}>
          Güvenilir Bir Psikolojik Danışman
        </h3>
        <p className="text-gray-700 leading-9">
          2022 yılından beri yaşamlarındaki engelleri aşmaları için
          danışanlarıma yardımcı oluyorum. İstanbul Sabahattin Zaim Üniversitesi
          psikoloji bölümünü bitirdikten sonra İstanbul Gelişim Üniversitesi
          klinik psikoloji yüksek lisans programını başarıyla tamamladım.
          Bütüncül bir yaklaşımı benimseyen ve çeşitli terapi ekollerinden
          faydalanan bir klinik psikoloğum. Bilişsel Davranışçı Terapi ve Çözüm
          Odaklı Terapi tekniklerini uyguluyorum. Danışanlarımın ihtiyaçlarına
          uygun olarak terapi sürecini kişiselleştiriyorum. Terapi ve
          danışmanlık hizmetlerimden yararlanmak için ücretsiz ön görüşme
          oluşturabilir ve randevu alabilirsiniz. Sevgiler.
        </p>
      </div>
    </div>
  )
}
