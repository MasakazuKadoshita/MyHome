window.onload = domtree();

function domtree() {
  let treeAttributes = document.getElementsByTagName('tree').item(0).children;
  treeAttributes.namedItem('tree_heading').innerHTML = 'Testing Tree structure';

  let escapeHTML = function(str) {
    return str.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
  };

  let treeData = treeAttributes.namedItem('tree_data');
  let root = treeData.children.item(0);
  let dataShowingWindow = treeAttributes.namedItem('data_showing_window');
  let codeField =
      dataShowingWindow.children.item(1).children.namedItem('code_field');
  codeField.innerHTML = escapeHTML(root.outerHTML);
}