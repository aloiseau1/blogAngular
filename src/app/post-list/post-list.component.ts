import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIt: number;
  @Input() postCreatedAt: Date;

  constructor() { }

  ngOnInit() {
  }

  getItemSuccess(){
    if(this.postLoveIt > 0){
      return true;
    } else {
      return false;
    }
  }

  getItemDanger(){
    if(this.postLoveIt < 0){
      return true;
    } else {
      return false;
    }
  }

  getColor(){
    if(this.postLoveIt < 0){
      return 'red';
    } else if(this.postLoveIt > 0){
      return 'green';
    }
  }

  onAddLoveIt(){
    this.postLoveIt++;
  }

  onRemoveLoveIt(){
    this.postLoveIt--;
  }
}