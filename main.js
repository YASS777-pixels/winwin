const people = [
    { name: 'Max', age: 28 },
    { name: 'Jack', age: 35 },
    { name: 'Marry', age: 22 }
];

function findPersonByAge(age) {
    for (let i = 0; i < people.length; i++) {
        let person = people[i];
        if (person.age === age) {
            return person; // Retourne la personne qui a cet âge
        }
    }
    return null; // Si aucune personne n'a cet âge
}

console.log(findPersonByAge(35)); // { name: 'Jack', age: 35 }
console.log(findPersonByAge(40)); // null

//for each

const showEachOne = () => {
    people.forEach((person, i) => {
        alert(person.name); // Affiche le nom de la personne
        // Modifier l'array ici : Ajouter un nouveau nom après chaque alerte
        if (person.name === 'Max' && i === 0) {
            people.push({ name: 'Tom' }); // Ajoute un nouvel objet à la fin du tableau
        }
    });
    console.log(people); // Affiche le tableau modifié
};

showEachOne(); // Appelle la fonction pour afficher les noms et modifier le tableau

//filtre

function filterProducts() {
    let cheapProducts = [];  // Tableau pour stocker les produits bon marché

    for (let i = 0; i < products.length; i++) {
        // Si le prix du produit est inférieur à 10, on l'ajoute au tableau cheapProducts
        if (products[i].prix < 10) {
            cheapProducts.push(products[i]);
        }
    }

    // On retourne le tableau des produits bon marché
    return cheapProducts;
}

console.log(filterProducts());  // Affiche les produits dont le prix est inférieur à 10

//map
const products = [
    { name: 'Milk', price: 15 },
    { nom: 'Eau', prix: 9 },
    { nom: 'Pain', prix: 5 }
];

const changeProducts = () => {
    return products.map(product => {
        // On copie l'objet et on modifie le prix (en fonction de la propriété `price` ou `prix`)
        if (product.price !== undefined) {
            return { ...product, price: product.price + 2 };
        } else if (product.prix !== undefined) {
            return { ...product, prix: product.prix + 2 };
        }
        return product; // Si aucune propriété de prix n'est trouvée, retourner l'objet tel quel
    });
};

console.log(changeProducts()); // Affiche le tableau avec les prix modifiés
console.log(products); // Affiche le tableau original non modifié

//reduce
const data = [2, 4, 6, 8, 10]

const res = data.reduce((total, currentValue) => total + currentValue)

console.log(res) // Output will be 30
