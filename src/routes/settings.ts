import { Router } from 'express';

const router = Router();

// http://localhost:3000/api/settings/echo?q=1
router.get('/echo', (req, res) => {
  res.jsonp(req.query);
});

module.exports = router;
