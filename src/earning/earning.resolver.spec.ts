import { Test, TestingModule } from '@nestjs/testing';
import { EarningResolver } from './earning.resolver';

describe('EarningResolver', () => {
  let resolver: EarningResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EarningResolver],
    }).compile();

    resolver = module.get<EarningResolver>(EarningResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
