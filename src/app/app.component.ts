import { Component } from '@angular/core';
import { ExampleServiceService, Fact } from './example-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'http';
  public fact: Fact | undefined = undefined;
  public fact2: Fact | undefined = undefined;

  public cachedFact: Fact | undefined = undefined;
  public cachedFact2: Fact | undefined = undefined;

  constructor(private service: ExampleServiceService) {}

  public ngOnInit(): void {
    /**
     * Uncached Example
     */
    this.service.getFact().subscribe((fact) => {
      console.log(fact);
      this.fact = fact;
    });

    // subsequent call
    this.service.getFact().subscribe((fact) => {
      console.log(fact);
      this.fact2 = fact;
    });

    /**
     * Cached Example
     */
    this.service.getFactCached().subscribe((fact) => {
      console.log(fact);
      this.cachedFact = fact;
    });

    // subsequent call

    this.service.getFactCached().subscribe((fact) => {
      console.log(fact);
      this.cachedFact2 = fact;
    });
  }
}
