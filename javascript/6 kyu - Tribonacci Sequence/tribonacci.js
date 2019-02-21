function tribonacci(signature, n) {

    const output = signature.slice(0, n);

    for (let i = 3; i < n; i++) {
        output.push(output[i - 1] + output[i - 2] + output[i - 3])
    }

    return output;
}

export default tribonacci;