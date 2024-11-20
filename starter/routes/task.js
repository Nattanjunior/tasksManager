import express from 'express'
const router = express.Router();

router.route('/').get((req, res) => {
  res.json({message: 'all items'})
})

export default router

