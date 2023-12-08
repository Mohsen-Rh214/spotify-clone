import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'
import prisma from '../../lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const salt = bcrypt.genSaltSync(10);
    const { email, password } = req.body

    let user

    try {
        user = await prisma.user.create({
            data: {
                email,
                password: bcrypt.hashSync(password, salt),
            }
        })
    } catch (e) {
        if (e.code === 'P2002' && e.meta?.target?.includes('email')) {
            // Handle duplicate email error
            res.status(400).json({ error: 'Email already exists.' });
            return;
        }
        res.status(401).json({ error: `${e}` });
        return;
    }
    

    const token = jwt.sign({
        email: user.email,
        id: user.id,
        time: Date.now()
    },
        'hello',
        { expiresIn: '8h' }
    )

    res.setHeader(
        'Set-Cookie',
        cookie.serialize('MOHSEN_ACCESS_TOKEN', token, {
            httpOnly: true,
            maxAge: 8 * 60 * 60,
            path: '/',
            sameSite: 'lax',
            secure: process.env.NODE_ENV === 'production',
        })
    )

    res.json(user)
}