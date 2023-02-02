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
        <h3 style="text-center">${this.title}</h3>
        <strong>
        <p style = "font-size: 150%"> m2 = ${this.row1} EUR</p>
        <p style = "font-size: 130%">Aktivni oglasi = ${this.row2}</p>
        </strong>
      `;
    }
}