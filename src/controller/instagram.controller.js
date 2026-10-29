import postService from '../services/posts.services.js';

class PostController {
  async create(req, res) {
    const post = await postService.create(req.body);
    return res.status(201).json(post);
  }

  async getAll(req, res) {
    const posts = await postService.getAll();
    return res.status(200).json(posts);
  }

  async getById(req, res) {
    const post = await postService.getById(req.params.id);
    if (!post) return res.status(404).json({ mensagem: 'Post não encontrado' });
    return res.status(200).json(post);
  }

  async update(req, res) {
    const post = await postService.update(req.params.id, req.body);
    return res.status(200).json(post);
  }

  async delete(req, res) {
    await postService.delete(req.params.id);
    return res.status(204).send();
  }
}

export default new PostController();