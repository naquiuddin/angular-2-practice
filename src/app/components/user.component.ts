import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
  moduleId : module.id,
  selector: 'user',
  templateUrl: "user.component.html",
  providers: [PostsService]
})
export class UserComponent  {
  name : string;
  email : string;
  address : address;
  hobbies : string[];
  showHobbies : boolean;
  posts : post[];

  toggleHobbies() {
    console.log("In toggle hobbies");
    this.showHobbies  = !this.showHobbies;
  }

  addHobby(hobby: string){
    this.hobbies.push(hobby);
  }

  removeHobby(e: any,index: number) {
    e.preventDefault();
    console.log("index :" + index)
    this.hobbies.splice(index,1);
  }

  constructor(private postsService: PostsService) {
    console.log("Called Constructor");
    this.name="Khaja Naquiuddin";
    this.email = "naquiuddin@gmail.com";
    this.address = {
      street : "Kashmeergadda",
      city: "Karimnagar",
      state: "Telangana"
    };
    this.hobbies = ['Blogging', 'Reading', 'Programming'];
    this.showHobbies = true;
    this.postsService.getPosts().subscribe( posts => {
      this.posts = posts;
    });
  }
}

interface address {
  street: string,
  city: string,
  state: string
}

interface post {
  body: string;
  id: number;
  title: string;
  userId: number;
}
