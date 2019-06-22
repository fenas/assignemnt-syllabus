import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
// import { ConsoleReporter } from 'jasmine';

// import { Topic } from './topic.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  topics: any[];
  // subtopics: any[];
  editOn = false;
  newtopic: any = {};
  newsubtopic: any = {};
  subtopics: any[];

  constructor(public topicdata: DataService) {}

  ngOnInit() {
    this.topics = this.topicdata.getTopics();
    this.subtopics = this.topicdata.getsubtopics();
    console.log(this.topics);
  }

  openInputs() {
    this.editOn = true;
    this.newtopic = {};
    this.newsubtopic = {};
  }

  onEditTopic(item) {
    this.editOn = true;
    this.newtopic = item;
    console.log(item);
    this.newsubtopic = {};
  }

  addNewTopic(topic, subtopic) {
    console.log(topic);
    console.log(subtopic);
    this.topicdata.addTopic(topic);
    this.editOn = false;
  }

  addSubtopic(newsubtopic) {
    console.log(newsubtopic);
    this.topicdata.addsubtopic(newsubtopic);
  }

  deleteTopic(item) {
    this.topicdata.deteteTopic(item);
  }

  deleteSubtopic(subs) {
    this.topicdata.deteteSubtopic(subs);
  }
}
