import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class ClaudeService {
  private readonly apiKey: string;
  private readonly apiUrl = 'https://api.anthropic.com/v1/messages';

  constructor(private configService: ConfigService) {
    this.apiKey = this.configService.get('CLAUDE_API_KEY');
    if (!this.apiKey) {
      throw new Error('CLAUDE_API_KEY is not defined in environment variables');
    }
  }

  async generateResponse(prompt: string, model = 'claude-3-sonnet-20240229') {
    try {
      const response = await axios.post(
        this.apiUrl,
        {
          model,
          max_tokens: 1024,
          messages: [
            {
              role: 'user',
              content: prompt,
            },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': this.apiKey,
            'anthropic-version': '2023-06-01',
          },
        }
      );

      return response.data.content[0].text;
    } catch (error) {
      throw new Error(`Claude API error: ${error.message}`);
    }
  }

  async generateProductDescription(productName: string, keywords: string[]) {
    const prompt = `Generate a compelling product description for ${productName}. 
    Include these keywords: ${keywords.join(', ')}. 
    The description should be engaging, informative, and highlight the product's key benefits.`;

    return this.generateResponse(prompt);
  }

  async generateProductRecommendations(userPreferences: string) {
    const prompt = `Based on these preferences: ${userPreferences}, 
    suggest 3 products that would best suit the customer. 
    Include a brief explanation for each recommendation.`;

    return this.generateResponse(prompt);
  }
}
