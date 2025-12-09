
import { Request, Response } from "express";
import { LivroRepository } from "../repositories/LivroRepository";

export class LivroController {
  static async criar(req: Request, res: Response) {
    try {
      const livro = LivroRepository.create(req.body);
      const saved = await LivroRepository.save(livro);
      res.status(201).json(saved);
    } catch (e: any) {
      res.status(400).json({ error: e.message });
    }
  }

  static async listar(req: Request, res: Response) {
    const livros = await LivroRepository.find();
    res.json(livros);
  }

  static async buscarPorId(req: Request, res: Response) {
    const livro = await LivroRepository.findOneBy({ id: Number(req.params.id) });
    if (!livro) return res.status(404).json({ error: "Livro não encontrado" });
    res.json(livro);
  }

  static async atualizar(req: Request, res: Response) {
    const id = Number(req.params.id);
    let livro = await LivroRepository.findOneBy({ id });
    if (!livro) return res.status(404).json({ error: "Livro não encontrado" });
    await LivroRepository.update(id, req.body);
    livro = await LivroRepository.findOneBy({ id });
    res.json(livro);
  }

  static async deletar(req: Request, res: Response) {
    const id = Number(req.params.id);
    const livro = await LivroRepository.findOneBy({ id });
    if (!livro) return res.status(404).json({ error: "Livro não encontrado" });
    await LivroRepository.delete(id);
    res.status(204).send();
  }
}
