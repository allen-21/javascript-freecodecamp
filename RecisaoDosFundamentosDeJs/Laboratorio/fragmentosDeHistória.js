const shuffledFragments = [
    {
        id: 15,
        text: "and, after a time, passed the place where the Hare was sleeping.",
    },
    { id: 12, text: "he lay down beside the course to take a nap" },
    ,
    {
        id: 11,
        text: "and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare,",
    },
    { id: 7, text: "but for the fun of the thing he agreed." },
    { id: 19, text: "The Hare now ran his swiftest," },
    ,
    {
        id: 1,
        text: "A Hare was making fun of the Tortoise one day for being so slow.",
    },
    { id: 14, text: "The Tortoise meanwhile kept going slowly but steadily," },
    { id: 9, text: "marked the distance and started the runners off." },
    ,
    { id: 5, text: "I'll run you a race and prove it." },
    { id: 17, text: "and when at last he did wake up," },
    { id: 2, text: '"Do you ever get anywhere?" he asked with a mocking laugh.' },
    { id: 12, text: "he lay down beside the course to take a nap" },
    ,
    { id: 8, text: "So the Fox, who had consented to act as judge," },
    { id: 20, text: "but he could not overtake the Tortoise in time." },
    { id: 5, text: "I'll run you a race and prove it." },
    {
        id: 6,
        text: "The Hare was much amused at the idea of running a race with the Tortoise,",
    },
    ,
    { id: 13, text: "until the Tortoise should catch up." },
    { id: 10, text: "The Hare was soon far out of sight," },
    { id: 12, text: "he lay down beside the course to take a nap" },
    { id: 18, text: "the Tortoise was near the goal." },
];


// 1. Remove undefined
function compactFragments(array) {
    const result = [];

    for (const fragment of array) {
        if (fragment === undefined) {
            console.log("[COMPACTED] Undefined fragment removed");
        } else {
            result.push(fragment);
        }
    }

    return result;
}


// 2. Ordenar pelo ID
function sortFragments(fragments) {
    const result = [...fragments];

    for (let i = 0; i < result.length; i++) {

        for (let j = 0; j < result.length - 1 - i; j++) {

            if (result[j].id > result[j + 1].id) {

                const temp = result[j];

                result[j] = result[j + 1];

                result[j + 1] = temp;
            }
        }
    }

    return result;
}


// 3. Remover IDs duplicados
function dedupeFragments(fragments) {
    const result = [];

    for (const fragment of fragments) {

        if (
            result.length === 0 ||
            fragment.id !== result[result.length - 1].id
        ) {
            result.push(fragment);
        } else {
            console.log(
                `[DEDUPED] Duplicate fragment with id ${fragment.id} removed`
            );
        }
    }

    return result;
}


// 4. Preencher IDs faltantes
function fillMissingFragments(fragments) {
    const result = [];

    for (let i = 0; i < fragments.length; i++) {

        result.push(fragments[i]);

        if (i < fragments.length - 1) {

            let missingId = fragments[i].id + 1;

            const nextId = fragments[i + 1].id;

            while (missingId < nextId) {

                result.push({
                    id: missingId,
                    text: "[...]"
                });

                console.log(
                    `[FILLED] Missing fragment with id ${missingId} added`
                );

                missingId++;
            }
        }
    }

    return result;
}


// 5. Montar a história
function assembleStory(fragments) {
    const texts = [];

    for (const fragment of fragments) {
        texts.push(fragment.text);
    }

    return texts.join("\n");
}


// PROCESSAMENTO

const compactedShuffledFragments =
    compactFragments(shuffledFragments);

const sortedFragments =
    sortFragments(compactedShuffledFragments);

const dedupedFragments =
    dedupeFragments(sortedFragments);

const filledFragments =
    fillMissingFragments(dedupedFragments);


// Mostrar história final
console.log(assembleStory(filledFragments));