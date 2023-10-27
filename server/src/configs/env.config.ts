import * as dotenv from 'dotenv';
dotenv.config();

export const NPM_PACKAGE_VERSION = process.env.npm_package_version || '1.0.0';
export const BE_PORT = process.env.BE_PORT || 8080;
export const POSTGRES_URL =
  process.env.POSTGRES_URL || 'postgres://postgres:postgres@localhost:5432/postgres';
export const NODE_ENV = process.env.NODE_ENV || 'development';
export const JWT_SECRET = process.env.JWT_SECRET || 'secret';
export const TOKEN_EXPIRES_IN = process.env.TOKEN_EXPIRES_IN || '1d';
