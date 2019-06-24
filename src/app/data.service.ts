import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  arr = [];

  // parent array
  topic = [
    {
      name: 'Numbers',
      description: 'number system',
      subtopics: [
        {
          name: 'Whole Numbers',
          description: 'description about whole numbers'
        },
        {
          name: 'integers',
          description: 'description about integers'
        }
      ]
    },
    {
      name: 'Addition',
      description: 'Adding numbers',
      subtopics: [
        {
          name: 'Adding 1 digit numbers',
          description: 'description'
        },
        {
          name: 'Adding 2 digit numbers',
          description: 'description'
        }
      ]
    },
    {
      name: 'Multipliction',
      description: 'multyplying numbers',
      subtopics: [
        {
          name: 'Multiplying 1 digit numbers',
          description: 'description'
        }
      ]
    }
  ];

  // function to get topics
  getTopics() {
    return this.topic;
  }

  // function to add topics and subtopics to parent array
  addTopic(newtopic) {
    this.topic.push(newtopic);
  }

  // function to replace topics from parent array when edited
  replaceTopic(newList) {
    this.arr.push(newList);
    this.topic.map(obj => this.arr.find(o => o.name === obj.name) || obj);
    console.log(this.topic);
  }

  constructor() {}
}
