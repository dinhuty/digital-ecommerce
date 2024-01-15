const { StatusCodes, ReasonPhrases } = require('http-status-codes')
const { User, Product, Brand, sequelize, Category, Specification, ProductSpecification, ProductVariant, Color, Memory } = require('../database/models')
const { comparePassword, jwtCreate, jwtVerify } = require('../utils')
const { jwtDecodeToken } = require('../utils/jwt')
const { Op } = require("sequelize");
const { queryCondition } = require('../utils/queryCondition')
const { NotFoundError,
    BadRequestError,
    UnauthorizedError,
    ConflictError } = require('../errors')

const getAll = async (req, res, next) => {
    try {
        // test loading FE
        await new Promise(resolve => setTimeout(resolve, 500));
        // pagination
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;

        // sort options
        const { order, dir } = req.query
        const sort = (order && dir) ? [[order, dir]] : []
        // query conditions
        const categoryCondition = queryCondition(req.params?.categoryName, 'name');
        const brandCondition = queryCondition(req.query?.brand, 'nameAscii')

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
                    attributes: [],
                    where: brandCondition
                },
                {
                    model: Category,
                    as: 'category',
                    attributes: [],
                    where: categoryCondition,
                }
            ],
            order: sort,
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
        const { name,
            description,
            thumbUrl,
            basePrice,
            brandId,
            discountPercentage,
            categoryId
        } = req.body
        const product = await Product.create({
            name,
            description,
            thumbUrl,
            basePrice,
            brandId,
            discountPercentage,
            categoryId
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
const getProductBySlug = async (req, res, next) => {
    try {
        const { slug } = req.params
        const product = await Product.findOne({
            attributes: [
                'id',
                'name',
                'description',
                'discountPercentage',
                'thumbUrl',
                'slug',
                'basePrice',
                [sequelize.literal('brand.name'), 'brandName'],
                [sequelize.literal('category.name'), 'categoryName'],
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
                },
                {
                    model: ProductSpecification,
                    as: 'productSpecs',
                    attributes: ['specValue'],
                    include: [
                        {
                            model: Specification,
                            as: 'specification',
                            attributes: ['specName'],
                        }
                    ]
                },
                {
                    model: ProductVariant,
                    as: 'productVariants',
                    attributes: ['id','stock', 'price'],
                    include: [
                        {
                            model: Color,
                            as: 'color',
                            attributes: {
                                exclude: ['createdAt', 'updatedAt']
                            }
                        },
                        {
                            model: Memory,
                            as: 'memory',
                            attributes: {
                                exclude: ['createdAt', 'updatedAt']
                            }
                        },
                    ]
                }
            ],
            where: { slug }
        })
        return res.status(StatusCodes.OK).json(product)
    } catch (error) {
        console.log(error)
        return res.status(StatusCodes.BAD_REQUEST).json({
            message: "Lỗi server",
            status: StatusCodes.BAD_REQUEST
        })
    }
}

const updateProduct = async (req, res, next) => {

}

const deleteProduct = async (req, res, next) => {

}

const getProductSale = async (req, res, next) => {
    try {
        const { quantity } = req.query
        const { rows, count } = await Product.findAndCountAll({
            attributes: [
                'id',
                'name',
                'description',
                'discountPercentage',
                'thumbUrl',
                'slug',
                'basePrice',
            ],
            offset: 0,
            limit: parseInt(quantity),
            distinct: true,
        })
        data = rows;
        total = count;
        return res.status(StatusCodes.OK).json({
            products: data,
            total: 1,
            skip: 0,
            limit: parseInt(quantity),
            page: 1
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
    createProduct,
    getProductBySlug,
    updateProduct,
    deleteProduct,
    getProductSale
}