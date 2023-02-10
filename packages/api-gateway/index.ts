const express = require("express");
const fetch = require("node-fetch");
import createServer from "./server";

export const app = createServer();
const port = 3001;
// @ts-nocheck
app.get("/restaurant/:restaurantId", async (req, res) => {
  try {
    const { restaurantId } = req.params;
    const result = await fetch(
      `https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/${restaurantId}.json`
    );
    const data = await result.json();
    res.send(data);
  } catch (error) {
    console.error(`Error occured: ${(error as Error).message}`);
    res.status(500).send("Error Occurred");
  }
});

app.get("/restaurant/:restaurantId/menus/:menuName/short", async (req, res) => {
  try {
    const { restaurantId, menuName } = req.params;
    const result = await fetch(
      `https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/${restaurantId}/menus/${menuName}/short.json`
    );
    const data = await result.json();
    res.send(data);
  } catch (error) {
    console.error(`Error occured: ${(error as Error).message}`);
    res.status(500).send("Error Occurred");
  }
});

app.get("/restaurant/:restaurantId/menus/:menuName/full", async (req, res) => {
  try {
    const { restaurantId, menuName } = req.params;
    const result = await fetch(
      `https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/${restaurantId}/menus/${menuName}/full.json`
    );
    const data = await result.json();
    res.send(data);
  } catch (error) {
    console.error(`Error occured: ${(error as Error).message}`);
    res.status(500).send("Error Occurred");
  }
});

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error) {
  console.error(`Error occured: ${(error as Error).message}`);
}

