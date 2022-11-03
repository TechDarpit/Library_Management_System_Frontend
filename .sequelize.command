Sequelize

-------------------------------------------
                Migration
-------------------------------------------


To initialize sequelize
-------------------------------------------
sequelize init

To create migration and model
-------------------------------------------
sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string

Create new column 
-------------------------------------------
sequelize migration:create --name name_of_your_migration

To run migrations
-----------------------------------------
sequelize db:migrate

=========================================

To create seeders
-------------------------------------------
sequelize seed:generate --name demo-user

To run seeders
-----------------------------------------
sequelize db:seed:all

To undo migrations
-----------------------------------------
sequelize db:migrate:undo:all

To undo specific migration
-----------------------------------------
sequelize db:migrate:undo --name 20180704124934-create-branch.js
sequelize db:migrate:undo:all --to 20190501100413-create-error-logs

Disable rebase
-----------------------------------------
git config --global pull.rebase false
git config pull.rebase false
git config --global pull.rebase
git config branch.never.rebase false
git config branch.autoSetupRebase never