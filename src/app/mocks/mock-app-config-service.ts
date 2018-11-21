export class MockAppConfigService {
  getConfig() {
    return {
      "menuName" : "foo",
      "backendUrl" : "http://localhost"
    }
  }
}
