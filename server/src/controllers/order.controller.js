const { Order, OrderDetail, Address } = require('../database/models')
const { Op } = require("sequelize");
const { NotFoundError,
    BadRequestError,
    UnauthorizedError,
    ConflictError } = require('../errors')
const { StatusCodes, ReasonPhrases } = require('http-status-codes')


const createOrder = async (req, res, next) => {
    try {
        await new Promise(resolve => setTimeout(resolve, 500));

        const userId = req.id
        const {
            carts,
            address,
            addressUserId,
            paymentId,
            userName,
            phoneNumber
        } = req.body
        console.log(carts)

        let addressId = addressUserId
        if (!addressId) {
            const createAddress = await Address.create(address)
            addressId = createAddress.id
        }

        const createOrder = await Order.create({
            userId: userId,
            addressId: addressId,
            paymentId: paymentId,
            userName: userName,
            phoneNumber: phoneNumber
        })
        const orderDetailData = carts.map(cartItem => ({
            quantity: cartItem.quantity,
            productVariantId: cartItem.productVariant.id,
            userId: userId,
            orderId: createOrder.id
        }));
        const createdOrderDetails = await OrderDetail.bulkCreate(orderDetailData);

        res.status(StatusCodes.CREATED).json({
            message: "Đặt hàng thành công",
            status: StatusCodes.CREATED
        })
    } catch (error) {
        console.log(error)
        return res.status(StatusCodes.BAD_REQUEST).json({
            message: "Lỗi server",
            status: StatusCodes.BAD_REQUEST
        })
    }
}

const getUserOrders = async (req, res, next) => {
    try {
        const userId = req.id
    } catch (error) {
        console.log(error)
        return res.status(StatusCodes.BAD_REQUEST).json({
            message: "Lỗi server",
            status: StatusCodes.BAD_REQUEST
        })
    }

}
module.exports = {
    createOrder,
    getUserOrders
}