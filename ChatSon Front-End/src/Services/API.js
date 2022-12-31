import axios from "axios";

const apiURL = 'http://localhost:8000'


export function SignInUser(
    userName,
    password,
    onSuccess,
    signIn,
    onFail,
    AlertChange
) {
    console.warn("signing in");
    const options = {
        method: 'POST',
        url: apiURL + '/login/',
        data: {
            grant_type: '',
            username: String(userName),
            password: String(password),
            scope: '',
            client_id: '',
            client_secret: ','

        },
    };

    axios
        .request(options)
        .then(function (response) {
            console.warn(response);
            AlertChange("Hello " + response.data.result.firstName);
            onSuccess != null ? onSuccess() : {};
            signIn(
                response.data.result.firstName,
                response.data.result.lastName,
                response.data.result.token,
                userName,
            );
            return response.data.result;
        })
        .catch(function (error) {
            console.error(error);
            AlertChange(String(error));
            onFail != null ? onFail() : {};
            return error;
        });


}
export function SignUpUser(
    userName,
    password,
    firstName,
    lastName,
    email,
    onSuccess,
    onFail,
    AlertChange,
) {
    // console.warn("signing up");
    const options = {
        method: "POST",
        url: apiURL + '/users/',
        data: {
            userName: userName,
            name: firstName + '' + lastName,
            email: email,
            password: password,
        },
    };

    axios
        .request(options)
        .then(function (response) {
            console.warn(response.data);
            onSuccess != null ? onSuccess() : {};
            return response.data;
        })
        .catch(function (error) {
            console.error(error);
            AlertChange(String(error));
            onFail != null ? onFail() : {};
            return error;
        });
}
export function NewChat(
    onSuccess,
    onFail,
    AlertChange,
    text,
    image,
    token
) {
    const options = {
        method: 'POST',
        url: apiURL + '/tweets/',
        headers: { token: token },
        data: {
            text: String(text),
        },
    };

    axios
        .request(options)
        .then(function (response) {
            onSuccess != '' ? onSuccess() : {};
            console.log(response);
            AlertChange(200)
            return response.data.result;

        })
        .catch(function (error) {
            console.error(error);
            AlertChange(String(error));
            onFail != '' ? onFail() : {};
            return error;
        });
}
export function GetChats(
    onSuccess,
    onFail,
    AlertChange,
    setArray,
    token
) {
    const options = {
        method: 'GET',
        url: apiURL + '/tweets/',
        headers: { token: token }
    };

    axios
        .request(options)
        .then(function (response) {
            onSuccess != '' ? onSuccess() : {};
            setArray(response.data.result)
            console.log(response);
            AlertChange(200)
            return response.data.result;

        })
        .catch(function (error) {
            console.error(error);
            AlertChange(String(error));
            onFail != '' ? onFail() : {};
            return error;
        });
}
export function GetChatsByUsername(
    onSuccess,
    onFail,
    AlertChange,
    username,
    setArray,
    token
) {
    const options = {
        method: 'GET',
        url: apiURL + '/tweets/profile/',
        headers: { token: token },
        params: { username: username },

    };

    axios
        .request(options)
        .then(function (response) {
            onSuccess != '' ? onSuccess() : {};
            setArray(response.data.result)
            console.log(response);
            AlertChange(200)
            return response.data.result;
        })
        .catch(function (error) {
            console.error(error);
            AlertChange(String(error));
            onFail != '' ? onFail() : {};
            return error;
        });
}
export function GetChatsByID(
    onSuccess,
    onFail,
    AlertChange,
    id,
    token
) {
    const options = {
        method: 'GET',
        url: apiURL + '/tweets/',
        headers: { token: token },
        params: { id: id },

    };

    axios
        .request(options)
        .then(function (response) {
            onSuccess != '' ? onSuccess() : {};
            console.log(response);
            AlertChange(200)
            return response.data.result;
        })
        .catch(function (error) {
            console.error(error);
            AlertChange(String(error));
            onFail != '' ? onFail() : {};
            return error;
        });
}
export function LikeChatByID(
    onSuccess,
    onFail,
    AlertChange,
    id,
    token
) {
    const options = {
        method: 'POST',
        url: apiURL + '/likes/',
        headers: { token: token },
        params: { tweet_id: id },

    };

    axios
        .request(options)
        .then(function (response) {
            onSuccess != '' ? onSuccess() : {};
            console.log(response);
            AlertChange(200)
            return response.data.result;
        })
        .catch(function (error) {
            console.error(error);
            AlertChange(String(error));
            onFail != '' ? onFail() : {};
            return error;
        });
}
export function FollowByUsername(
    onSuccess,
    onFail,
    AlertChange,
    username,
    token
) {
    const options = {
        method: 'POST',
        url: apiURL + '/follow/',
        headers: { token: token },
        data: { user_ref: username },

    };

    axios
        .request(options)
        .then(function (response) {
            onSuccess != '' ? onSuccess() : {};
            console.log(response);
            AlertChange(200)
            return response.data.result;
        })
        .catch(function (error) {
            console.error(error);
            AlertChange(String(error));
            onFail != '' ? onFail() : {};
            return error;
        });
}
export function GetFollowers(
    onSuccess,
    onFail,
    AlertChange,
    setArray,
    username,
    token
) {
    const options = {
        method: 'GET',
        url: apiURL + `/follow/${username}/followers`,
        headers: { token: token }
    };

    axios
        .request(options)
        .then(function (response) {
            onSuccess != '' ? onSuccess() : {};
            setArray(response.data.result)
            console.log(response);
            AlertChange(200)
            return response.data.result;

        })
        .catch(function (error) {
            console.error(error);
            AlertChange(String(error));
            onFail != '' ? onFail() : {};
            return error;
        });
}
export function GetFollowings(
    onSuccess,
    onFail,
    AlertChange,
    setArray,
    username,
    token
) {
    const options = {
        method: 'GET',
        url: apiURL + `/follow/${username}/followings`,
        headers: { token: token }
    };

    axios
        .request(options)
        .then(function (response) {
            onSuccess != '' ? onSuccess() : {};
            setArray(response.data.result)
            console.log(response);
            AlertChange(200)
            return response.data.result;

        })
        .catch(function (error) {
            console.error(error);
            AlertChange(String(error));
            onFail != '' ? onFail() : {};
            return error;
        });
}
export function GetProfileByUsername(
    onSuccess,
    onFail,
    AlertChange,
    username,
    setArray,
    token
) {
    const options = {
        method: 'GET',
        url: apiURL + '/profiles/',
        headers: { token: token },
        params: { username: username },

    };

    axios
        .request(options)
        .then(function (response) {
            onSuccess != '' ? onSuccess() : {};
            setArray(response.data.result)
            console.log(response);
            AlertChange(200)
            return response.data.result;
        })
        .catch(function (error) {
            console.error(error);
            AlertChange(String(error));
            onFail != '' ? onFail() : {};
            return error;
        });
}