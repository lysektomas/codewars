function openOrSenior(data) {
    if (!data || !Array.isArray(data)) {
        return [];
    }

    const output = [];

    for (let entry of data) {

        const age = entry[0];
        const handicap = entry[1];
        if (age >= 55 && handicap > 7) {
            output.push('Senior');
        } else {
            output.push('Open');
        }
    }

    return output;
}

export default openOrSenior;