import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  constructor(private route: ActivatedRoute){ }

  ngOnInit(): void {
    var date: Date = new Date(this.route.snapshot.params['date'])
    console.log(date)
  }



  tasks: Planner[] = [
    new Planner("Water Marantha Plant Only"),
    new Planner("Make Breakfast"),
    new Planner("Work On Coding Skills"),
    new Planner("Walk The Dog"),
    new Planner("Do Lower Body Workout"),
    new Planner("Make Lunch"),
    new Planner("Read For An Hour"),
    new Planner("Work On Hobby For 2 Hours"),
    new Planner("Make Dinner"),
  ]

  addTask(newTask: string){
    this.tasks.push(new Planner(newTask))
  }

  removeExistingTask(existingTask: Planner){
    var userConfirmed = confirm(`Are you sure that you want to remove the folllowing task? \n "${existingTask.title}"`)

    if(userConfirmed){
      this.tasks = this.tasks.filter(t => t != existingTask)
    }
  }
}
class Planner{
  constructor(public title: string){
  }
  
  ToggleCompletedTask(){
    // alert('The task: "' + task.title + '" is complete')
    this.isComplete = !this.isComplete
  }
  public isComplete = false 
}


