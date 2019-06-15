export function createTokenServiceMock() {
  return jasmine.createSpyObj('TokenService', {
    current: Promise.resolve()
  });
}
