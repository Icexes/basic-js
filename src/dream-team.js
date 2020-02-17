module.exports = function createDreamTeam( members ) {

  return Array.isArray(members) ?
    members.map(curr => typeof curr =='string' ? curr.trim().toUpperCase()[0] : "").sort().join("")
   : false
  
};