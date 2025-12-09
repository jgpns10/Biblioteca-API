
import { Router } from "express";
import { LivroController } from "../controllers/LivroController";

const router = Router();

router.post("/api/livros", LivroController.criar);
router.get("/api/livros", LivroController.listar);
router.get("/api/livros/:id", LivroController.buscarPorId);
router.put("/api/livros/:id", LivroController.atualizar);
router.delete("/api/livros/:id", LivroController.deletar);

export default router;
