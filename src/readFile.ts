//import { writeFile } from "fs/promises";
import { readFile, /*writeFile*/ } from "fs/promises";

/*
const exec = async () =>{
    console.log("lendo em um file...");
    try {
        const text = await readFile("./arquivo.txt", "utf-8");
        console.log("Conteúdo do arquivo:", text);
    } catch (err) {
        console.error("Erro ao ler o arquivo:", err);
    }
}
exec();
*/


const exec = async () =>{
    const fileContent = await readFile("./arquivo.txt", { encoding:"utf-8"});
    console.log("Conteúdo do arquivo:\n", fileContent);
    const list = fileContent.split(',\n');
    console.log("Conteúdo do arquivo em forma de lista:\n", list);
}
exec();