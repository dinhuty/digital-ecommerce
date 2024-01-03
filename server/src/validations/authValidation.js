const { StatusCodes, ReasonPhrases } = require('http-status-codes')
const winston = require('winston')
const validator = require('validator')

const authValidation = {
    login: (req, res, next) => {
        try {
            if (!req.body.email || !req.body.password) {
                return res.status(StatusCodes.BAD_REQUEST).json({
                    message: "Thông tin không hợp lệ",
                    status: StatusCodes.BAD_REQUEST
                })
            }
            let normalizedEmail =
                req.body.email && validator.normalizeEmail(req.body.email)
            if (normalizedEmail) {
                normalizedEmail = validator.trim(normalizedEmail)
            }

            if (
                !normalizedEmail ||
                !validator.isEmail(normalizedEmail, { allow_utf8_local_part: false })
            ) {
                return res.status(StatusCodes.BAD_REQUEST).json({
                    message: "Email không hợp lệ",
                    status: StatusCodes.BAD_REQUEST
                })
            }
            Object.assign(req.body, { email: normalizedEmail })

            return next()
        } catch (error) {
            winston.error(error)

            return res.status(StatusCodes.BAD_REQUEST).json({
                message: "Lỗi server",
                status: StatusCodes.BAD_REQUEST
            })
        }
    },

    register: (req, res, next) => {
        try {
            if (
                !req.body.email ||
                !req.body.password
            ) {
                return res.status(StatusCodes.BAD_REQUEST).json({
                    message: "Thông tin không hợp lệ",
                    status: StatusCodes.BAD_REQUEST
                })
            }

            let normalizedEmail =
                req.body.email && validator.normalizeEmail(req.body.email)
            if (normalizedEmail) {
                normalizedEmail = validator.trim(normalizedEmail)
            }

            if (
                !normalizedEmail ||
                !validator.isEmail(normalizedEmail, { allow_utf8_local_part: false })
            ) {
                return res.status(StatusCodes.BAD_REQUEST).json({
                    message: "Email không hợp lệ",
                    status: StatusCodes.BAD_REQUEST
                })
            }

            if (!validator.isLength(req.body.password, { min: 6, max: 48 })) {
                return res.status(StatusCodes.BAD_REQUEST).json({
                    message: "Mật khẩu tối thiểu 6 kí tự"
                })
            }

            Object.assign(req.body, { email: normalizedEmail })

            return next()
        } catch (error) {
            winston.error(error)

            return res.status(StatusCodes.BAD_REQUEST).json({
                message: "Lỗi server",
                status: StatusCodes.BAD_REQUEST
            })
        }
    },

}

module.exports = authValidation