import { Router } from 'express'

export default (router: Router): void => {
  router.post('/add-user', (req, res) => {
    res.json({ ok: 'ok' })
  })
}
