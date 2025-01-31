import { Injectable } from '@nestjs/common';
import { FooEnum } from './types';

@Injectable()
export class FooService {
  constructor() {
    console.log(FooEnum.Foo);
  }
}
