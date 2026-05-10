const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"]
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: []
  },
  5439: {
    albumTitle: "ABBA Gold"
  }
};

function updateRecords(records, id, prop, value) {

  if (value === "") {
    // Rule 2: empty string → delete the property
    delete records[id][prop];

  } else if (prop === "tracks") {
    // Rule 4: no tracks array yet → create one first
    if (!records[id][prop]) {
      records[id][prop] = [];
    }
    // Rule 5: push value to end of tracks array
    records[id][prop].push(value);

  } else {
    // Rule 3: prop isn't tracks, value isn't empty → just assign
    records[id][prop] = value;
  }

  // Rule 1: always return entire records object
  return records;
}