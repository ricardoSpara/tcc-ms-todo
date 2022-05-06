require("dotenv").config();
require("../database");

const kafka = require("../kafka");
const topics = require("../config/topics");
const usersTopicService = require("../services/users-service");

const start = async () => {
  const consumer = kafka.consumer({ groupId: process.env.APP_NAME });
  await consumer.subscribe({ topic: topics.users });

  await consumer.run({
    eachMessage: async ({ message }) => {
      console.log({
        value: JSON.parse(message.value.toString()),
      });

      await usersTopicService.createOrUpdate(
        JSON.parse(message.value.toString())
      );
    },
  });
};

start().then(() => {
  console.log(`Worker (Users) running`);
});
