import { findLast } from '@angular/compiler/src/directive_resolver';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { matFormFieldAnimations } from '@angular/material/form-field';
@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.css']
})
export class LogincomponentComponent implements OnInit {
  form:any;
  login=true;
  buttonname;
  
  dropdownvalue=[];
  node={
    children:[
      {
        children:[
          {
            children:[
            { children:[
              {
                children:[
                 {
                   children:[
                     {
                      //  children:[
                      //    {
                      //     type:'text',
                      //     text:'vamsi'
                      //    }
                      //  ]
                     }
                   ]
                 }
                ]
              }
            ]}
             
          ]
          }
        ]
      }
    ]
  }
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
   this.dropdownvalue=[
    {
     value:'default',
     display:false     
    },
    {
      value:'default',
      display:false
    },
    {
      value:'default',
      display:false
    }
   ]

  

    //this.forminit();
   // console.log(this.a);
   // node = {...this.a}
 
// let a = node
// do {
// if(a.children && a.children.length == 0 && !(a.data)){
// return ''
// }
// if(a.children && a.children.length > 0){
// a = a.children[0]
// }
// if (a.type && a.type === "text" && a.data) {
// return a.data
// }
// }
// while (!( a.type && a.type == "text" && a.data))
// can u try like these
// renderText(node) {
// console.log(JSON.stringify(node))
let a;
a= this.node;
console.log(this.find(a));

  
   
  // children( b:any)
  // {
  //  if(b.hasOwnProperty('children'))
  //  {
  //    if(b.children.length>0)
  //    {
  //      let j=0;
  //      while(j<b.children.length)
  //      {
  //        if(b.children[j].hasOwnProperty('children'))
  //        {
  //         // console.log(b.children[j]);
  //          b=b.children[j];
  //          this.children(b);
  //        }
  //        else
  //        {
  //          console.log(b.children[j]);
  //          return b.children[j];
  //        }
  //        j++;
  //      }
  //    }
  //    else
  //    {
  //      console.log('empty');
  //      return b;
  //    }
  //  }
  //  else
  //  {
  //    console.log('no');
  // https://code.angularjs.org/1.8.2/angular.min.js.map
  //    return b;
  //  }
  // }
  }
  change(i:any)
  {
    console.log("inside", this.dropdownvalue[i].display)
    if(this.dropdownvalue[i].display)
    {
      console.log('inif')
      this.dropdownvalue[i].display=false;
    }
    else
    {
      console.log('else');
      this.dropdownvalue[i].display=true;
    }
  }


  find(a)
  {
    do {
      console.log('inside');
    if(a.hasOwnProperty('children')){
      // console.log('inside if')
      if( a.children.length == 0)
      {
        //console.log('length0');
      return 'length0'
    }
      else if( a.children.length > 0 && a.children[0].hasOwnProperty('children'))
      {
       a=a.children[0];
      }
      else if(a.children.length > 0 && a.children[0].hasOwnProperty('type') && a.children[0].hasOwnProperty('text'))
      {
       // console.log(a.children[0].text,a.children[0].type);
        return a.children[0];
      }
      else
      {
        return a.children[0];
      }
    }
    else
    {
      console.log('inside else');
      console.log('blank',a)
      return a;
    }
  }    
    while (!( a.hasOwnProperty('type') && a.hasOwnProperty('text')))
    {
    }
  }

  children( b:any)
  {
   if(b.hasOwnProperty('children'))
   {
     if(b.children.length>0)
     {
      let j=0;
       do
       {
        
        if(b.children[j].hasOwnProperty('children'))
        {
         // console.log(b.children[j]);
          b=b.children[j];
          this.children(b);
        }
        else
        {
          console.log(b.children[j]);
          return b.children[j];
        }
        j++;
       }
      
while(j<b.children.length)
      //  for(let j=0; j<b.children.length;j++)
      
     }
     else
     {
       console.log('empty');
       return b;
     }
    
   }
   else
   {
     console.log('no');
     return b;
   }
  }
  
  forminit()
  {
   this.form=this.fb.group(
     {
      username:['',[Validators.required, Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]]
     }
   )
  }
  switch()
  {
    if(this.login==true)
    {
      this.login=false;
      this.buttonname="Login";
    }
    else
    {
      this.login=true;
      this.buttonname="Signup";
    }
  }
  formsubmit()
  {
    if(this.login==true)
    {
      //login
      console.log(this.form.value);
    }
    else
    {
      console.log("else block",this.form.value);
     //signup
    }
  }
  changeinputtype()
  {

  }

}


