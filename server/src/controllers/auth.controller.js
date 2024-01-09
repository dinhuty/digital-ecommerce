const { StatusCodes, ReasonPhrases } = require('http-status-codes')
const { User } = require('../database/models')
const { comparePassword, jwtCreate, jwtVerify } = require('../utils')
const { jwtDecodeToken } = require('../utils/jwt')
const { NotFoundError,
    BadRequestError,
    UnauthorizedError,
    ConflictError } = require('../errors')

const register = async (req, res) => {
    try {
        const { email, password } = req.body;

        const isUserExist = await User.findOne({ where: { email } });
        if (isUserExist) {
            throw new ConflictError('Tài khoản đã tồn tại')
        }
        const newUser = {
            password,
            email,
        };
        await User.create(newUser);
        res.status(StatusCodes.CREATED).json({
            message: "Đăng ký thành công",
            status: StatusCodes.CREATED,
        });
    } catch (error) {
        console.log(error)
        if (error instanceof ConflictError) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                message: error.message,
                status: error.statusCode
            })
        }
        return res.status(StatusCodes.BAD_REQUEST).json({
            message: "Lỗi server",
            status: StatusCodes.BAD_REQUEST
        })
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (!user) {
            throw new NotFoundError('Tài khoản chưa được đăng ký')
        }
        const isMatch = await comparePassword(password, user.password);
        if (!isMatch) {
            throw new UnauthorizedError('Tài khoản hoặc mật khẩu không chính xác')
        }

        const { accessToken, refreshToken } = jwtCreate(user.id)

        //Tìm và sửa refreshToken
        await User.update({ refresh_token: refreshToken }, { where: { email } })

        return res.status(StatusCodes.OK).json({
            accessToken,
            refresh_token: refreshToken,
            user: {
                id: user.id,
                username: user.userName,
                email: user.email,
                isBlocked: user.isBlocked,
                avatarUrl: user.avatarUrl,
                isVerified: user.isVerified,
                isAdmin: user.isAdmin
            },
            message: ReasonPhrases.OK,
            status: StatusCodes.OK
        })
    } catch (error) {
        if (error instanceof NotFoundError) {
            return res.status(StatusCodes.NOT_FOUND).json({
                message: error.message,
                status: error.statusCode
            })
        }
        if (error instanceof UnauthorizedError) {
            return res.status(StatusCodes.UNAUTHORIZED).json({
                message: error.message,
                status: error.statusCode
            })
        }
        return res.status(StatusCodes.BAD_REQUEST).json({
            message: "Lỗi server",
            status: StatusCodes.BAD_REQUEST
        })
    }

}

const refreshToken = async (req, res) => {
    try {
        const authorization = (req.headers.authorization ||
            req.headers.Authorization)
        if (!authorization) {
            throw new UnauthorizedError('Không xác thực')
        }
        const accessTokenFromHeader = authorization.split(' ')[1]

        if (!accessTokenFromHeader) {
            throw new UnauthorizedError('Không xác thực')
        }
        const decoded = jwtDecodeToken(accessTokenFromHeader);
        if (!decoded) {
            throw new UnauthorizedError('AccessToken không hợp lệ')
        }
        const { refreshToken, email } = req.body;
        if (!refreshToken) {
            throw new NotFoundError('Không tìm thấy RefreshToken')
        }
        const user = await User.findOne({ where: { email } })
        if (!user) {
            throw new NotFoundError('Không tìm thấy user')
        }
        if (user.refresh_token !== refreshToken) {
            throw new UnauthorizedError('RefreshToken không hợp lệ')
        }
        const { accessToken } = jwtCreate(user.id)
        return res.status(StatusCodes.CREATED).json({
            message: "Successfully",
            status: StatusCodes.CREATED,
            accessToken
        })

    } catch (error) {
        if (error instanceof BadRequestError) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                message: error.message,
                status: error.statusCode
            })
        }
        if (error instanceof UnauthorizedError) {
            return res.status(StatusCodes.UNAUTHORIZED).json({
                message: error.message,
                status: error.statusCode
            })
        }
        return res.status(StatusCodes.BAD_REQUEST).json({
            message: "Lỗi server",
            status: StatusCodes.BAD_REQUEST
        })
    }
}
const profile = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findOne({ where: { id } });
        if (!user) {
            return res.status(StatusCodes.NOT_FOUND).json({
                message: "Không tìm thấy",
                status: StatusCodes.NOT_FOUND
            })
        }
        return res.status(StatusCodes.OK).json({
            id: user.id,
            username: user.user_name,
            email: user.email,
            isBlocked: user.isBlocked,
            avatarUrl: user.avatarUrl,
            isVerified: user.isVerified,
            isAdmin: user.isAdmin,
        })
    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            message: "Lỗi server",
            status: StatusCodes.BAD_REQUEST
        })
    }
}

module.exports = {
    register,
    login,
    refreshToken,
    profile
}