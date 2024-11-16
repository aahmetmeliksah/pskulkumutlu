import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'

export default function FooterComp() {
  return (
    <footer className="bottom-0 z-20 bg-gray-50 flex flex-col items-center p-8 shadow-lg">
      <div className="flex flex-col items-center space-y-4">
        <div className="text-gray-600">
          <a
            href="mailto:pskulkumutlu@gmail.com"
            className="flex items-center space-x-2 hover:text-blue-500 transition duration-300"
          >
            <EmailIcon />
            <span>pskulkumutlu@gmail.com</span>
          </a>
        </div>
        <ul className="flex space-x-6">
          <li>
            <a
              href="https://tr.linkedin.com/in/ulkumutlu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon className="hover:text-blue-700 transition duration-300" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/pskulkumutlu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="hover:text-pink-500 transition duration-300" />
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/66927828779"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="hover:text-green-500 transition duration-300" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
