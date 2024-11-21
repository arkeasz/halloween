function createMagicPotion(potions, target) {
    let result = [];

    for (let i = 0; i < potions.length - 1; i++) {
        for (let j = i + 1; j < potions.length; j++)  {
            if (potions[i] + potions[j] === target) {
                result.push([i, j])
            }
        }
    }

    let compareNumbers = (a, b) =>  {
        return a[1] - b[1]
    }

    result.sort((a, b) => compareNumbers(a, b))

    return result.length === 0 ? undefined : result[0];
}

// ----------------
const potions = [1, 2, 3, 4]
const goal = 5

result = createMagicPotion(potions, goal)

console.log(result)
// ----------------
