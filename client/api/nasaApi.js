import request from 'superagent'

const apodApi = 'https://api.nasa.gov/planetary/apod?api_key=UQFDU8qGbafUolXayLU0J4Xwtu2T5rrQn8ztn8Fg'

export function getApod () {
  return (
    request.get(`${apodApi}`)
      .then(apodres => {
        return apodres.body
      })
      .catch(err => {
        if (err) throw Error('Cannot get astronomy picture of the day')
      })
  )
}
