import { SignInUser } from "./API";

// test for SignInUser with jest
test('SignInUser', () => {
    // mock the axios request
    axios.request = jest.fn().mockResolvedValue({
        data: {
            result: {
                firstName: 'test',
                lastName: 'test',
                token: 'test',
            },
        },
    });

    // mock the signIn function
    const signIn = jest.fn();

    // call the SignInUser function
    SignInUser('test', 'test', null, signIn, null, null)

    // expect the signIn function to be called
    expect(signIn).toBeCalled();

});
