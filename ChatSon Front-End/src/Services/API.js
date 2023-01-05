import axios from "axios";
import querystring from "querystring";
const apiURL = 'http://localhost:3000'



//////////////////////////  USER  //////////////////////////
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
        url: apiURL + '/api/user/',
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

export function GetAllUsers(
    onSuccess,
    onFail,
    AlertChange,
    token
) {
    const options = {
        method: 'GET',
        url: apiURL + '/api/user',
        headers: { "Authorization": `JWT ${token}` }
    };

    axios.request(options)
        .then(function (response) {
            onSuccess != '' ? onSuccess() : {};
            console.log(response);
            AlertChange(200)
            return response.data.users;
        }).catch(function (error) {
            console.error(error);
            AlertChange(String(error));
            onFail != '' ? onFail() : {};
            return error;
        });
}

export function GetUserByUsername(
    onSuccess,
    onFail,
    AlertChange,
    username,
    token
) {
    const options = {
        method: 'GET',
        url: apiURL + '/api/user/username/',
        params: { username: username },
        headers: { "Authorization": `JWT ${token}` }
    };

    axios.request(options)
        .then(function (response) {
            onSuccess != '' ? onSuccess() : {};
            console.log(response);
            AlertChange(200)
            return response.data.result;
        }).catch(function (error) {
            console.error(error);
            AlertChange(String(error));
            onFail != '' ? onFail() : {};
            return error;
        });
}

export function GetUserById(
    onSuccess,
    onFail,
    AlertChange,
    id,
    token
) {
    const options = {
        method: 'GET',
        url: apiURL + '/api/user/id/',
        params: { id: id },
        headers: { "Authorization": `JWT ${token}` }
    };

    axios.request(options)
        .then(function (response) {
            onSuccess != '' ? onSuccess() : {};
            console.log(response);
            AlertChange(200)
            return response.data.result;
        }).catch(function (error) {
            console.error(error);
            AlertChange(String(error));
            onFail != '' ? onFail() : {};
            return error;
        });
}

export function UpdateUser(
    onSuccess,
    onFail,
    AlertChange,
    id,
    token,
    username,
    email,
    password,
) {
    const options = {
        method: 'PUT',
        url: apiURL + '/api/user/',
        data: {
            id: id,
            username: username,
            email: email,
            password: password,
        },
        headers: { "Authorization": `JWT ${token}` }
    };

    axios.request(options)
        .then(function (response) {
            onSuccess != '' ? onSuccess() : {};
            console.log(response);
            AlertChange(200)
            return response.data;
        }).catch(function (error) {
            console.error(error);
            AlertChange(String(error));
            onFail != '' ? onFail() : {};
            return error;
        });
}

export function DeleteUser(
    onSuccess,
    onFail,
    AlertChange,
    id,
    token,
) {
    const options = {
        method: 'DELETE',
        url: apiURL + '/api/user/',
        data: {
            id: id,
        },
        headers: { "Authorization": `JWT ${token}` }
    };

    axios.request(options)
        .then(function (response) {
            onSuccess != '' ? onSuccess() : {};
            console.log(response);
            AlertChange(200)
            return response.data;
        }).catch(function (error) {
            console.error(error);
            AlertChange(String(error));
            onFail != '' ? onFail() : {};
            return error;
        });
}

export function followUser(
    onSuccess,
    onFail,
    AlertChange,
    username,
    token,
) {
    const options = {
        method: 'GET',
        url: apiURL + `/api/user/follow/:${username}`,
        headers: { "Authorization": `JWT ${token}` }
    };

    axios.request(options)
        .then(function (response) {
            onSuccess != '' ? onSuccess() : {};
            console.log(response);
            AlertChange(200)
            return response.data;
        }).catch(function (error) {
            console.error(error);
            AlertChange(String(error));
            onFail != '' ? onFail() : {};
            return error;
        });
}

export function unfollowUser(
    onSuccess,
    onFail,
    AlertChange,
    username,
    token,
) {
    const options = {
        method: 'GET',
        url: apiURL + `/api/user/unfollow/:${username}`,
        headers: { "Authorization": `JWT ${token}` }
    };

    axios.request(options)
        .then(function (response) {
            onSuccess != '' ? onSuccess() : {};
            console.log(response);
            AlertChange(200)
            return response.data;
        }).catch(function (error) {
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
    username,
    token,
) {
    const options = {
        method: 'GET',
        url: apiURL + `/api/user/followers/:${username}`,
        headers: { "Authorization": `JWT ${token}` }
    };

    axios.request(options)
        .then(function (response) {
            onSuccess != '' ? onSuccess() : {};
            console.log(response);
            AlertChange(200)
            return response.data;
        }).catch(function (error) {
            console.error(error);
            AlertChange(String(error));
            onFail != '' ? onFail() : {};
            return error;
        });
}

export function GetFollowing(
    onSuccess,
    onFail,
    AlertChange,
    username,
    token,
) {
    const options = {
        method: 'GET',
        url: apiURL + `/api/user/following/:${username}`,
        headers: { "Authorization": `JWT ${token}` }
    };

    axios.request(options)
        .then(function (response) {
            onSuccess != '' ? onSuccess() : {};
            console.log(response);
            AlertChange(200)
            return response.data;
        }).catch(function (error) {
            console.error(error);
            AlertChange(String(error));
            onFail != '' ? onFail() : {};
            return error;
        });
}

export function getCurrentUserFollowers(
    onSuccess,
    onFail,
    AlertChange,
    token,
) {
    const options = {
        method: 'GET',
        url: apiURL + '/api/user/currentuser/followers',
        headers: { "Authorization": `JWT ${token}` }
    };

    axios.request(options)
        .then(function (response) {
            onSuccess != '' ? onSuccess() : {};
            console.log(response);
            AlertChange(200)
            return response.data;
        }).catch(function (error) {
            console.error(error);
            AlertChange(String(error));
            onFail != '' ? onFail() : {};
            return error;
        });
}

export function getCurrentUserFollowing(
    onSuccess,
    onFail,
    AlertChange,
    token,
) {
    const options = {
        method: 'GET',
        url: apiURL + '/api/user/currentuser/following',
        headers: { "Authorization": `JWT ${token}` }
    };

    axios.request(options)
        .then(function (response) {
            onSuccess != '' ? onSuccess() : {};
            console.log(response);
            AlertChange(200)
            return response.data;
        }).catch(function (error) {
            console.error(error);
            AlertChange(String(error));
            onFail != '' ? onFail() : {};
            return error;
        });
}

// export function CheckIfFollowing(
//     onSuccess,
//     onFail,
//     AlertChange,
//     username,
//     token,
// ) {
//     const options = {
//         method: 'GET',
//         url: apiURL + '/api/user/checkiffollowing/',
//         params: { username: username },
//         headers: { "Authorization": `JWT ${token}` }
//     };

//     axios.request(options)
//         .then(function (response) {
//             onSuccess != '' ? onSuccess() : {};
//             console.log(response);
//             AlertChange(200)
//             return response.data;
//         }).catch(function (error) {
//             console.error(error);
//             AlertChange(String(error));
//             onFail != '' ? onFail() : {};
//             return error;
//         });
// }

export function GetCurrentUser(
    onSuccess,
    onFail,
    token,
    setProfile,
) {
    const options = {
        method: 'GET',
        url: apiURL + '/api/user/current',
        headers: { "Authorization": `JWT ${token}` }
    };

    axios.request(options)
        .then(function (response) {
            onSuccess != '' ? onSuccess() : {};
            console.log(response);
            setProfile(response.data);
            return response.data;
        }).catch(function (error) {
            console.error(error);
            onFail != '' ? onFail() : {};
            return error;
        });
}


////////////////////////// CHAT //////////////////////////
export function NewChat(
    onSuccess,
    onFail,
    text,
    token
) {
    const options = {
        method: 'POST',
        url: apiURL + '/api/post',
        data: {
            content: String(text),
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

export function GetAllChats(
    token,
    onSuccess,
    onFail,
    setArray,
) {
    const options = {
        method: 'GET',
        url: apiURL + '/api/post',
        headers: { "Authorization": `JWT ${token}` }
    };

    console.log(token);

    axios
        .request(options)
        .then(function (response) {
            onSuccess != '' ? onSuccess() : {};
            setArray(response.data.posts)
            console.log(response);
            return response.data.posts;

        })
        .catch(function (error) {
            console.error(error);
            onFail != '' ? onFail() : {};
            return error;
        });
}

export function GetAllChatsByLikes(
    token,
    onSuccess,
    onFail,
    setArray,
) {
    const options = {
        method: 'GET',
        url: apiURL + '/api/post/likes',
        headers: { "Authorization": `JWT ${token}` }
    };

    console.log(token);

    axios
        .request(options)
        .then(function (response) {
            onSuccess != '' ? onSuccess() : {};
            setArray(response.data.posts)
            console.log(response);
            return response.data.posts;

        })
        .catch(function (error) {
            console.error(error);
            onFail != '' ? onFail() : {};
            return error;
        });
}

export function GetChatByID(
    onSuccess,
    onFail,
    id,
    setArray,
    token
) {
    const options = {
        method: 'GET',
        url: apiURL + `/api/post/${id}`,
        headers: { "Authorization": `JWT ${token}` },

    };

    axios
        .request(options)
        .then(function (response) {
            onSuccess != '' ? onSuccess() : {};
            setArray(response.data)
            console.log(response);
            return response.data.posts;
        })
        .catch(function (error) {
            console.error(error);
            onFail != '' ? onFail() : {};
            return error;
        });
}

export function UpdateChat(
    onSuccess,
    onFail,
    id,
    content,
    token
) {
    const options = {
        method: 'PUT',
        url: apiURL + `/api/post/${id}`,
        data: {
            content: String(content),
        },
        headers: { "Authorization": `JWT ${token}` },

    };

    axios
        .request(options)
        .then(function (response) {
            onSuccess != '' ? onSuccess() : {};
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
    username,
    setArray,
    token
) {
    const options = {
        method: 'GET',
        url: apiURL + `/api/post/username/${username}`,
        headers: { "Authorization": `JWT ${token}` },
    }

    axios.request(options)
        .then(function (response) {
            onSuccess != '' ? onSuccess() : {};
            setArray(response.data.posts)
            console.log(response);
            return response.data.posts;
        }
        ).catch(function (error) {
            console.error(error);
            onFail != '' ? onFail() : {};
            return error;
        });
}

export function GetCurrentUserChats (
    onSuccess,
    onFail,
    setArray,
    token
) {
    const options = {
        method: 'GET',
        url: apiURL + '/api/post/current',
        headers: { "Authorization": `JWT ${token}` },
    }

    axios.request(options)
        .then(function (response) {
            onSuccess != '' ? onSuccess() : {};
            setArray(response.data.posts)
            console.log(response);
            return response.data.posts;
        }
        ).catch(function (error) {
            console.error(error);
            onFail != '' ? onFail() : {};
            return error;
        });
}

export function likeChat(
    onSuccess,
    onFail,
    id,
    token
) {
    const options = {
        method: 'POST',
        url: apiURL + `/api/post/like/${id}`,
        headers: { "Authorization": `JWT ${token}` },
    }

    axios.request(options)
        .then(function (response) {
            onSuccess != '' ? onSuccess() : {};
            console.log(response);
            return response.data;
        }
        ).catch(function (error) {
            console.error(error);
            onFail != '' ? onFail() : {};
            return error;
        });
}

export function unlikeChat(
    onSuccess,
    onFail,
    id,
    token
) {
    const options = {
        method: 'POST',
        url: apiURL + `/api/post/unlike/${id}`,
        headers: { "Authorization": `JWT ${token}` },
    }

    axios.request(options)
        .then(function (response) {
            onSuccess != '' ? onSuccess() : {};
            console.log(response);
            return response.data;
        }
        ).catch(function (error) {
            console.error(error);
            onFail != '' ? onFail() : {};
            return error;
        });
}

export function checkIfLiked (
    id,
    token
) {
    const options = {
        method: 'GET',
        url: apiURL + `/api/post/checkifliked/${id}`,
        headers: { "Authorization": `JWT ${token}` },
    }

    axios.request(options)
        .then(function (response) {
            console.log(id);
            console.log(response);
            return response.data.liked;
        }
        ).catch(function (error) {
            console.error(error);
            return error;
        });
}