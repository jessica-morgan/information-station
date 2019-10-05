import request from 'superagent'

export function getQuatumPhysicsNewsFeed () {
  return (
    request.get('http://localhost:3000/api/v1/quatumPhysicsNews')
      .then(res => {
        return res.body
      })
      .catch(err => {
        if (err) throw Error('Cannot get quantum physics feed')
      })
  )
}

export function getQuatumComputingNewsFeed () {
  return (
    request.get('http://localhost:3000/api/v1/quatumComputingNews')
      .then(res => {
        return res.body
      })
      .catch(err => {
        if (err) throw Error('Cannot get quantum computing feed')
      })
  )
}

export function getSpaceNewsFeed () {
  return (
    request.get('http://localhost:3000/api/v1/spaceNews')
      .then(res => {
        return res.body
      })
      .catch(err => {
        if (err) throw Error('Cannot get space news feed')
      })
  )
}

export function getNZGeneralHeadlines () {
  return (
    request.get('http://localhost:3000/api/v1/NZGeneralHeadlines')
      .then(res => {
        return res.body
      })
      .catch(err => {
        if (err) throw Error('Cannot get nz general headlines feed')
      })
  )
}
