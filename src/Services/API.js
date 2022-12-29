import axios from "axios";

const apiURL = 'http://172.16.23.59:8050/api'


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
        url: apiURL + '/Account/SignIn',
        data: {userName: String(userName), password: String(password)},
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
    nationalCode,
    onSuccess,
    onFail,
    AlertChange,
) {
    // console.warn("signing up");
    const options = {
        method: "POST",
        url: apiURL + '/Account/SignUp',
        data: {
            userName: userName,
            firstName: firstName,
            lastName: lastName,
            nationalCode: nationalCode,
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


export function AuthCheck(
    token,
    onSuccess,
    onFail,
    AlertChange,
) {
    // console.warn("signing up");
    const options = {
        method: "GET",
        url: apiURL + '/Account/AuthCheck',
        headers: {
            token: token
        }
    };

    axios
        .request(options)
        .then(function (response) {
            // console.warn(response.data);
            if (response.data) {
                onSuccess != null ? onSuccess() : {}
            } else {
                AlertChange(String(response.data));
                onFail != null ? onFail() : {};
            }
            return response.data.result;
        })
        .catch(function (error) {
            console.error(error);
            AlertChange(String(error));
            onFail != null ? onFail() : {};
            return error;
        });
}


export function GetAllSheets(
    onSuccess,
    onFail,
    AlertChange,
    setArray,
    token
) {
    const options = {
        method: 'GET',
        url: apiURL + '/DocTitle/GetAll',
        headers: {token: token}
    };

    axios
        .request(options)
        .then(function (response) {
            if (response.data != "Can't authenticate user!") {
                onSuccess != '' ? onSuccess() : {};
                setArray(response.data.result)
                console.log(response);
                AlertChange(200)
                return response.data.result;
            } else {
                setArray([{content: 'error', id: '404'}])
                AlertChange(404);
            }
        })
        .catch(function (error) {
            console.error(error);
            AlertChange(String(error));
            onFail != '' ? onFail() : {};
            return error;
        });
}


export function GetTitleByID(
    onSuccess,
    onFail,
    AlertChange,
    setArray,
    token,
    ParentID
) {
    const options = {
        method: 'GET',
        url: apiURL + '/Title/GetByParentId',
        params: {parentId: ParentID},
        headers: {
            token: token
        }
    };

    axios
        .request(options)
        .then(function (response) {
            if (response.data != "Can't authenticate user!") {
                onSuccess != '' ? onSuccess() : {};
                setArray(response.data.result)
                AlertChange(200)
                return response.data.result;
            } else {
                setArray([{content: 'error', id: '404'}])
                AlertChange(404);
            }
        })
        .catch(function (error) {
            console.error(error);
            AlertChange(String(error));
            onFail != '' ? onFail() : {};
            return error;
        });
}

export function GetSubTitleByID(
    onSuccess,
    onFail,
    AlertChange,
    setArray,
    token,
    ParentID
) {
    const options = {
        method: 'GET',
        url: apiURL + '/Subtitle/GetByParentId',
        params: {parentId: ParentID},
        headers: {
            token: token
        }
    };

    axios
        .request(options)
        .then(function (response) {
            if (response.data != "Can't authenticate user!") {
                onSuccess != '' ? onSuccess() : {};
                setArray(response.data.result)
                AlertChange(200)
                return response.data.result;
            } else {
                setArray([{content: 'error', id: '404'}])
                AlertChange(404);
            }
        })
        .catch(function (error) {
            console.error(error);
            AlertChange(String(error));
            onFail != '' ? onFail() : {};
            return error;
        });
}

export function GetQuestionByID(
    onSuccess,
    onFail,
    AlertChange,
    setArray,
    token,
    ParentID
) {
    const options = {
        method: 'GET',
        url: apiURL + '/Question/GetByParentId',
        params: {parentId: ParentID},
        headers: {
            token: token
        }
    };

    axios
        .request(options)
        .then(function (response) {
            if (response.data != "Can't authenticate user!") {
                onSuccess != '' ? onSuccess() : {};
                setArray(response.data.result)
                AlertChange(200)
                return response.data.result;
            } else {
                setArray([{content: 'error', id: '404'}])
                AlertChange(404);
            }
        })
        .catch(function (error) {
            console.error(error);
            AlertChange(String(error));
            onFail != '' ? onFail() : {};
            return error;
        });
}

export function QuestionAnswerByID(
    onSuccess,
    onFail,
    AlertChange,
    token,
    answer,
    QuestionID
) {
    const options = {
        method: 'POST',
        url: apiURL + '/Question/Answer',
        headers: {token: token},
        data: [{questionId: QuestionID, answer: answer}]
    };

    axios
        .request(options)
        .then(function (response) {
            if (response.data != "Can't authenticate user!") {
                console.log(response.data)
                onSuccess != '' ? onSuccess() : {};
                AlertChange(200)
                return response.data.result;
            } else {
                AlertChange(404);
            }
        })
        .catch(function (error) {
            console.error(error);
            AlertChange(String(error));
            onFail != '' ? onFail() : {};
            return error;
        });
}
