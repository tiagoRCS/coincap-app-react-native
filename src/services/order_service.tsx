import { OrderEntity, ProductEntity } from "../entities";
import { AssetModel, OrderModel } from "../models";
import OrderRepository from "../repositories/order_repository";
import { OrderTypeEnum } from "../enums";

export default class OrderService {
    static async all(): Promise<[OrderModel]> {
        return await OrderRepository.all();
    }
    
    static async findById({id}:{id: string}): Promise<OrderModel> {
        return await OrderRepository.findById({id: id});
    }

    static async create(
        {asset, product, type, amount}: 
        {asset: AssetModel, product: ProductEntity, type: OrderTypeEnum, amount: number}
    ): Promise<void> {

        const orderEntity = new OrderEntity({
            productId: product.id,
            assetId: asset.id,
            assetName: asset.name,
            assetPercent: asset.percent,
            assetPrice: asset.price,
            amount: amount,
            type: type
        });

        await OrderRepository.create({data: orderEntity});
    }
}