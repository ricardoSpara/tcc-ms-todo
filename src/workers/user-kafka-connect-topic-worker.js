require("dotenv").config();
require("../database");

const kafka = require("../kafka");
const topics = require("../config/topics");
const usersTopicService = require("../services/users-service");

const start = async () => {
  const consumer = kafka.consumer({ groupId: process.env.APP_NAME });
  await consumer.subscribe({ topic: topics.users_kafka_connect });

  await consumer.run({
    eachMessage: async ({ message }) => {
      console.log({
        value: JSON.parse(message.value.toString()),
      });

      const { payload } = JSON.parse(message.value.toString());

      await usersTopicService.createOrUpdate(payload.after);
    },
  });
};

start().then(() => {
  console.log(`Worker (Users Kafka Connect) running`);
});
