import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Exercise} from '../models/exercise';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})
export class ExerciseListComponent implements OnInit {

  list: Observable<Exercise[]>;
  exerciseModelCollection: AngularFirestoreCollection<any>;


  constructor(private  afs: AngularFirestore, private  router: Router) {
    this.exerciseModelCollection = afs.collection<Exercise>('Exercise');

  }

  addNew() {
    this.router.navigate(['exercises/create']);
  }

  editExercise(exercise: Exercise) {
    this.router.navigate(['exercises/edit', exercise.id]);
  }

  ngOnInit() {
    this.list = this.exerciseModelCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Exercise;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
  }

}
