import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

// Da rota mais especifica para a mais geral
router
	.get("/livros", LivroController.listarLivros)
	.get("/livros/busca", LivroController.listarLivroPorEditora)
	.get("/livros/:id", LivroController.listarLivroPorId)
	.post("/livros", LivroController.cadastrarLivro)
	.put("/livros/:id", LivroController.atualizarLivro)
	.delete("/livros/:id", LivroController.excluirLivro);

export default router;
