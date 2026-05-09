import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import userModel from '../models/userModel'

export const resistor = async (req, res) =>{
    const {name, email, password} = req.body

    if (!name || !email || !password) {
        return res.json({success: false, message: "Missing details"})
    }
    try {

        const existUser = await userModel.findone()
        if (existUser) {
            return res.json({success:false, message: 'email already exist'})
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        
        const user = new userModel({name, email, password: hashedPassword})
        await user.save()

    } catch (error) {
        res.json({success: false, message: error.message})
    }

} 