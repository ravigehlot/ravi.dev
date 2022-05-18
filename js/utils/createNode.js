function createNewNodeLink(element, href, rel = 'stylesheet') {
    let node = document.createElement(element);

    node.href = href;
    node.rel = rel;

    return node;
}