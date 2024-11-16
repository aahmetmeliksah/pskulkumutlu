import Link from 'next/link'
import Image from 'next/image'

import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

import Drawer from '../drawer'

export default function MainHeader() {
  return (
    <div className="sticky top-1 z-20 bg-gray-50 flex justify-between items-center p-4 shadow-y-axis-only">
      <div className="flex items-center">
        <div className="image-container">
          <Link href="/">
            <Image
              src="/assets/img-profile.webp"
              width={70}
              height={70}
              alt="website logo and picture of the psychologist"
            />
          </Link>
        </div>
        <div className="ml-4">
          <h3>Klinik Psikolog Ülkü Mutlu Akdeniz</h3>
          <p>
            Psikolojik destek almak sağlığınıza yatırım yapmanın cesur bir
            adımıdır.
          </p>
        </div>
      </div>
      <div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Ana Sayfa</Link>
          </li>
          <li>
            <Drawer />
          </li>
          <li>
            <a href="https://tr.linkedin.com/in/ulkumutlu" target="_blank">
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/pskulkumutlu/" target="_blank">
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a href="https://wa.me/66927828779" target="_blank">
              <WhatsAppIcon />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
