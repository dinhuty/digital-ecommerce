"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class ProductVariant extends Model {

        static associate(models) {
            // Product
            this.belongsTo(models.Product, {
                foreignKey: "productId",
                as: "products",
            });
            this.belongsTo(models.Memory, {
                foreignKey: "colorId",
                as: "color",
            });
            this.belongsTo(models.Color, {
                foreignKey: "memoryId",
                as: "memory",
            });
        }
    }
    ProductVariant.init(
        {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.INTEGER,
                autoIncrement: true,
            },
            stock: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0
            },
            price: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0

            }
        },
        {
            sequelize,
            modelName: "ProductVariant",
            timestamps: true,
        }
    );
    return ProductVariant;
};