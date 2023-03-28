import React from "react";

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function TestPage() {
  await delay(3000);
  return <div>Next Project - TestPage</div>;
}
