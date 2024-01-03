const { StatusCodes, ReasonPhrases } = require('http-status-codes')
const { User } = require('../database/models')
const { comparePassword, jwtCreate, jwtVerify } = require('../utils')
const { jwtDecodeToken } = require('../utils/jwt')

const register = async (req, res) => {
    try {
        const { email, password } = req.body;

        const isUserExist = await User.findOne({ where: { email } });
        if (isUserExist) {
            return res.status(StatusCodes.CONFLICT).json({
                message: "Tài khoản đã tồn tại",
                status: StatusCodes.CONFLICT
            })
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
            return res.status(StatusCodes.NOT_FOUND).json({
                message: "Tài khoản chưa được đăng ký",
                status: StatusCodes.NOT_FOUND,
            });
        }
        const isMatch = await comparePassword(password, user.password);
        if (!isMatch) {
            return res.status(StatusCodes.UNAUTHORIZED).json({
                message: "Tài khoản hoặc mật khẩu không chính xác",
                status: StatusCodes.UNAUTHORIZED,
            });
        }

        const { accessToken, refreshToken } = jwtCreate(user.id)

        //Tìm và sửa refreshToken
        await User.update({ refreshToken: refreshToken }, { where: { email } })

        return res.status(StatusCodes.OK).json({
            data: {
                accessToken,
                refreshToken: refreshToken,
                user: {
                    id: user.id,
                    username: user.userName,
                    email: user.email,
                    is_blocked: user.isBlocked,
                    avatar_url: user.avatarURL,
                    is_verified: user.isVerified,
                    is_admin: user.isAdmin
                }
            },
            message: ReasonPhrases.OK,
            status: StatusCodes.OK
        })
    } catch (error) {
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
            return res.status(StatusCodes.BAD_REQUEST).json({
                message: "Không xác thực",
                status: StatusCodes.BAD_REQUEST
            })
        }
        const accessTokenFromHeader = authorization.split(' ')[1]

        if (!accessTokenFromHeader) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                message: "Không tìm thấy accessToken",
                status: StatusCodes.BAD_REQUEST
            })
        }
        const decoded = jwtDecodeToken(accessTokenFromHeader);
        if (!decoded) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                message: "AccessToken không hợp lệ",
                status: StatusCodes.BAD_REQUEST
            })
        }
        const { refreshToken, email } = req.body;
        if (!refreshToken) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                message: "Không tìm thấy refreshToken",
                status: StatusCodes.BAD_REQUEST
            })
        }
        const user = await User.findOne({ where: { email } })
        if (!user) {
            return res.status(StatusCodes.UNAUTHORIZED).json({
                message: "Không tìm thấy user",
                status: StatusCodes.UNAUTHORIZED
            })
        }
        if (user.refreshToken !== refreshToken) {
            console.log(user.refreshToken)
            console.log(refreshToken)
            return res.status(StatusCodes.BAD_REQUEST).json({
                message: "RefreshToken không hợp lệ",
                status: StatusCodes.BAD_REQUEST
            })
        }
        const { accessToken } = jwtCreate(user.id)
        return res.status(StatusCodes.CREATED).json({
            message: "Successfully",
            status: StatusCodes.CREATED,
            accessToken
        })

    } catch (error) {
        console.log(error)
        return res.status(StatusCodes.BAD_REQUEST).json({
            message: "Lỗi server",
            status: StatusCodes.BAD_REQUEST
        })
    }
}


module.exports = {
    register,
    login,
    refreshToken
}