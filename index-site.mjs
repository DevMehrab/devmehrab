import { google } from "googleapis";
import { readFile } from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function notifyGoogle() {
  try {
    const keyPath = join(__dirname, "glass-arcade-466916-m1-6b034fb55b7e.json");
    const keyFile = process.env.INDEXING_SERVICE_ACCOUNT
      ? JSON.parse(process.env.INDEXING_SERVICE_ACCOUNT)
      : JSON.parse(await readFile(keyPath, "utf8"));
    const key = JSON.parse(keyFile);

    // 1. Better Auth Initialization
    // Using fromJSON is the safest way as it handles internal mapping for you
    const auth = google.auth.fromJSON(keyFile);
    auth.scopes = ["https://www.googleapis.com/auth/indexing"];

    console.log(`✅ Credentials loaded for: ${key.client_email}`);

    // 2. Initialize the Indexing API with the auth object directly
    const indexer = google.indexing({
      version: "v3",
      auth: auth,
    });

    console.log("📡 Sending request to Google...");

    // 3. The Actual Request
    const response = await indexer.urlNotifications.publish({
      requestBody: {
        url: "https://devmehrab.com", // <--- DOUBLE CHECK THIS IS YOUR DOMAIN
        type: "URL_UPDATED",
      },
    });

    console.log("🚀 SUCCESS!");
    console.log("Status:", response.status);
    console.log(
      "Notification Type:",
      response.data.urlNotificationMetadata?.latestUpdate?.type,
    );
  } catch (error) {
    console.error("❌ ERROR DETAILS:");
    if (error.response) {
      // This prints the actual error from Google's servers
      console.error(JSON.stringify(error.response.data, null, 2));
    } else {
      console.error(error.message);

      // Troubleshooting hint for the "No key" error
      if (error.message.includes("No key or keyFile set")) {
        console.log("\n💡 Troubleshooting Hint:");
        console.log(
          "The script found the file, but the 'private_key' field inside it might be malformed or missing.",
        );
        console.log(
          'Open your .json file and ensure it contains a line starting with: "private_key": "-----BEGIN PRIVATE KEY-----...',
        );
      }
    }
  }
}

notifyGoogle();
