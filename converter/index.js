const axios = require("axios");
const j2s = require("joi-to-swagger");
const { events } = require("./events");

const swaggerBody = process.env.SWAGGER_EVENTS;

// console.log({ branch: !!branch, platform: !!platform, url: !!url });

if (!!swaggerBody)
  new Promise(() => {
    const { branch, url, platform } = JSON.parse(swaggerBody);
    if (!branch || !url || !platform)
      throw new Error(
        `"Missed \nbanch: ${branch}, or \nplatform: ${platform} or \nurl: ${url}.\nSkip push events.`
      );

    const jsonData = Object.keys(events).reduce(
      (acc, curr) =>
        Object.assign({}, acc, {
          [curr]: {
            description: events[curr].description,
            categoryName: events[curr].categoryName,
            data: events[curr].schema ? j2s(events[curr].schema).swagger : null
          }
        }),
      {}
    );

    console.log(JSON.stringify({ jsonData, platform, branch }, null, 2));
    // axios.post(url, { jsonData, platform, branch })
    return jsonData;
  }).catch(e => console.error("swagger events converter" + e.message));
else {
  console.log("Missed \nSWAGGER_EVENTS. Skip push events.");
}
