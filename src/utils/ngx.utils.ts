export const applyDrag = (arr: any[], dragResult: any) => {

    console.log("Drag Result", dragResult);
    let { removedIndex, addedIndex, payload } = dragResult;

    if (!Array.isArray(payload)) {
        const payloadData = payload;
        payload = [payloadData];
    }
    if (removedIndex === null && addedIndex === null) return arr;
    const result = [...arr];
    payload.forEach((element: any, index: number) => {
        let itemToAdd = element;

        if (removedIndex !== null) {
            itemToAdd = result.splice(removedIndex, 1)[0];
        }

        if (addedIndex !== null) {
            result.splice(addedIndex, 0, itemToAdd);
        }
    });


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