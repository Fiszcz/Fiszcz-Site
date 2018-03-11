export class degree {
  subject: string;
  ects: number;
  mark: any;

  constructor(subject:string, ects:number, mark:any){
    this.subject = subject;
    this.ects = ects;
    this.mark = mark;
  }
}
