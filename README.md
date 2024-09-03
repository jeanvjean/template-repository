<==========================================>
## Getting Started
[repository] git clone https://github.com/jeanvjean/template-code-strxt.git

cd template-code-strxt

- run: npm install <to install dependencies>, 

- npm run create:migration <migration-table-name> <to create migration table>

- npm run create:seed <seed-file-name> <create seed files>

- npm run migrate_up <run up migration>

- npm run migrate_down <drops all migrations>

- npm run migrate:fresh <drops and runs the migration>

- npm run seed:up <seed data>

- npm run seed:down <drop seed>

- Download .env file and put it in the root folder.

- npm run dev <starts the dev server>

- npm run start <for production server>

- npm run test <to run test cases>
<==========================================>

(THOUGHT PROCESS)

- i like a simple to use and completely modular application, so my boiler plate does represent that all in one.
- first, we have a structure that ensures all controllers are in the same folder, different files named in the format folder.module.js (e.g, controller.user.js) for user module
- Middleware's for each module in this format (middleware.user.js). 
- Routes (route.user.js)
- Services (service.user.js)
- Query (query.user.js)

this naming formats applies to other useful module specific files. 
this makes it easy to find functions related to modules and also enables for easy debugging

also there is a necessity for logging on the application that helps us in the debugging process, the file naming paradgime, makes this entire process workable, the loggers are expected to carry the file in which the log is happening, and the function on which the log is coming from. 

- logger is a global function which makes it easy to be used anywhere on the application. logger format (logger.info(DATE:TIME, message, function_label))
- for the function label, we have a folder where that is set, Lib/enums/lib.enums.labels.js)
- in the same folder, messages and statuses are also set there.

- services in the src/services we set external services being used (email service, sms, db service etc). 

- the service in api/services handles all service calls to the database to read or write.

Having these structure makes it easy for follow and build along in any case.

- validation schema using Joi <lib/schema/file.js>

- email templates <lib/templates/file.js> returning the html string which makes it easier than using a templating engine.

- queries could be in the lib folder or in the Api folder i put it in the Lib folder here, it however does carry module specific queries. <lib/queries/module_query_file>

- payload is used to prepare the data that would be sent to the database. <lib/payloads>;
- http folder is used to handle responses, error's and success.