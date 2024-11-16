export const sendContactForm = async (data) => {
  fetch('/api/contact-form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (!res.ok) throw new Error('Failed to send message')
    return res.json()
  })
}
