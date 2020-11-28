exports.response_text = (res, string, code) => {
    res.writeHead(code, {
        "Content-Type": "text/plain"
    })
    res.end(string);
}