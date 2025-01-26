export interface Pesquisa {
  map(arg0: ({ valor }: { valor: any; }) => any): Pesquisa;
  title: string;
  link: string;
  image: string;
  contextLink: string;
  items: []
  kind: string
}
