import * as sdk from "node-appwrite";

export const {
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
} = process.env;

const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT;

const client = new sdk.Client();

client.setEndpoint('https://cloud.appwrite.io/v1').setProject('66c1eebc0003419688dc').setKey('0f57af2653b5463e8c173a32cbed16f5ac37b4be1a0432b0a696a0e722fa9172be8ad1221c32d050ff0379b24ea93073fd8996ddbf8418e81c486cae18d188b65e5b7ebbd5752d16245af78b1e7a822becbe68a4583baf48457bb69d1d017fb0a32c5fe17f8c42eba14ae5cd66b3470b5e94d07a678dd3b7827395c197c3b9a2');

export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);