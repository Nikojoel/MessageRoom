import React, {useEffect, useState} from 'react'
import ApiService from "./API/ApiService"
import BigBox from "./components/BigBox"
import DatePicker from "./components/DatePicker"
import TokenInput from "./components/TokenInput"
import Notification from "./components/Notification"
import Table from "./components/Table"
import List from "./components/List"

const App = () => {
    const [data, setData] = useState([])
    const [byDate, setByDate] = useState([])
    const [endDate, setEndDate] = useState("2017-06-15")
    const [startDate, setStartDate] = useState("2017-05-01")
    const [token, setToken] = useState("")
    const [errorMessage, setErrorMessage] = useState(null)

    useEffect(() => {
        const getInitial = async (start, end, token) => {
            if (start < end || start === end) {
                try {
                    const response = await ApiService.getData(start, end, token)
                    setData(response)
                    setByDate(response.by_date)
                } catch (e) {
                    setNotification("Error in HTTP request, check token")
                    console.log(e)
                }
            } else {
                setNotification("Start date can't be after end date")
            }
        }
        const auth = window.localStorage.getItem("userToken")
        if (auth) {
            setToken(auth)
            getInitial(startDate, endDate, auth)
        } else {
            setNotification("Token not found")
        }
    }, [startDate, endDate, token])

    const handleStartDate = (event) => {
        setStartDate(event.target.value)
    }

    const handleEndDate = (event) => {
        setEndDate(event.target.value)
    }

    const handleToken = (event) => {
        setToken(event.target.value)
        window.localStorage.setItem(
            'userToken', event.target.value
        )
    }

    const setNotification = (text) => {
        setErrorMessage(text)
        setTimeout(() => {
            setErrorMessage(null)
        }, 3000)
    }

    return (
        <main>
            <Notification message={errorMessage}/>
            <DatePicker
                handleStartDate={handleStartDate}
                handleEndDate={handleEndDate}
                startDate={startDate}
                endDate={endDate}
            />
            <TokenInput
                handleToken={handleToken}
                token={token}
            />
                <BigBox
                    data={data}
                />
                <Table/>
                <List
                    data={byDate}
                />
        </main>
    )
}

export default App
