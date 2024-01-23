import { Request, Response } from "express";
import User from "../../pojos/auth/user";
import { signJWT } from "../../services/auth";
import ROLE from "../../../helper/role";
const bcryptjs = require("bcryptjs");

export const AddUser = async (req: Request, res: Response) => {
    try {
        const { firstName, lastName, email, number, designation, companyName, profEmail, address, password } = req.body;
        console.log(req.body);

        if (!firstName || !lastName || !email || !number || !designation || !companyName || !profEmail || !address || !password) {
            return res.status(400).json({ success: false, message: "* All fields are required" });
        }
        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ success: false, message: "* Email already exists" });
        }
        const existingNumber = await User.findOne({ number });
        if (existingNumber) {
            return res.status(400).json({ success: false, message: "* Number already exists" });
        }
        const hashedPassword = await bcryptjs.hash(password, 10);
        const saveUser = await User.create({ firstName, lastName, email, number, designation, companyName, profEmail, address, password: hashedPassword });
        res.send(saveUser)

    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export const LoginUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return res.status(400).json({ success: false, message: 'User not found' });
        }
        if (existingUser.role !== ROLE.Admin) {
            return res.status(400).json({ success: false, message: 'Invalid credentials' });
        }
        const checkPassword = await bcryptjs.compare(password, existingUser.password);
        if (!checkPassword) {
            return res.status(400).json({ success: false, message: 'Invalid password' });
        }
        const payload = {
            user: {
                id: existingUser._id,
                firstName: existingUser.firstName,
                lastName: existingUser.lastName,
                role: existingUser.role,
                email: existingUser.email,
                expiresIn: process.env.LOGIN_EXPIRATION,
            },
        };
        console.log({ payload });
        const token = signJWT(payload);
        res.cookie('token', token, {
            httpOnly: true,
            // 7 days expiry...
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        }).json({
            success: true,
            token,
        });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};


export const CheckToken = async (req: Request, res: Response) => {
    res.json("Abid Husain....")
}
