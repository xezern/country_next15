export function useScrollTop(top = 0, smooth = true) {
    return scrollTo({
        top: top,
        behavior: smooth ? 'smooth' : "auto"
    })
}

export function useScrollTopByElement(id, smooth = true) {
    const element = document.getElementById(id)
    if (element) {
        return scrollTo({
            top: element.offsetTop - 30,
            behavior: smooth ? 'smooth' : "auto"
        })
    }
    useScrollTop()
}