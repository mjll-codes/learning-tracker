function lookUpProfile(name, prop) {
  // Only change code below this line

for (var i = 0; i < contacts.length; i += 1) {
 var contact = contacts[i]

 if (contact.firstName === name) {
     if (contact[prop] != undefined) {
     return contact[prop]; }
    return "No such property";
 }
}
 return "No such contact";
