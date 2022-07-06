import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html',
  styleUrls: ['./calcul.component.css']
})
export class CalculComponent implements OnInit {
  op = "";
  val1 = 0;
  val2 = 0;
  result = 0;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe ((res) => {
      this.op = res.get('op') ?? "",
      this.val1 = +(res.get('val1') ?? ""),
      this.val2 = Number(res.get('val2') ?? "")
      if (this.op == 'plus') {
        this.op = '+';
        this.result = this.val1+this.val2
      } else if (this.op == 'moins') {
        this.op = '-';
        this.result = this.val1-this.val2
      } else if (this.op == 'fois') {
        this.op = '*';
        this.result = this.val1*this.val2
      } else {
        this.op = '/';
        this.result = this.val1/this.val2
      }
    })
  }

}
