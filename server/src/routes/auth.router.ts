import { Router } from 'express'

export const auth = (router: Router): void => {
    router.post(
        '/auth/sign-in', (req, res) => {
            res.status(200).json("daub2")
        }
    )
}