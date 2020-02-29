window.onload = domtree();
function domtree() {
  let trees = document.getElementsByTagName('tree');
  let tree = trees.item(0);
  let treeAttributes = tree.children;
  treeAttributes.namedItem('tree_heading').innerHTML = 'Testing Tree structure';
}