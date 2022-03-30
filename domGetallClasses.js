function getAllClasses(name) {
  const el = [];
  let curr = [document.body];
  while (curr.length) {
    let first = curr.shift();
    const nodes = first.children;
    const arr = [...nodes];
    arr.forEach((node) => {
      curr.push(node);
      if (node.className === name) {
        el.push(node);
      }
    });
  }

  return el;
}

console.log(getAllClasses("abc"));
