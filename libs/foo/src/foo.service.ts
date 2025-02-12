import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class FooService {
  constructor(@Inject('CONFIG_OPTIONS') private config: { app: string }) {
    console.log(`API Key: ${this.config.app}`);
  }

  getFoo() {
    return `Foo with API Key: ${this.config.app}`;
  }
}
