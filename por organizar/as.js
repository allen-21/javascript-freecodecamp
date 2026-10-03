const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords (records, id, prop, value){
  const newRecords = { ...recordCollection};
  if(value === ""){
    delete newRecords[id][prop];
  }else if(prop === "tracks") {
    if(!newRecords[id].hasOwnProperty("tracks")){
      newRecords[id][prop] = [];
    }
    newRecords[id][prop].push(value);
   
  }else {
    newRecords[id][prop] = value;

  }

  return newRecords[id];

}

console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"))
console.log(updateRecords(recordCollection, 2548, "artist", ""))
console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"))
console.log(updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"))
console.log(updateRecords(recordCollection, 2468, "tracks", "Free"))
console.log(updateRecords(recordCollection, 2548, "tracks", ""))
console.log(updateRecords(recordCollection, 1245, "albumTitle", "Riptide"))