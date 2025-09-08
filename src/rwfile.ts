import { readFile, writeFile } from "fs/promises";
import { spawn } from "child_process";

const exec = async () =>{
    const fileName = "./arquivo.txt";
    try {
    const fileContent = await readFile(fileName, { encoding:"utf-8"});
        if(!fileContent || fileContent.length === 0) {
           const ps = spawn('powershell', ['New-Item', '-Path', './arquivo.txt', '-ItemType', 'file']);
           ps.stdout.on('data', (data) => {
                console.log(`Saída do PowerShell: ${data}`);
            });
            ps.stderr.on('data', (data) => {
                console.error(`Erro do PowerShell: ${data}`);
            });
           const list = ['AAA', 'BBB', 'CCC', 'DDD', 'EEE', 'FFF', 'GGG'];
            const txtlist = list.join(',\n');
            await writeFile(fileName, txtlist);

        } else {
            const txtlist = fileContent.split(',\n');
         txtlist.push('GGG');
        await writeFile(fileName, txtlist);
        }
    }
    catch (err) {
        console.log("deu erro: ", err);
    }
}    
exec();

/*
const exec = async () =>{
    try {
        const fileName = "./arquivo.txt";
    const fileContent = await readFile(fileName, { encoding:"utf-8"});
    if(!fileContent || fileContent.length === 0) {
        const list = ['AAA', 'BBB', 'CCC', 'DDD', 'EEE', 'FFF', 'GGG'];
            const txtlist = list.join(',\n');
            await writeFile(fileName, txtlist);
    } else {
            const txtlist = fileContent.split(',\n');
          txtlist.push('GGG');
        await writeFile(fileName, txtlist);
    }
    } catch (err) {
        console.log("deu erro: ", err);
    }
}
exec();
*/