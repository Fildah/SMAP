function highlightText(node, data) {
  let text = node.nodeValue;

  let segments = text.split(/( )/gi);

  let fragment = document.createDocumentFragment();

  segments.forEach((segment) => {
    if (
      (data.lepek && /lepek|pšenice|pšeničný|pšeničná/gi.test(segment)) ||
      (data.korysi && /korýši|korýše/gi.test(segment)) ||
      (data.vejce && /vejce|vaječný|vaječné|vaječná|vajec/gi.test(segment)) ||
      (data.ryby && /ryby|rybí|ryba/gi.test(segment)) ||
      (data.arasidy &&
        /arašídy|arašídový|arašídová|arašídové/gi.test(segment)) ||
      (data.soja && /soja|sója|sojový|sójový|sojová|sójová/gi.test(segment)) ||
      (data.mleko && /mléko|mléčný|mléčná|mléčné/gi.test(segment)) ||
      (data.skorapky &&
        /skořápky|skořápkové|ořechy|ořechové/gi.test(segment)) ||
      (data.celer && /celer|celerové|celerový|celerová/gi.test(segment)) ||
      (data.horcice && /hořčice|hořčičné|hořčičná/gi.test(segment)) ||
      (data.sezam && /sezam|sezamový|sezamová/gi.test(segment)) ||
      (data.sira &&
        /e220|e221|e222|e223|e224|e226|e227|e228/gi.test(segment)) ||
      (data.vlci && /vlčí|lupina/gi.test(segment)) ||
      (data.mekkysi && /měkkýši/gi.test(segment))
    ) {
      let span = document.createElement("span");
      span.style.backgroundColor = "yellow";
      span.textContent = segment;
      fragment.appendChild(span);
    } else {
      let textNode = document.createTextNode(segment);
      fragment.appendChild(textNode);
    }
  });

  node.parentNode.replaceChild(fragment, node);
}

function walk(root, data) {
  let nodes = [root];

  while (nodes.length > 0) {
    let node = nodes.pop();

    if (node.nodeType === 3) {
      highlightText(node, data);
    } else {
      let children = Array.from(node.childNodes);
      nodes.push(...children);
    }
  }
}

function applyHighlight() {
  chrome.storage.sync.get(
    [
      "lepek",
      "korysi",
      "vejce",
      "ryby",
      "arasidy",
      "soja",
      "mleko",
      "skorapky",
      "celer",
      "horcice",
      "sezam",
      "sira",
      "vlci",
      "mekkysi",
    ],
    function (data) {
      if (data.lepek) {
        walk(document.body, data);
      }
    }
  );
}

applyHighlight();

chrome.storage.onChanged.addListener(function (changes, namespace) {
  if (changes.highlight) {
    applyHighlight();
  }
});
