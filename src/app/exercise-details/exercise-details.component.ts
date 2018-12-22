import {Component, OnInit} from '@angular/core';
import {Exercise} from '../models/exercise';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-exercise-details',
  templateUrl: './exercise-details.component.html',
  styleUrls: ['./exercise-details.component.css']
})
export class ExerciseDetailsComponent implements OnInit {

  isNewExercise = false;
  selectedExercise: Exercise = {};
  exerciseModelCollection: AngularFirestoreCollection<any>;

  constructor(private  afs: AngularFirestore, private  route: ActivatedRoute, private  router: Router) {
    this.exerciseModelCollection = afs.collection<Exercise>('Exercise');
  }

  ngOnInit() {
    this.route.params.subscribe(r => {
      const exerciseId = r['id'];
      if (!exerciseId) {
        this.isNewExercise = true;
        this.selectedExercise = {};
      } else {
        // Get exercise from firebase
      }
    });


  }

  addDemoButton() {
    this.exerciseModelCollection.add(this.selectedExercise).then(
      () => {
        this.selectedExercise = {};
        this.router.navigate(['exercises']);
      }
    );


  }
}
