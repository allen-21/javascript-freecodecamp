const pantry = [
  {
    sku: "A10",
    name: "Tomatoes",
    qty: 4,
    expires: "2027-01-01",
    zone: "fridge",
  },
  {
    sku: "D43",
    name: "Pineapples",
    qty: 2,
    expires: "2020-01-01",
    zone: "general",
  },
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge",
];

function parseShipment(rawData) {
  const result = [];

  for (const item of rawData) {
    const partes = item.split("|");
    const [sku, name, qty, expires, zone] = partes;
    const existe = result.some((produto) => produto.sku === sku);

    if (existe) {
      continue;
    }

    const produto = {
      sku,
      name,
      qty: Number(qty),
      expires,
      zone: zone || "general",
    };
    result.push(produto);

    return result;
  }
}

function planRestock(pantry, shipment) {
  const actions = [];
  for (const item of shipment) {
    const action = {
      type: "",
      item,
    };

    if (item.qty <= 0) {
      action.type = "discard";
    } else if (pantry.some((produto) => produto.sku === item.sku)) {
      action.type = "restock";
    } else {
      action.type = "donate";
    }
    actions.push(action);
  }
  return actions;
}

function groupByZone(actions) {
  const result = {};

  for (const action of actions) {
    const zone = action.item.zone;
    if (!result[zone]) {
      result[zone] = [];
    }
    result[zone].push(action);
  }
  return result;
}

function clonePantry(pantry) {
  const clone = [];
  for (const item of pantry) {

    clone.push({...item});
  }
  return clone;
}

const shipment = parseShipment(rawData);

const pantryClone = clonePantry(pantry);

const actions = planRestock(pantryClone, shipment);

const grouped = groupByZone(actions);

console.log(grouped);
