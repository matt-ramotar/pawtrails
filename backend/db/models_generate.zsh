npx sequelize model:generate --name Tag --attributes tag:string

npx sequelize model:generate --name City --attributes name:string,state:string

npx sequelize model:generate --name Trail --attributes name:string,allTrailsURI:string,overview:text,length:integer,elevationGain:integer,routeType:enum,difficulty:enum,cityId:integer

npx sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string,username:string,hashedPassword:string

npx sequelize model:generate --name List --attributes name:string


npx sequelize model:generate --name UserTrail --attributes userId:integer,trailId:integer,listId:integer,isFavorite:boolean

npx sequelize model:generate --name TrailTag --attributes trailId:integer,tag:string
