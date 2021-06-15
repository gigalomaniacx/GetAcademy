function clickedNumber(index) {
    let blankIndex = findBlankIndex(index);
    if (blankIndex == null) return;
    count++;
    numbers[blankIndex] = numbers[index];
    numbers[index] = 0;
    show();
}

function findBlankIndex(index) {
    for (let delta of [-3, -1, 1, 3]) {
        let newIndex = index + delta;
        if (newIndex < 0 || newIndex >= numbers.length) continue;
        if (numbers[newIndex] === 0) {
            return newIndex;
        }
    }
    return null;
}