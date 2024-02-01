function hasDuplicateIds(root, idSet = new Set()){
  if(!root) return false;

  // if root has an id and id-set has that same id then return true
  if(idSet.has(root.id)) return true;

  // if the root has an id then we add it to the set
  root.id && idSet.add(root.id)

  // we do to the child nodes
  if(root.hasChildNodes()){
    for(let child of root.children){
      const result = hasDuplicateIds(child, idSet);

      if(result) return true
    }
  }
  return false;
}

module.exports = hasDuplicateIds;