import axios from "axios";
import querystring from "querystring";
const apiURL = 'http://localhost:3000'

export function SignUpUser(
    userName,
    password,
    email,
    onSuccess,
    onFail,
    AlertChange,
) {
    // console.warn("signing up");
    const options = {
        method: "POST",
        url: apiURL + '/api/user/register',
        data: {
            username: userName,
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
        method: "POST",
        url: apiURL + '/api/user/login',
        data: {
            username: userName,
            password: password,
        },
    };
    axios
        .request(options)
        .then(function (response) {
            console.info(response.data);
            AlertChange("Hello " + userName);
            onSuccess != null ? onSuccess() : {};
            signIn(
                response.data.token,
                userName,
                response.data.user_id,
                response.data.email,
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
export function NewChat(
    onSuccess,
    onFail,
    text,
    token
) {
    const options = {
        method: 'POST',
        url: apiURL + '/api/tweet',
        data: {
            content : String(text),
        },
        headers: { "Authorization": `JWT ${token}` }

    };

    axios
        .request(options)
        .then(function (response) {
            onSuccess != '' ? onSuccess() : {};
            console.log(response);
            return response.data.result;

        })
        .catch(function (error) {
            console.error(error);
            onFail != '' ? onFail() : {};
            return error;
        });
}
export function GetChats(
    token,
    onSuccess,
    onFail,
    setArray,
) {
    const options = {
        method: 'GET',
        url: apiURL + '/api/tweet',
        headers: { "Authorization": `JWT ${token}` }
    };

    console.log(token);

    axios
        .request(options)
        .then(function (response) {
            onSuccess != '' ? onSuccess() : {};
            setArray(response.data.reverse())
            console.log(response);
            return response.data;

        })
        .catch(function (error) {
            console.error(error);
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
        url: apiURL + '/api/tweet/username/',
        headers: { "Authorization": `JWT ${token}` },

    };

    axios
        .request(options)
        .then(function (response) {
            onSuccess != '' ? onSuccess() : {};
            setArray(response.data.reverse())
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
        url: apiURL + '/api/tweet',
        params: { id: id },
        headers: { "Authorization": `JWT ${token}` }
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
    id,
    token
) {
    const options = {
        method: 'POST',
        url: apiURL + '/api/tweet/like',
        params: { id: id },
        headers: { "Authorization": `JWT ${token}` }
    };

    axios
        .request(options)
        .then(function (response) {
            onSuccess != '' ? onSuccess() : {};
            console.log(response);
            return response.data.result;
        })
        .catch(function (error) {
            console.error(error);
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
        data: { user_ref: username },
        headers: { "Authorization": `JWT ${token}` }
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
        headers: { "Authorization": `JWT ${token}` }
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
        headers: { "Authorization": `JWT ${token}` }
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
    token,
    setProfile,
) {
    const options = {
        method: 'GET',
        url: apiURL + 'api/user/currentuser',
        headers: { "Authorization": `JWT ${token}` }
    };

    axios
        .request(options)
        .then(function (response) {
            onSuccess != '' ? onSuccess() : {};
            console.log(response);
            setProfile(response.data);
            return response.data;
        })
        .catch(function (error) {
            console.error(error);
            onFail != '' ? onFail() : {};
            return error;
        });
}

export function GetCurrentUserProfile(
    onSuccess,
    onFail,
    token,
    setProfile,
) {
    const options = {
        method: 'GET',
        url: apiURL + '/api/user/currentuser',
        headers: { "Authorization": `JWT ${token}` }
    };

    axios
        .request(options)
        .then(function (response) {
            onSuccess != '' ? onSuccess() : {};
            setProfile(response.data[0]);
            console.log(response.data[0]);
            return response.data;
        })
        .catch(function (error) {
            console.error(error);
            onFail != '' ? onFail() : {};
            return error;
        });
}