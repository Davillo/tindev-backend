server.get("/", (req, res) => {
    return res.json({ message: `Hello, ${req.query.name}` }); //cria uma rota para "/"
});