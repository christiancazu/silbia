import { DynamicModule, Module } from '@nestjs/common';
import { FooService } from './foo.service';

@Module({})
export class FooModule {
  static forRoot(config: { app: string }): DynamicModule {
    return {
      module: FooModule,
      providers: [
        {
          provide: 'CONFIG_OPTIONS',
          useValue: config,
        },
        FooService,
      ],
      exports: [FooService],
    };
  }
}
