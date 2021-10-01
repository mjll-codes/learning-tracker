// My code:

function updateRecords(records, id, prop, value) {
  if (prop !== 'tracks' & value !== "") {
    return records.id.prop = value;
}
  else if (prop === "tracks" && records.id.hasOwnProperty("tracks") === false) {
    records.id.prop = [value];
}
  else if (prop === "tracks" && value !== "") {
    return records.id.prop.push(value);
  }
  else if (value === "") {
    delete records.id.prop;
}
return records;
}
updateRecords(recordCollection, 5439, 'artist', 'ABBA'); 

// Solution code:

function updateRecords(records, id, prop, value) {
  if (prop !== 'tracks' && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');
