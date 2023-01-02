// creating test for userModel methods
const { CreateUser, GetUser, GetUsers, UpdateUser, DeleteUser, Login, Register, AuthCheck, FollowByUsername, UnfollowByUsername,GetCurrentUser,GetUserByUsername } = require('./models/userModel');

test('CreateUser', () => { 
    expect(CreateUser).toBeDefined();
});

test('GetUser', () => {
    expect(GetUser).toBeDefined();
}
);

test('GetUsers', () => {
    expect(GetUsers).toBeDefined();
}
);

test('UpdateUser', () => {
    expect(UpdateUser).toBeDefined();
}
);

test('DeleteUser', () => {
    expect(DeleteUser).toBeDefined();
}
);

test('Login', () => {
    expect(Login).toBeDefined();
}
);

test('Register', () => {
    expect(Register).toBeDefined();
}
);

test('AuthCheck', () => {
    expect(AuthCheck).toBeDefined();
}
);

test('FollowByUsername', () => {
    expect(FollowByUsername).toBeDefined();
}
);

test('UnfollowByUsername', () => {
    expect(UnfollowByUsername).toBeDefined();
}
);

test('GetCurrentUser', () => {
    // expect to get current user from database
    expect(GetCurrentUser).toBeDefined();
}
);

test('GetUserByUsername', () => {
    // expect to get user from database
    expect(GetUserByUsername).toBeDefined();
}
);

