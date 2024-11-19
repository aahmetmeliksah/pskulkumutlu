'use client'

import { useState } from 'react'
import { sendContactForm } from '@/lib/api'
import { RiMailLine } from 'react-icons/ri'

export default function ContactMePage() {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [touched, setTouched] = useState({})
  const [formValues, setValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const onBlur = (e) =>
    setTouched((prev) => ({ ...prev, [e.target.name]: true }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      await sendContactForm(formValues)
      setValues({ name: '', email: '', subject: '', message: '' })
      setTouched({})
    } catch (error) {
      console.error('Error submitting form:', error)
      setError('Failed to send message. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl mx-4">
        <h2 className="text-3xl font-bold mb-6 text-center">İletişime Geçin</h2>
        <p className="text-gray-600 mb-8 text-center">
          Aşağıya lütfen iletişim bilgilerinizi ve ne hakkında iletişime geçmek
          istediğinizi kısaca belirtiniz
        </p>
        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700">İsim</label>
            <input
              name="name"
              type="text"
              value={formValues.name}
              onChange={handleChange}
              onBlur={onBlur}
              className={`w-full px-4 py-2 border-b-2 focus:outline-none focus:border-blue-500 ${
                touched.name && !formValues.name
                  ? 'border-red-500'
                  : 'border-gray-300'
              }`}
            />
            {touched.name && !formValues.name && (
              <p className="text-red-500 text-sm">İsim zorunlu</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700">Email adresi</label>
            <input
              name="email"
              type="email"
              value={formValues.email}
              onChange={handleChange}
              onBlur={onBlur}
              className={`w-full px-4 py-2 border-b-2 focus:outline-none focus:border-blue-500 ${
                touched.email && !formValues.email
                  ? 'border-red-500'
                  : 'border-gray-300'
              }`}
            />
            {touched.email && !formValues.email && (
              <p className="text-red-500 text-sm">Email zorunlu</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700">Konu</label>
            <input
              name="subject"
              type="text"
              value={formValues.subject}
              onChange={handleChange}
              onBlur={onBlur}
              className={`w-full px-4 py-2 border-b-2 focus:outline-none focus:border-blue-500 ${
                touched.subject && !formValues.subject
                  ? 'border-red-500'
                  : 'border-gray-300'
              }`}
            />
            {touched.subject && !formValues.subject && (
              <p className="text-red-500 text-sm">Konu zorunlu</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700">Mesaj</label>
            <textarea
              name="message"
              value={formValues.message}
              onChange={handleChange}
              onBlur={onBlur}
              placeholder="Mesajınızı giriniz..."
              className={`w-full px-4 py-2 border-b-2 focus:outline-none focus:border-blue-500 ${
                touched.message && !formValues.message
                  ? 'border-red-500'
                  : 'border-gray-300'
              }`}
            ></textarea>
            {touched.message && !formValues.message && (
              <p className="text-red-500 text-sm">Mesaj zorunlu</p>
            )}
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full flex items-center justify-center disabled:opacity-50"
            disabled={
              !formValues.name ||
              !formValues.email ||
              !formValues.message ||
              !formValues.subject
            }
          >
            <RiMailLine className="mr-2" />
            {isLoading ? 'Gönderiliyor...' : 'Gönder'}
          </button>
        </form>
      </div>
    </div>
  )
}
