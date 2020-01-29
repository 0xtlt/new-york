module.exports = function (doc) {
    if (doc.type === 'page') {
        return doc.node.data.handle.text;
    }
    return `${doc.type}`;
};