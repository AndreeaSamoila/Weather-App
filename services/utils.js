/**
 * @param {string} input URL catre request
 * @returns Datele de la request transformate in obiect
 */

async function fetchAndParse(input) {
    const response = await fetch(input);
    return response.json();
}