import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-communityprofile-charts',
  templateUrl: './communityprofile-charts.component.html',
  styleUrls: ['./communityprofile-charts.component.css']
})
export class CommunityprofileChartsComponent implements OnInit {
 message:string;
  messages:any=[{
    messagetype:"to",
    message:'hi i want to know more about this product'
  },
  {
    messagetype:'from',
    message:'hi what info do u need'
  },
  {
    messagetype:'from',
    message:'hi what info do u need'
  },
  {
    messagetype:'from',
    message:'hi what info do u need'
  },
  {
    messagetype:"to",
    message:'hi i want to know more about this product'
  },
  {
    messagetype:"to",
    message:'hi i want to know more about this product'
  },
  {
    messagetype:'from',
    message:'hi what info do u need'
  },
  {
    messagetype:"to",
    message:'hi i want to know more about this product'
  },
  {
    messagetype:"to",
    message:'hi i want to know more about this product'
  },
  {
    messagetype:'from',
    message:'hi what info do u need'
  },
  {
    messagetype:"to",
    message:'hi i want to know more about this product'
  },
  {
    messagetype:"to",
    message:'hi i want to know more about this product'
  },
  {
    messagetype:'from',
    message:'hi what info do u need'
  },
  {
    messagetype:"to",
    message:'hi i want to know more about this product'
  },
  {
    messagetype:"to",
    message:'hi i want to know more about this product'
  }
]
  constructor() { }

  ngOnInit(): void {
  }
  sendmessage()
  {
    this.messages.push(
      {
        messagetype:'to',
        message:this.message
      }
    );
    this.message='';
  }

}
