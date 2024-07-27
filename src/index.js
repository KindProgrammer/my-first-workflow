const normalizedName = (name) => {
    if (name === '') {
        return 'Аноним';
    }

    const listLetters = name.toLowerCase().split('');
    const [ firstNameLetter, ...otherLetters ] = listLetters;
    const newName = `${firstNameLetter.toUpperCase()}${otherLetters.join('')}`;
    return newName;
}

const helloName = (name) => {
    const newName = normalizedName(name)
    return `Привет, ${newName}!`;
}

export { normalizedName, helloName };