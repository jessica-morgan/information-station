import request from 'superagent'

const apod = 'https://api.nasa.gov/planetary/apod?api_key=UQFDU8qGbafUolXayLU0J4Xwtu2T5rrQn8ztn8Fg'

export function getInfo () {
  return (
    request.get(`${apod}`)
      .then(apodres => {
        return apodres.body
      }))
}
