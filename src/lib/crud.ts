import { db } from '$lib/firebase';
import { 
  collection, 
  addDoc, 
  doc, 
  getDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  getDocs 
} from 'firebase/firestore';

// Ejemplo de CRUD para usuarios
export const userCRUD = {
  // Create (Crear) un nuevo usuario
  create: async (userData: { 
    email: string, 
    displayName?: string, 
    // otros campos que quieras guardar
  }) => {
    try {
      const docRef = await addDoc(collection(db, 'users'), {
        ...userData,
        createdAt: new Date()
      });
      return docRef.id;
    } catch (error) {
      console.error("Error creating user", error);
      throw error;
    }
  },

  // Read (Leer) un usuario por ID
  getById: async (userId: string) => {
    try {
      const docRef = doc(db, 'users', userId);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
      } else {
        console.log("No such document!");
        return null;
      }
    } catch (error) {
      console.error("Error getting user", error);
      throw error;
    }
  },

  // Read (Leer) usuarios por email
  getByEmail: async (email: string) => {
    try {
      const q = query(collection(db, 'users'), where('email', '==', email));
      const querySnapshot = await getDocs(q);
      
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error("Error getting users", error);
      throw error;
    }
  },

  // Update (Actualizar) un usuario
  update: async (userId: string, newData: Partial<{
    displayName?: string,
    // otros campos actualizables
  }>) => {
    try {
      const userDoc = doc(db, 'users', userId);
      await updateDoc(userDoc, {
        ...newData,
        updatedAt: new Date()
      });
    } catch (error) {
      console.error("Error updating user", error);
      throw error;
    }
  },

  // Delete (Eliminar) un usuario
  delete: async (userId: string) => {
    try {
      const userDoc = doc(db, 'users', userId);
      await deleteDoc(userDoc);
    } catch (error) {
      console.error("Error deleting user", error);
      throw error;
    }
  }
};

// Ejemplo de CRUD para otro modelo (por ejemplo, posts)
export const postCRUD = {
  create: async (postData: {
    title: string,
    content: string,
    authorId: string
  }) => {
    try {
      const docRef = await addDoc(collection(db, 'posts'), {
        ...postData,
        createdAt: new Date()
      });
      return docRef.id;
    } catch (error) {
      console.error("Error creating post", error);
      throw error;
    }
  },
};