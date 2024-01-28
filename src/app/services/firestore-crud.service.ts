import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Reference } from '../models';

@Injectable({
  providedIn: 'root',
})
export class FirestoreCrudService {
  firestore = inject(Firestore);

  getAll<T>(reference: Reference) {
    return collectionData(collection(this.firestore, reference), {
      idField: 'id',
    }) as Observable<T[]>;
  }

  getById<T>(reference: Reference, id: string) {
    const customerRef = doc(this.firestore, reference, id);
    return docData(customerRef, { idField: id }) as Observable<T>;
  }

  add<T extends { [id: string]: string }>(reference: Reference, model: T) {
    const collectionRef = collection(this.firestore, reference);
    return addDoc(collectionRef, model);
  }

  delete(reference: Reference, id: string) {
    const docRef = doc(this.firestore, reference, id);
    return deleteDoc(docRef);
  }
}
