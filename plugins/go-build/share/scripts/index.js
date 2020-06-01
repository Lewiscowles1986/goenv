const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data.json'));

for (const entry of data) {
    try {
        console.log(entry);
        fs.writeFileSync(`output/${entry.version}`, entry.candidates, {mode: 0o644});
        console.log(`Created output/${entry.version} file`);
    } catch(err) {
        console.error(`Unable to write ${entry.version} file`);
    }
}
