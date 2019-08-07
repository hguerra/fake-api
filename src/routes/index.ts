import { Router } from 'express';

const router = Router();

router.use('/settings', require('./settings'));

router.use((err: any, req: any, res: any, next: any) => {
  if (err.name === 'ValidationError') {
    return res.status(422).json({
      errors: Object.keys(err.errors).reduce((errors: any, key) => {
        errors[key] = err.errors[key].message;

        return errors;
      }, {})
    });
  }

  return next(err);
});

module.exports = router;
