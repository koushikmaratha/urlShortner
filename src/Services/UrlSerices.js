
export const getAllUrls = async () => {
    return new Promise(async (resolve, reject) => {
        await fetch('/getallurls', {
            method: 'GET'
        })
            .then(response => response.json())
            .then(res => resolve(res))
            .catch(err => reject(err))
    })
};

export const getShortUrl = (short_url) => {
    return new Promise(async (resolve, reject) => {
        await fetch(`/geturl/${short_url}`, {
            method: 'GET'
        })
            .then(response => {
                if (response.status === 200) {
                    return response.json()
                } else {
                    reject(response.json())
                }
            })
            .then(res => resolve(res))
            .catch(err => reject(err))
    })
};

export const saveShortUrl = (reqData) => {
    return new Promise(async (resolve, reject) => {
        await fetch('/saveurl', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reqData)
        })
            .then(response => response.json())
            .then(res => resolve(res))
            .catch(err => reject(err))
    })
};

export const saveStats = (reqData) => {
    return new Promise(async (resolve, reject) => {
        await fetch('/savestats', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reqData)
        })
            .then(response => response.json())
            .then(res => resolve(res))
            .catch(err => reject(err))
    })
};