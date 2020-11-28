exports.generate_id = (todos) => {
    let id = 1;
    while(id in todos){
        id++;
    }
    
    return id;
}

exports.response_text = (res, string, code) => {
    res.writeHead(code, {
        "Content-Type": "text/plain"
    })
    res.end(string);
}