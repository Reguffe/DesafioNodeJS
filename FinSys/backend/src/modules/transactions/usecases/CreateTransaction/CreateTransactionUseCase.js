import { TransactionsRepository } from "../../repositories/TransactionsRepository.js";

export class CreateTransactionUseCase {
  constructor() {
    this.transactionRepository = TransactionsRepository.getInstance();
  }

  execute({ title, type, category, amount }) {

    const transaction = this.transactionRepository.create({
        title,
        type,
        category,
        amount,
          });

    return transaction;
  }
}