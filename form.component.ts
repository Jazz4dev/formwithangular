import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  show = true;
  show1 =false;
  show2 = false;
    Next1(){
    this.show1 =true ;
    this.show = false;
    this.progressValue = "50%"
   }
   preClick1(){
     this.show1 = false;
     this.show = true
     this.progressValue ="16%"
   }
   Next2(){
    this.show =false;
    this.show1 =false;
    this.show2 =true;
    this.progressValue ="100%"
   }
   preClick2() {
     this.show=false;
     this.show1 =true;
     this.show2 =false;
     this.progressValue="50%"
   }
   previous0(){
     alert('You Can not go Back')
   }
  
  
     public progressValue : any = "17%";
  trigger(tabType){
    if(tabType=='about'){
      this.progressValue="17%";
    }else if(tabType=='account'){
      this.progressValue="50%";
    }else if(tabType=='addres'){
      this.progressValue="80%";
    }
    else if(tabType=='finish'){
      this.progressValue="100%";
    }
  }
}
