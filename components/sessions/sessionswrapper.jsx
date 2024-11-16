import SessionCards from './session-cards'

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
    <div className="flex justify-center items-center min-h-screen space-x-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sessionsData.map((session) => {
          return (
            <div key={session.id} className="flex justify-center mx-48">
              <SessionCards sessions={session} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
