export const genRandom = (max) => {
    let i = Math.random()
    let j = Math.floor(i * max, 0)
    return j
}
