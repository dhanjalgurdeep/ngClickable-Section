import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  opened = false;
  title = "Hello Panel";
  body = "this is the content";

  temp: any[];
  xy: any[];
  flag: boolean[];
  ind: number;

  constructor() {
    this.temp = [1, 2]; /// Graql data 1-Account, 2-Loan
    this.xy = [0, 0];
    this.flag = [false, false];
  }

  showMethod(xx, flag, idx) {
    //console.log(x, show);
    //show = !show;
    //this.xy = xx;
    console.log(idx);
    for (let i = 0; i < this.xy.length; i++) {
      if (idx === i) {
        this.xy[i] = xx;
      }
    }

    for (let x = 0; x < this.flag.length; x++) {
      if (idx === x) {
        this.flag[x] = flag;
      }
    }

    console.log("xy :", this.xy);
    console.log("flag :", this.flag);
  }
}

/*
 * EXERCISES:
 * Duration: 10 / 15 mins
 * 
 * 1. Display 'title' and 'body' properties into the HTML template
 * 
 * TIP: use template tags {{propName}}
 * 
 * 
 * -------------------------
 * 2. Move following inline expression: 
 * 
    (click)="opened = ! opened"
 * 
 * into a class method:
 * 
    (click)="toggle()"
 * 
 * TIP: Use `this` (`this.opened`) to access a class property 
 * 
 * 
 * -------------------------
 * 3. Add a new panel.
 * 
 * TIP: you can copy-paste both, template and class properties, 
 * adding the number '2' as suffix. For example:
 
    opened2 = true;
    title2 = 'header';
    body2 = 'another content';
 
 * 
 * 4. In the second panel try to 
 * use `[hidden]="VALUE"` instead of `*ngIf`
 * 
 * TIP: `[hidden]` hides the content when the expression return true, while `*ngIf` shows it
 */
