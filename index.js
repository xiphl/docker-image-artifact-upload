const { upload } = require('@skipphl/docker-image-artifact');
const githubActionIO = require('./actions_io');
console.log(`testing2`);
const INPUT_IMAGE = 'image';

const OUTPUT_ARTIFACT_NAME = 'artifact_name';

async function runAction(getInput, writeOutput) {
    const imageName = getInput(INPUT_IMAGE, true);
    console.log(`the length of imageName is ${length(imageName)}`);
    console.log(`upload package: before await upload: ${imageName.split(/\s+/)[0]}`);
    const artifactName = await upload(imageName.split(/\s+/)[0]);
    console.log(`upload package: after await upload`);
    writeOutput(OUTPUT_ARTIFACT_NAME, artifactName);
}

runAction(githubActionIO.getInput, githubActionIO.writeOutput)
    .then(() => console.log("Uploading finished") )
    .catch((err) => githubActionIO.fail(err));
    

