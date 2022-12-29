import { AES_Key_Gen, RSA_Key_Gen } from "./Security";
// test for AES_Key_Gen
test('AES_Key_Gen', async () => {
    expect.assertions(1);
    const generatedKey = await AES_Key_Gen();
    expect(generatedKey).toBeDefined();
});

// test for RSA_Key_Gen
test('RSA_Key_Gen', async () => {
  expect.assertions(1);
  const keyPair = await RSA_Key_Gen();
    expect(keyPair).toBeDefined();
});
