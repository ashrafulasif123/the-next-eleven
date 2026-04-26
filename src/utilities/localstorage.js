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

const getRemainingBalanceFromLs = () => {
    return localStorage.getItem("balance") || 6000000000
}

const setRemainingBalanceToLs = remainingBalance => {
    localStorage.setItem("balance", remainingBalance)
}

export {
    getIdFromLocalStorage as getIdFromLs,
    setIdToLocalStorage as setIdToLs,
    saveLocalStorage,
    getRemainingBalanceFromLs,
    setRemainingBalanceToLs
}