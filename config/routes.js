import express from 'express'

import { allTeachers, addTeacher, getSingleTeacher, updateTeacher, deleteTeacher, addReview, deleteReview } from '../controller/teacherscontroller.js'
import { secureRoute } from './secureRoute.js'
import { loginUser, registerUser } from '../controller/auth.js'

const router = express.Router()

router.route('/teachers')
  .get(allTeachers)
  .post(secureRoute, addTeacher)

router.route('/teachers/:id')
  .get(secureRoute, getSingleTeacher)
  .put(secureRoute, updateTeacher)
  .delete(secureRoute, deleteTeacher)

router.route('/teachers/:id/reviews')
  .post(secureRoute, addReview)

router.route('/teachers/:id/reviews/:reviewId')
  .delete(secureRoute, deleteReview)
  
router.route('/login')
  .post(loginUser)

router.route('/register')
  .post(registerUser)

export default router