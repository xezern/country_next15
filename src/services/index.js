import { instance } from "./instance"

async function useFullCountrysQuery() {
    try {
        const res = await instance.get(`/all`)
        return res.data
    } catch (error) {
        throw new Error(error)
    }
}

export {
    useFullCountrysQuery
}