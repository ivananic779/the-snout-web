export class TooltipContent {
    title: string;
    row1: string;
    row2: string;

    constructor(title: string, row1: string, row2: string) {
        this.title = title;
        this.row1 = row1;
        this.row2 = row2;
    }

    napraviHTML() {
        return `
        <h3>${this.title}</h3>
        <p> m2  <span class="row1">${this.row1} EUR</span></p>
        <p> broj oglasa  <span class="row2">${this.row2}</span></p>
      `;
    }
}