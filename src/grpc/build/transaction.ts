/* eslint-disable */


export interface HealthCheckRequest {
  service: string;
}

export interface HealthCheckResponse {
  status: string;
}

export interface CheckTransactions {
  id: string;
}

export interface ListTransactions {
  transactions: TransactionResponse[];
}

export interface BalanceResponse {
  balance: number;
}

export interface Transaction {
  account: string;
  amount: number;
  type: string;
}

export interface TransactionResponse {
  id: string;
  account: string;
  amount: number;
  type: string;
  createdAt: string;
  updatedAt: string;
}

export interface TransactionService {

  ListTransaction(request: CheckTransactions): Promise<ListTransactions>;

  CreateTransaction(request: Transaction): Promise<TransactionResponse>;

  Balance(request: CheckTransactions): Promise<BalanceResponse>;

}

export const protobufPackage = 'transaction'
