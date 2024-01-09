const { StatusCodes, ReasonPhrases } = require('http-status-codes')
const { User, Product, Brand, sequelize, Category, Specification, ProductSpecification } = require('../database/models')
const { comparePassword, jwtCreate, jwtVerify } = require('../utils')
const { jwtDecodeToken } = require('../utils/jwt')
const { Op } = require("sequelize");
const { NotFoundError,
    BadRequestError,
    UnauthorizedError,
    ConflictError } = require('../errors')

const getAll = async (req, res, next) => {
    try {

        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;

        let categoryCondition = {};

        if (req.params && req.params.categoryName) {
            categoryCondition = {
                name: req.params.categoryName,
            };
        }
        const { rows, count } = await Product.findAndCountAll({
            attributes: [
                'id',
                'name',
                'description',
                'discountPercentage',
                'thumbUrl',
                'slug',
                'basePrice',
                [sequelize.literal('`brand`.`name`'), 'brandName'],
                [sequelize.literal('`category`.`name`'), 'categoryName'],
            ],
            include: [
                {
                    model: Brand,
                    as: 'brand',
                    attributes: []
                },
                {
                    model: Category,
                    as: 'category',
                    attributes: [],
                    where: categoryCondition,
                },
                // {
                //     model: ProductSpecification,
                //     as: 'productSpecs',
                //     attributes: ['specValue'],
                //     include: [
                //         {
                //             model: Specification,
                //             as: 'specification',
                //             attributes: ['specName'],
                //         }
                //     ]
                // }
            ],
            offset,
            limit,
            distinct: true,
        })
        totalPages = Math.ceil(count / limit);
        data = rows;
        total = count;
        return res.status(StatusCodes.OK).json({
            products: data,
            total: totalPages,
            skip: offset,
            limit,
            page
        })
    } catch (error) {
        console.log(error)
        return res.status(StatusCodes.BAD_REQUEST).json({
            message: "Lỗi server",
            status: StatusCodes.BAD_REQUEST
        })
    }
}

const createProduct = async (req, res, next) => {
    try {
        const { name, description, thumbUrl, basePrice, brandId, categoryId } = req.body
        const product = await Product.create({
            name, description, thumbUrl, basePrice, brandId, categoryId
        });
        return res.status(StatusCodes.CREATED).json({
            product,
            message: 'Thêm thành công sản phẩm',
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

module.exports = {
    getAll,
    createProduct
}