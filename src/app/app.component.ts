import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  contactForm;
  firstSection;
  secondSection;
  thirdSecion;
  section = [];
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
      src: 'https://media.istockphoto.com/photos/abstract-wavy-object-picture-id1198271727?b=1&k=20&m=1198271727&s=170667a&w=0&h=b626WM5c-lq9g_yGyD0vgufb4LQRX9UgYNWPaNUVses',
    },
  ];

  onSubmit(data): void {
    // console.log(data);
    const findId = this.images.find((data1) => data1.id === data.photo);
    console.log(findId);
    if (data.section === 1) {
      this.firstSection = findId;
      this.section.push(findId);
      console.log(this.section);
    } else if (data.section === 2) {
      this.secondSection = findId;
    } else if (data.section === 3) {
      this.thirdSecion = findId;
    }
  }
}
