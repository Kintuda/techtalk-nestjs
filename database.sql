CREATE TYPE "transactions_type" AS ENUM (
  'withdrawal',
  'deposit',
  'transfer'
);

CREATE TYPE "account_type" AS ENUM (
  'withdrawal',
  'deposit',
  'transfer'
);

CREATE TABLE "accounts" (
  "id" uuid PRIMARY KEY,
  "description" varchar,
  "type" account_type,
  "routing_number" varchar NOT NULL,
  "created_at" timestamp NOT NULL,
  "updated_at" timestamp NOT NULL
);

CREATE TABLE "transactions" (
  "id" uuid PRIMARY KEY,
  "account" uuid,
  "amount" float,
  "type" transactions_type,
  "created_at" timestamp NOT NULL,
  "updated_at" timestamp NOT NULL
);