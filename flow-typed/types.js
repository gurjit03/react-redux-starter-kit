// @flow

export type Show = {
  title: string,
  trailer: string,
  description: string,
  year: string,
  poster: string,
  imdbID: string,
};

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void,
  },
};
