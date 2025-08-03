const { Kafka } = require('kafkajs');

// Create a Kafka client
const kafka = new Kafka({
  clientId: 'my-producer',
  brokers: ["kafka-3e7774de-abc123-in.g.aivencloud.com:27072"], // Replace with your broker addresses
  "security.protocol": "ssl",
  "ssl.key.location": "service.key",
  "ssl.certificate.location": "service.cert",
  "ssl.ca.location": "ca.pem",
  dr_cb: true,
});

// Create a producer instance
const producer = kafka.producer();

const run = async () => {
  await producer.connect();
  await producer.send({
    topic: 'test-topic', // Replace with your topic
    messages: [
      { value: 'Hello KafkaJS!' },
    ],
  });
  console.log('Message sent successfully');
  await producer.disconnect();
};

run().catch(console.error);
