npx sequelize model:generate --name Tag --attributes tag:string

npx sequelize model:generate --name RouteType --attributes type:string


npx sequelize model:generate --name City --attributes name:string,state:string

npx sequelize model:generate --name Trail --attributes name:string,uri:string,overview:text,length:integer,elevationGain:integer,routeType:string,tag:string,difficulty:enum,city:string


npx sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string,hashedPassword:string

npx sequelize model:generate --name List --attributes name:string


npx sequelize model:generate --name UserTrail --attributes userId:integer,trailId:integer,listId:integer,isFavorite:boolean

npx sequelize model:generate --name TrailTag --attributes trailId:integer,tag:string
