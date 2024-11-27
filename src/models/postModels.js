import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

// Estabele uma conexão com o banco de dados atravez da string conexão
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);


//Função asincrona que busca posts no banco de dados
export async function getTodosPosts() {

    // seleciona o banco de dados'imersão-instabytes' 
    const db = conexao.db("imersao-instabytes");
  
    // seleciona a coleção 'posts' no banco de dados 
    const colecao = db.collection("posts");
    
    // Encontrar todos os documentos na coleção e retornalos
    return colecao.find().toArray();
  }
  export async function criarPost(novoPost){
       const db = conexao.db("imersao-instabytes");
       const colecao = db.collection("posts");
       return colecao.insertOne(novoPost);
  }

  export async function atualizarPost(id, novoPost){
     const db = conexao.db("imersao-instabytes");
     const colecao = db.collection("posts");
     const objectId = ObjectId.createFromHexString(id);
     return colecao.updateOne({_id:new ObjectId(objectId)},{$set:novoPost} );
}

