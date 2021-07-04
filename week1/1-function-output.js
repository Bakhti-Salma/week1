// On renvoie un nombre aléatoire entre 0 (inclus) et 1 (exclus)
function getNumber() {
    return Math.random() * 10;
}

// combine le texte de plusieurs chaînes avec la chaîne appelante et renvoie la nouvelle chaîne ainsi formée.
function s(w1, w2) {
    return w1.concat(w2);
}

// Write the body of this function to concatenate three words together
function concatenate(firstWord, secondWord, thirdWord) {
    return '"'+firstWord.concat (secondWord,thirdWord)+'"';
}
console.log(concatenate('code', 'your', 'future'));
