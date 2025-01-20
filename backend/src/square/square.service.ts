import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Client, Environment } from 'square';

@Injectable()
export class SquareService {
  private readonly client: Client;

  constructor(private configService: ConfigService) {
    this.client = new Client({
      accessToken: this.configService.get('SQUARE_ACCESS_TOKEN'),
      environment: this.configService.get('SQUARE_ENVIRONMENT') === 'production'
        ? Environment.Production
        : Environment.Sandbox,
    });
  }

  async createPayment(amount: number, currency: string = 'USD') {
    try {
      const response = await this.client.paymentsApi.createPayment({
        sourceId: 'REPLACE_WITH_ACTUAL_SOURCE_ID',
        idempotencyKey: Date.now().toString(),
        amountMoney: {
          amount: BigInt(amount * 100), // Convert to cents
          currency,
        },
        locationId: this.configService.get('SQUARE_LOCATION_ID'),
      });

      return response.result;
    } catch (error) {
      throw new Error(`Square payment failed: ${error.message}`);
    }
  }

  async createProduct(name: string, description: string, price: number) {
    try {
      const response = await this.client.catalogApi.upsertCatalogObject({
        idempotencyKey: Date.now().toString(),
        object: {
          type: 'ITEM',
          id: '#' + name.toLowerCase().replace(/\s+/g, '_'),
          itemData: {
            name,
            description,
            variations: [
              {
                type: 'ITEM_VARIATION',
                id: '#' + name.toLowerCase().replace(/\s+/g, '_') + '_variation',
                itemVariationData: {
                  priceMoney: {
                    amount: BigInt(price * 100),
                    currency: 'USD',
                  },
                },
              },
            ],
          },
        },
      });

      return response.result;
    } catch (error) {
      throw new Error(`Square product creation failed: ${error.message}`);
    }
  }
}
