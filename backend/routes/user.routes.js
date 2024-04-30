import express from 'express'
import protectRoute from '../middlewares/protectRoute.js'
import { getUsersForSidebar } from '../controllers/user.controllers.js'

const router = express()

router.get("/" , protectRoute, getUsersForSidebar)


export default router