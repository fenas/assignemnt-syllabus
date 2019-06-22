import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  topic = [
    {
      name: 'Numbers',
      description: 'number system'
    },
    {
      name: 'Addition',
      description: 'Adding numbers'
    },
    {
      name: 'Multipliction',
      description: 'multyplying numbers'
    }
  ];

  subtopics = [
    {
      name: 'add',
      description: 'adding numbers'
    }
  ];

  getTopics() {
    return this.topic;
  }
  getsubtopics() {
    return this.subtopics;
  }

  addTopic(newtopic) {
    this.topic.push(newtopic);
  }
  addsubtopic(newsubtopic) {
    this.subtopics.push(newsubtopic);
  }

  deteteTopic(item) {
    this.topic.splice(this.topic.indexOf(item), 1);
  }

  deteteSubtopic(subs) {
    this.subtopics.splice(this.subtopics.indexOf(subs), 1);
  }
  constructor() {}
}
