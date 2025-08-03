#!/bin/bash
set -e

echo "⏳ Waiting for Kafka Connect to be ready..."
until curl -s http://kafka-connect:8083/connectors > /dev/null; do
  sleep 3
done

echo "✅ Kafka Connect is ready. Registering MongoDB connector..."

curl -s -X POST -H "Content-Type: application/json" \
  --data @/etc/kafka-connect/register-mongo-connector.json \
  http://kafka-connect:8083/connectors
