const inventory = [];

function findProductIndex(nameInventory) {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name.toLowerCase() === nameInventory.toLowerCase()) {
      return i;
    }
  }

  return -1;
}

function addProduct(product) {
  const index = findProductIndex(product.name);

  if (index !== -1) {
    inventory[index].quantity += product.quantity;

    console.log(`${inventory[index].name} quantity updated`);
  } else {
    inventory.push({
      name: product.name.toLowerCase(),
      quantity: product.quantity,
    });

    console.log(`${product.name.toLowerCase()} added to inventory`);
  }
}

function removeProduct(name, quantity) {
    const index = findProductIndex(name);

    const productName = name.toLowerCase();

    if (index === -1) {
        console.log(`${productName} not found`);
        return;
    }

    if (inventory[index].quantity < quantity) {
        console.log(
            `Not enough ${productName} available, remaining pieces: ${inventory[index].quantity}`
        );
        return;
    }

    inventory[index].quantity -= quantity;

    if (inventory[index].quantity === 0) {
        inventory.splice(index, 1);
    } else {
        console.log(
            `Remaining ${productName} pieces: ${inventory[index].quantity}`
        );
    }
}

console.log(findProductIndex("Celular"));
