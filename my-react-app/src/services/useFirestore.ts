import { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, addDoc, getDocs, query, where, onSnapshot } from 'firebase/firestore';

export const useFirestore = (collectionName: string) => {
  const [documents, setDocuments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, collectionName));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setDocuments(docs);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [collectionName]);

  const addDocument = async (data: any) => {
    await addDoc(collection(db, collectionName), data);
  };

  return { documents, loading, addDocument };
};
