import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x77C1AB8D53B5900E0e3464f679aa4A6C7267d106");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Straw Hat",
        description: "This NFT will give you access to LorePieceDAO!",
        image: readFileSync("scripts/assets/strawhat.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
