import Image from 'next/image'

export default function Aboutme() {
  return (
    <div className="bg-aboutMeBgColor flex items-center justify-between p-96">
      <div className="w-2/3">
        <h2 className="mb-20 text-5xl">Daha Fazla Bilgi Edinin</h2>
        <h3 className="mb-20 text-2xl font-serif italic">
          Güvenilir Bir Psikolojik Danışman
        </h3>

        <p className="leading-8 w-8/12">
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
      <div className="w-1/2 relative h-96 -mt-96">
        <Image
          src="/assets/coffee-mug.jpg"
          className="rounded"
          alt="Coffe Mug"
          height={700}
          width={700}
        />
      </div>
    </div>
  )
}
