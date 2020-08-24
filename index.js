let express = require('express');
let app = express();
app.use(express.static("public"));
//app.use(express.bodyParser());


let exphbs = require('express-handlebars');

const extNameHbs = 'hbs';
let hbs = exphbs.create({ extname: extNameHbs });
app.engine(extNameHbs, hbs.engine);
app.set('view engine', extNameHbs);
let appConfig = require('./configs/app');
let methodOverride = require('method-override')
app.use(methodOverride('_method'))
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
let appRoutes = require('./routes/app');

app.use('/', appRoutes);
app.listen(appConfig.express_port, () => {
    let show = 'App listening on port ' + appConfig.express_port + '! (http://localhost:' + appConfig.express_port + ')';
    console.log(show);
});