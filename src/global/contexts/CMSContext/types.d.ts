import { ReactNode } from "react";

export interface IItemDataPrismic {
  type: string;
  text: string;
  spans: Array<any>;
}

export interface IDataPrismic {
  display_title: IItemDataPrismic[];
  display_description: IItemDataPrismic[];
  display_phone: number;
}

export interface IPages {
  home: IDataPrismic;
}

export interface IContext {
  pages: IPages;
}

export interface IProvider {
  children: any;
}
