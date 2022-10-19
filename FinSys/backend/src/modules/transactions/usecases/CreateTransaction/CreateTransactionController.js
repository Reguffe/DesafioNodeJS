import { CreateTransactionUseCase } from "./CreateTransactionUseCase.js";

export class CreateTransactionController {
  constructor() {
    this.createTransactionUseCase = new CreateTransactionUseCase();
  }

  handle(request, response) {
    const { title, type, category, amount } = request.body;

    const transaction = this.createTransactionUseCase.execute({
    title,
    type, 
    category,
    amount,
        });

    return response.json(transaction);
  }
}