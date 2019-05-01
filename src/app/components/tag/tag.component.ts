import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'qmp-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  constructor(private route: ActivatedRoute) {


  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      switch (params.idtag) {
        case 0:

      }

    });
  }

}
