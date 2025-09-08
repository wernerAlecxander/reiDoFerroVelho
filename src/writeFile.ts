import { writeFile } from "fs/promises";

const exec = async () =>{
    console.log("escrevendo em um file...");
    const list = ['aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff']
    const txtlist = list.join(',\n');
    await writeFile("./arquivo.txt", txtlist);
    console.log("arquivo escrito com sucesso!");
}
exec();