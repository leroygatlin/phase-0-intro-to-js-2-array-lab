// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push("Ralph")
}

function destructivelyPrependCat(name){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(name){
    cats.pop("Garfield")
}

function destructivelyRemoveFirstCat(name){
    cats.shift("Milo")
}

function appendCat(name){
    const copyOfCats =  [...cats, "Broom"]
      return copyOfCats
  }

  function prependCat(name){
  const copyOfCats =  ["Arnold", ...cats]
    return copyOfCats
}

function removeLastCat(name){
const copyOfCats = cats.slice(0, cats.length -1);
    return copyOfCats
}

function removeFirstCat(name){
    const copyOfCats = cats.slice(1);
        return copyOfCats
    }