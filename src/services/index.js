import { instance } from "./instance"

async function useFullCountrysQuery() {
    try {
        const res = await instance.get(`/all`)
        return res.data
    } catch (error) {
        return error
    }
}

async function useCountryByIdQuery(id) {
    try {
        const res = await instance.get(`/alpha/${id}`)
        return res.data
    } catch (error) {
        return error
    }
}

async function useCountryByRegionQuery(code) {
    try {
        const res = await instance.get(`/region/${code}`)
        return res.data
    } catch (error) {
        return error
    }
}

export {
    useFullCountrysQuery,
    useCountryByIdQuery,
    useCountryByRegionQuery
}