import { Page, expect, Response, test } from '@playwright/test';

export default class Assert {
  constructor(private page: Page) {}

  async networkCallStatus(response: Response, statusCode: Number) {
    await test.step(`Intercepting ${response.url()}`, () => {
      expect(response.status()).toBe(statusCode);
    });
  }
}
