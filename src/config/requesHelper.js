class Request {

    static requestWithBody = async (url, method, data, token) => {
        console.log('Request: ' + method + ' ' + url);

        let requestObj = {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        if (token != null) {
            requestObj.headers.Token = token;
        }

        let fetchRequest = await fetch(url, requestObj);

        console.log(fetchRequest)

        return await fetchRequest.json();
    }

    static requestWithoutBody = async (url, method, token) => {
        console.log('Request: ' + method + ' ' + url);

        let requestObj = {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        };

        if (token != null || token != undefined) {
            requestObj.headers.Token = token;
        }

        let fetchRequest = await fetch(url, requestObj);

        console.log(fetchRequest)

        return await fetchRequest.json();
    }
}

export default Request;