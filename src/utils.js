export const get = async (url) => {
  const request = await fetch(url)
  const response = await request.json()
  return response
}

export const post = async (url, body) => {
  const request = await fetch(url, 
    {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  )
  const response = await request.json()
  return response
}