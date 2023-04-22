import { Component } from '@angular/core';
import { Contribute } from 'src/app/interfaces/contribute';
import { ContributeService } from 'src/app/services/contribute.service';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.css']
})
export class ContributeComponent {
  private contribute: Contribute = {} as Contribute;

  constructor(private contributeService: ContributeService) {}

  public onSubmit(): void {
    this.contributeService.saveContribute(this.contribute);
  }
}
