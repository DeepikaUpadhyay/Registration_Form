import { Component } from "@angular/core";
import { MustMatch } from "src/helpers/must-match.validator";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  registrationForm: FormGroup;
  showmessage: boolean = false;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.registrationForm = this.formBuilder.group(
      {
        firstname: ["", Validators.required],
        lastname: ["", Validators.required],
        // password: ["", Validators.required],
        password: new FormControl("", [
          Validators.required,
          Validators.minLength(8),
        ]),
        address: ["", Validators.required],
        state: ["", Validators.required],
        city: ["", Validators.required],
        date: ["", Validators.required],
        confirmpassword: new FormControl("", [
          Validators.required,
          Validators.minLength(8),
        ]),
        email: new FormControl("", [Validators.required, Validators.email]),
        contactNum: new FormControl("", [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ]),
      },
      {
        validator: MustMatch("password", "confirmpassword"),
      }
    );
  }

  onSubmit(post) {
    for (const key in post) {
      if (post[key] === "") {
        this.showmessage = false;
        return;
      } else {
        this.showmessage = true;
      }
    }
  }
}
