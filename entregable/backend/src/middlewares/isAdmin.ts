import { Request, Response, NextFunction } from 'express';

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
    const isAdminVal = true
    if (!isAdminVal) {
        res.status(401).json({ error: 401, message: 'ruta no autorizada' })
    } else {
        next()
    }
}