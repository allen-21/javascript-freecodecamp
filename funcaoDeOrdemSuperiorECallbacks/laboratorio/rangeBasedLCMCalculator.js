function smallestCommons(arr) {
    const min = Math.min(arr[0], arr[1]);
    const max = Math.max(arr[0], arr[1]);

    const numbers = [];

    for (let i = min; i <= max; i++) {
        numbers.push(i);
    }

    let candidate = max;

    while (true) {
        const isCommon = numbers.every(number => candidate % number === 0);

        if (isCommon) {
            return candidate;
        }

        candidate++;
    }
}