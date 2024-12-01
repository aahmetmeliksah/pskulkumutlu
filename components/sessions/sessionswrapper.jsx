import { Caveat } from 'next/font/google'

import SessionCards from './session-cards'

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function SessionsWrapper() {
  const sessionsData = [
    {
      id: 1,
      sessionType: 'Ön Görüşme',
      description: `Ücretsiz ön görüşme fırsatıyla, sizinle tanışıp ihtiyaçlarınızı dinlemek ve size en iyi çözümü sunmak istiyorum. 
      Bu 15 dakikalık görüşme,size nasıl yardımcı olabileceğimi anlamanın ilk adımıdır ve tamamen ücretsizdir. 
      Sizinle çalışma sürecimizin temelini oluşturacak bu ön görüşme için benimle iletişime geçmekten çekinmeyin.`,
      price: 0,
      image: '/assets/therapy-introduction.jpg',
    },
    {
      id: 2,
      sessionType: 'Bireysel Seans',
      description: `Bireysel Seans hizmeti, size özel olarak sunulan 50 dakikalık bir danışmanlık sürecidir. 
      Bu süre boyunca sizinle birlikte, yaşadığınız zorlukları anlamak, hedeflerinizi belirlemek
      ve bu hedeflere ulaşmak için bir plan oluşturmak için bir araya geliriz. 
      Her seans, size destek olmak ve gelişiminizi desteklemek için tasarlanmıştır. 
      Size özel bir rehberlik sunmak ve daha sağlıklı bir yaşam yolunda ilerlemenize yardımcı olmak için buradayım.`,
      price: 900,
      image: '/assets/private-therapy-image.jpg',
    },
  ]

  return (
    <div className="flex flex-col justify-center items-center min-h-screen space-x-4 mt-10 sm:mt-0">
      <h1 className="text-4xl sm:mb-14 sm:text-5xl">Düşünce Odaklı Yaklaşım</h1>
      <h4 className={`${caveat.className} text-xl my-5`}>Yaşam İçin Destek</h4>
      <div className="md:flex md:flex-col lg:flex lg:flex-row lg:space-x-52">
        <SessionCards sessions={sessionsData[0]} />
        <SessionCards sessions={sessionsData[1]} />
      </div>
    </div>
  )
}
