import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  contactForm;
  sectionTwo = [];
  sectionThree = [];
  sectionOne = [];
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      photo: ['', Validators.required],
      section: [''],
    });
  }

  images = [
    {
      id: 1,
      src: 'https://media.istockphoto.com/photos/red-abstract-iris-picture-id1302300754?b=1&k=20&m=1302300754&s=170667a&w=0&h=DR27bm9NQWAtrnHNhbpbWphy-hGYqrzP51Jxj2hhtR8=',
    },
    {
      id: 2,
      src: 'https://media.istockphoto.com/photos/abstract-wavy-object-picture-id1198271727?b=1&k=20&m=1198271727&s=170667a&w=0&h=b626WM5c-lq9g_yGyD0vgufb4LQRX9UgYNWPaNUVses=',
    },
    {
      id: 3,
      src: 'https://media.istockphoto.com/photos/colored-powder-explosion-on-white-background-picture-id1132442970?b=1&k=20&m=1132442970&s=170667a&w=0&h=qZU1t7UPVUZanRUaPIrTa0IJejHGrNQldpWTl_v92M0=',
    },
    {
      id: 4,
      src: 'https://www.xda-developers.com/files/2021/12/1_pantone_collab_dark.jpg',
    },
  ];

  onSubmit(data): void {
    const findId = this.images.find((data1) => data1.id === data.photo);
    const findIndex = this.images.findIndex((data1) => data1.id === data.photo);
    if (data.section === 1 && data.photo < 5) {
      this.sectionOne.push(this.images[findIndex]);
      this.images.splice(findIndex, 1);
    } else if (data.section === 2 && data.photo < 5) {
      this.sectionTwo.push(findId);
      this.images.splice(findIndex, 1);
    } else if (data.section === 3 && data.photo < 5) {
      this.sectionThree.push(findId);
      this.images.splice(findIndex, 1);
    } else if (data.photo > 4) {
      alert('image not found');
    }
  }
  GetData(event) {
    console.log('event', event);
    this.images.push(event);
  }
}
