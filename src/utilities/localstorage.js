const getIdFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("playerIds")) || []
}

const setIdToLocalStorage = id => {
    const playerIds = getIdFromLocalStorage()
    const updatePlayerIds = [...playerIds, id]
    saveLocalStorage(updatePlayerIds)
}

const saveLocalStorage = cart => {
    localStorage.setItem("playerIds", JSON.stringify(cart))
}

export {
    getIdFromLocalStorage as getIdFromLs,
    setIdToLocalStorage as setIdToLs,
    saveLocalStorage
}