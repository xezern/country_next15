export function useQueryParams() {
    const url = new URLSearchParams()

    const addQuery = (field, value) => {
        url.set(field, value);
        const newUrl = `${location.pathname}?${url.toString()}`;
        history.pushState(null, '', newUrl);
    };

    return {
        addQuery
    }
}