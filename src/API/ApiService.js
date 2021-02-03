const apiUrl = "https://api.giosg.com/api/reporting/v1/rooms/84e0fefa-5675-11e7-a349-00163efdd8db/chat-stats/daily/?"

const getData = async (start, end, key) => {
    const url = `${apiUrl}start_date=${start}&end_date=${end}&format=json`
    const options = {
        headers: {
            authorization: key,
            type: "application/json"
        }
    }
    const response = await fetch(url, options)
    return response.json()
}

export default {
    getData
}