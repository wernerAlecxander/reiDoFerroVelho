import { readFile, writeFile } from "fs/promises";
//import { spawn } from "child_process";

/*
const exec = async () =>{
    let list: string[] = [];    
    const fileName = "./arquivo.txt";
    try {
      const data = await readFile(fileName, { encoding:"utf-8"});
      list = data.split(',\n');
    console.log("Lista de itens:", list);
    } catch (err) {
      console.log("Arquivo não encontrado. Criando um novo arquivo.");
    }
}    
exec();
*/

/*
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
*/


const fileName = "./arquivo.txt";

const exec = async () => {
  try {
    const data = await readFile(fileName, { encoding: "utf-8" });
    console.log('Conteúdo do arquivo:', data);
  } catch (err: unknown) {
    if (
      typeof err === "object" &&
      err !== null &&
      "code" in err &&
      (err as { code?: string }).code === "ENOENT"
    ) {
      console.log('Arquivo não encontrado.');
      const list = ['AAA', 'BBB', 'CCC', 'DDD', 'EEE', 'FFF', 'GGG'];
      const txtlist = list.join(',\n');
      await writeFile(fileName, txtlist);
    } else {
      console.error('Erro ao ler o arquivo:', err);
    }
  }
};
exec();
