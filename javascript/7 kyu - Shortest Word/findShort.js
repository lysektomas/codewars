function findShort(words) {
    if (!words) {
        return null;
    }

    return Math.min(...words.split(' ').map(x => x.length))
}

export default findShort;