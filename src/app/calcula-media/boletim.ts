export enum Situacao {
  CURSANDO = 'Cursando',
  APROVADO = 'Aprovado',
  AVFINAL = 'Avaliação Final',
  REPROVADO = 'Reprovado'
}

export class Boletim {
  private bim1: number | undefined
  private bim2: number | undefined
  private bim3: number | undefined
  private bim4: number | undefined
  private mediaParcial: number | undefined
  private mediaFinal: number | undefined
  private situacao: Situacao

  constructor(b1: number | undefined = undefined, b2: number | undefined = undefined, b3: number | undefined = undefined, b4: number | undefined = undefined) {
    this.bim1 = b1
    this.bim2 = b2
    this.bim3 = b3
    this.bim4 = b4
    this.mediaParcial = undefined
    this.mediaFinal = undefined
    this.situacao = Situacao.CURSANDO
  }

  public getBim1(): number | undefined {
    return this.bim1;
  }

  public getBim2(): number | undefined {
    return this.bim2;
  }

  public getBim3(): number | undefined {
    return this.bim3;
  }

  public getBim4(): number | undefined {
    return this.bim4;
  }

  public getMediaParcial(): number | undefined {
    return this.mediaParcial;
  }

  public getMediaFinal(): number | undefined {
    return this.mediaParcial;
  }

  public getSituacao(): Situacao {
    return this.situacao;
  }

  // Setters
  public setBim1(value: number): void {
  if(value >= 0 && value <= 100){
      this.bim1 = value;
    }
  }

  public setBim2(value: number): void {
    if(value >= 0 && value <= 100){
       this.bim2 = value;
    }
  }

  public setBim3(value: number): void {
    if(value >= 0 && value <= 100){
       this.bim3 = value;
    }
  }

  public setBim4(value: number): void {
    if(value >= 0 && value <= 100){
       this.bim4 = value;
    }
  }

  public setSituacao(s: Situacao): void {
    this.situacao = s;
  }

  public setMediaParcial(media: number | undefined): void {
    this.mediaParcial = media;
  }

  public setMediaFinal(media: number | undefined): void {
    this.mediaParcial = media;
  }

    public calcularMediaParcial(b1: number, b2: number, b3: number, b4: number){
    this.setBim1(b1)
    this.setBim2(b2)
    this.setBim3(b3)
    this.setBim4(b4)
    if(this.bim1 !== undefined && this.bim2 !== undefined&& this.bim3 !== undefined && this.bim4 !== undefined){
      this.mediaParcial = ((this.bim1 * 2) + (this.bim2 * 2) + (this.bim3 * 3) + (this.bim4 * 3)) / 10
      this.checkSituacao(this.mediaParcial)
    }
    return this.mediaParcial
  }

  public checkSituacao(mp: number) {
    if (mp >= 60) {
      this.setSituacao(Situacao.APROVADO)
    } else if (mp >= 10) {
      this.setSituacao(Situacao.AVFINAL)
    } else {
      this.setSituacao(Situacao.REPROVADO)
    }
  }

}