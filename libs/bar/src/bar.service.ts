import { Injectable } from '@nestjs/common';
import { Abc } from './interfaces/abc';

@Injectable()
export class BarService {
  constructor() {
    const abc: Abc = {
      a: 'a',
    };

    console.warn(abc);
    console.warn(process.env.APP);
  }
}
