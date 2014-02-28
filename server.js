var http = require('http');
var fs = require('fs');
var PORT = 8080;

function resolveFilepath(path) {
	var regex = /^\/[\w_\d\-\.]+$/;
	if (regex.test(path)) {

	}
	var documentRoot = __dirname;
	var absolutePath = documentRoot + path;
	return absolutePath;
}

function resolveFilepathAsync(path, callback) {
	var regex = /^\/[\w_\d\-\.]+$/;
	if (regex.test(path)) {
		
	}
}

server = http.createServer(function(req, res) {
	var absolutePath = resolveFilepath(req.url);
	if (fs.existsSync(absolutePath)) {
		fs.readFile(absolutePath, function(err, data){
			if (err) {
				res.writeHead(403, 'File read error');
			}

			res.end(data);
		});
	} else {
		res.writeHead(404, 'File not found');
	}
});

server.listen(8080);