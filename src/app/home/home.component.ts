import { Subtopic } from './subtopic.model';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name: string;
  topics: any[];
  editOn = false;
  newtopic: any = {};
  subtopics: any[] = [];
  newOn = false;
  hint = false;
  hint2 = false;
  constructor(public topicdata: DataService) {}

  ngOnInit() {
    this.topics = this.topicdata.getTopics();
    console.log(this.topics);
  }

  openInputs() {
    this.newOn = true;
    this.hint = false;
    this.hint2 = false;
    this.editOn = false;
    this.newtopic = {};
    this.subtopics = [{}];
  }

  closeforms() {
    this.newOn = false;
    this.editOn = false;
  }

  // on edit form
  onEditTopic(item) {
    this.editOn = true;
    this.newOn = false;
    this.newtopic = item;
    this.subtopics = item.subtopics;
    console.log(item);
    // this.newsubtopic = {};
  }

  // on save edit form
  addReplaceTopic(topic, subtopic) {
    console.log(topic);
    console.log(subtopic);
    if (topic.name === '') {
      this.hint2 = true;
    } else {
      const newList = Object.assign(topic, subtopic);
      console.log(newList);
      this.topicdata.replaceTopic(newList);
      this.editOn = false;
      this.newOn = false;

      this.hint2 = false;
    }
  }

  addNewTopic(topic, subtopic) {
    // console.log(topic.name);
    if (topic.name === undefined) {
      this.hint2 = true;
    } else {
      this.name = topic.name.toLowerCase();
      console.log(this.name);
      console.log(this.topics[1].name.toLowerCase());

      if (this.searchForDuplicate(this.name) === true) {
        this.hint = true;
      } else {
        const newList = Object.assign(topic, subtopic);
        this.topicdata.addTopic(newList);
        this.newOn = false;
        this.hint = false;
        this.hint2 = false;
      }
    }
  }

  searchForDuplicate(name) {
    for (var i = 0; i < this.topics.length; i++) {
      console.log('im here');
      if (this.topics[i].name.toLowerCase() === name) {
        return true;
      }
    }
  }

  addSubtopic() {
    this.subtopics.push({});
  }

  deleteTopic(item) {
    this.topics.splice(this.topics.indexOf(item), 1);
  }

  deleteSubtopic(subs) {
    this.subtopics.splice(this.subtopics.indexOf(subs), 1);
  }
}
