// user.test.js

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Article from "../component/Article";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders articles", async () => {
  const fakeArticle = {
    author: "Angelique Chrisafis",
    content: "Hundreds of firefighters from across the EU have been rushed to France to help battle wildfires in an unprecedented show of international solidarity.\r\nMost are stationed along a 26 mile (40km) active… [+2912 chars]",
    description: "Firefighters from Romania, Poland, Austria, Greece and Italy fight blazes in show of ‘European solidarity’",
    title: "EU countries rush to help France tackle 'monstrous' wildfires - The Guardian",
    url: "https://amp.theguardian.com/world/2022/aug/12/eu-countries-rush-to-help-france-tackle-monstrous-wildfires",
    urlToImage: "https://i.guim.co.uk/img/media/d96f452a2de0ba34b6579e4349a3413317bfcb34/0_272_5720_3432/master/5720.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=a2944659c17a299a1b7fcf45b3fe912b"
  };
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeArticle)
    })
  );

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<Article articleData={fakeArticle} key="123" />, container);
  });

  expect(container.querySelector(".author").textContent).toBe(fakeArticle.author);
  expect(container.querySelector(".title").textContent).toBe(fakeArticle.title);
  expect(container.querySelector(".description").textContent).toBe(fakeArticle.description);
  expect(container.querySelector(".url").href).toBe(fakeArticle.url);
  expect(container.querySelector(".articleImage").src).toBe(fakeArticle.urlToImage);

  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});