import { initializeApp } from 'firebase/app';
import { addDoc, getFirestore, collection } from 'firebase/firestore/lite';
import config from './config';

const firebaseConfig = {
  apiKey: config.FIREBASE_API_KEY,
  authDomain: config.FIREBASE_AUTH_DOMAIN,
  projectId: config.FIREBASE_PROJECT_ID,
  storageBucket: config.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: config.FIREBASE_MESSAGING_SENDER_ID,
  appId: config.FIREBASE_APP_ID,
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function createTicket(threadId: string, text: string) {
  try {
    await addDoc(collection(db, 'tickets'), {
      threadId,
      text,
      createdAt: new Date(),
    });
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}
