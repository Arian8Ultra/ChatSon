import axios from "axios";
import querystring from "querystring";
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

    axios.post(apiURL + '/login/', querystring.stringify({
        grant_type: '',
        username: String(userName),
        password: String(password),
        scope: '',
        client_id: '',
        client_secret: ','

    }))
        .then(function (response) {
            console.warn(response);
            console.info(response.data);
            AlertChange("Hello " + userName);
            onSuccess != null ? onSuccess() : {};
            signIn(
                response.data.access_token,
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
            username: userName,
            name: firstName + ' ' + lastName,
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
        data: {
            text: String(text),
        },
        headers: { "Authorization": `Bearer ${token}` }

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
    onSuccess,
    onFail,
    setArray,
    token
) {
    const options = {
        method: 'GET',
        url: apiURL + '/tweets/',
        headers: { "Authorization": `Bearer ${token}` }
    };

    console.log(token);

    axios
        .request(options)
        .then(function (response) {
            onSuccess != '' ? onSuccess() : {};
            setArray(response.data)
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
        url: apiURL + '/tweets/profile/',
        headers: { "Authorization": `Bearer ${token}` },
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
        params: { id: id },
        headers: { "Authorization": `Bearer ${token}` }
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
        params: { tweet_id: id },
        headers: { "Authorization": `Bearer ${token}` }
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
        data: { user_ref: username },
        headers: { "Authorization": `Bearer ${token}` }
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
        headers: { "Authorization": `Bearer ${token}` }
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
        headers: { "Authorization": `Bearer ${token}` }
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
        url: apiURL + `/profiles/${username}`,
        params: { username: username },
        headers: { "Authorization": `Bearer ${token}` }
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