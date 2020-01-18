import { TestPipesPipe } from './test-pipes.pipe';

describe('TestPipesPipe', () => {
  it('create an instance', () => {
    const pipe = new TestPipesPipe();
    expect(pipe).toBeTruthy();
  });
});
