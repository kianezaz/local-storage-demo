window.onload = () => { 

    const storage = {};

    storage.getItems = () => {
        // localStorage and sessionStorage only store strings so you must JSON.parse() to process arrays
        return JSON.parse(sessionStorage.getItem('recipes')) || [];
      };

    storage.addItem = recipe => {
        const currRecipes = storage.getItems();
        currRecipes.push(recipe);
        // localStorage only stores strings so you must JSON.stringify() to process any arrays
        sessionStorage.setItem('recipes', JSON.stringify(currRecipes));
    };

    let submitBut = document.querySelector("button");
    submitBut.addEventListener("click", () => {
        const recipeName = document.getElementById("recipe-name");
        const recipeTags = document.getElementById("recipe-tags");
        console.log(recipeName.value);
        console.log(recipeTags.value.split(', '));

        let newRecipe = {
            name: recipeName.value,
            tags: recipeTags.value.split(', ')
        }

        storage.addItem(newRecipe);

        recipeName.value = "";
        recipeTags.value = "";
    });

}
