import { Component } from '@angular/core';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent {
 userid=""
 id=""
 title=""
 body=""

 readValues=()=>
 {
  let data:any={"userid":this.userid,"id":this.id,"title":this.title,"body":this.body}
  console.log(data)
 }
}
