import {config}from 'dotenv'
config()

export const BD_HOST=process.env.BD_HOST ||  mysql.railway.internal
export const BD_DATABASE=process.env.BD_DATABASE|| railway
export const DB_USER=process.env.DB_USER|| root
export const DB_PASSWORD=process.env.DB_PASSWORD|| pzKmchdwcsBAYLYPJXdxnCccpETzjDay
export const DB_PORT=process.env.DB_PORT|| 58505
export const PORT= process.env.PORT|| 3000