export const apply = (arr: any[], dragResult: any): { operation: 'add' | 'remove' | null, children: any[] } => {

    let { removedIndex, addedIndex, payload } = dragResult;

    if (removedIndex === null && addedIndex === null) return { operation: null, children: [] }

    if (Array.isArray(payload)) {
        const result = [...arr];

        if (removedIndex !== null) {
            result.splice(removedIndex, payload.length);

            return { children: result, operation: 'remove' };
        }
        else if (addedIndex !== null) {
            result.splice(addedIndex, 0, ...payload);

            return { children: result, operation: 'add' };
        }

    }

    else {
        const result = [...arr];
        let itemToAdd = payload;

        if (removedIndex !== null) {
            itemToAdd = result.splice(removedIndex, 1)[0];
            return { children: result, operation: 'remove' };

        }

        if (addedIndex !== null) {
            result.splice(addedIndex, 0, itemToAdd);
            return { children: result, operation: 'add' };
        }

        return {
            children: result, operation: removedIndex !== null ? 'remove' : 'add'
        };
    }

};


export const applyDrag = (arr, dragResult) => {
    const { removedIndex, addedIndex, payload } = dragResult;
    if (removedIndex === null && addedIndex === null) return arr;

    const result = [...arr];
    let itemToAdd = payload;

    if (removedIndex !== null) {
        itemToAdd = result.splice(removedIndex, 1)[0];
    }

    if (addedIndex !== null) {
        result.splice(addedIndex, 0, itemToAdd);
    }

    return result;
};

export const generateItems = (count, creator) => {
    const result = [];
    for (let i = 0; i < count; i++) {
        result.push(creator(i));
    }
    return result;
};

export const randomBackground = () => {
    const cardColors = ['azure', 'beige', 'bisque', 'blanchedalmond', 'burlywood', 'cornsilk', 'gainsboro', 'ghostwhite', 'ivory', 'khaki'];
    const rand = Math.floor((Math.random() * 10));
    return cardColors[rand];
};