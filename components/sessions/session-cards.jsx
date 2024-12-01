import Image from 'next/image'
import SessionButton from '../buttons'

import '../../app/globals.css'

export default function SessionCards({ sessions }) {
  let widthClass = 'width-small'
  if (sessions.description.length > 100 && sessions.description.length <= 400) {
    widthClass = 'width-medium'
  } else if (sessions.description.length > 401) {
    widthClass = 'width-large'
  }

  return (
    <div className="flex flex-col w-full h-full max-w-sm">
      <div className="flex flex-col items-center">
        <Image
          className="w-60 h-60 mb-7 rounded-full shadow-lg"
          src={sessions.image}
          alt="Bonnie image"
          width={1000}
          height={1000}
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {sessions.sessionType}
        </h5>
        <span
          className={`text-center text-sm text-gray-500 dark:text-gray-400 leading-extra-relaxed my-4 ${widthClass}`}
        >
          {sessions.description}
        </span>
        <h6> {sessions.price !== 0 ? sessions.price + '₺' : ' '} </h6>
        <SessionButton />
      </div>
    </div>
  )
}
