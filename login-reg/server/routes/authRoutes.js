import express from 'express'
import { login, logout, resistor } from '../Controllers/authController'

authRoutes = express.Router()

authRoutes.post('/resistor', resistor)
authRoutes.post('/login', login)
authRoutes.post('/logout', logout)

export default authRoutes