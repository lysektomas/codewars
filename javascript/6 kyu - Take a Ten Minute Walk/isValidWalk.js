function isValidWalk(steps) {
    if (!Array.isArray(steps) || steps.length !== 10) {
        return false;
    }

    let x = 0;
    let y = 0;

    for (let step of steps) {
        switch (step) {
            case 'n':
                y -= 1;
                break;
            case 's':
                y += 1;
                break;
            case 'e':
                x -= 1;
                break;
            case 'w':
                x += 1;
                break;
            default:
                console.log('bad step', step);
        }
    }
    return x === 0 && y === 0;
}

export default isValidWalk;