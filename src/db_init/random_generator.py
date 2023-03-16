import random
from string import ascii_uppercase, ascii_lowercase

LOREM_IPSUM_TEXT = "Lorem ipsum dolor sit amet, fugit habemus vel id. Te vix sonet regione, quo cu tollit pertinacia, efficiendi deterruisset ne cum. Alii appetere eum ut, id simul laudem maiestatis eum, ius habeo recteque definitionem an. Legere fuisset delicata id usu, eu aperiam alterum cum, cu mel eros falli.\
    Vivendum concludaturque vix ut. Legimus luptatum mei ex, oblique nominavi noluisse vix ei. Ei option eleifend posidonium per, facer latine ponderum in vis. Eu mei verear perfecto, qui id delectus percipitur interpretaris. Nostro luptatum recusabo ea sea, in mel erat audire. Vel impedit denique te.\
    Eu verear oblique vituperata mei, est ei vidisse dolores, eam alienum postulant splendide at. Vim ne tritani praesent, ceteros oporteat ut vis. Ad putant verterem expetendis nam, ad vel viris appareat. Nec ne audire vulputate, id has erat clita, sea nulla erroribus id. Ea vix mundi scriptorem, timeam deserunt volutpat ne eos. Eu tritani dolores sed, munere nemore utroque no vix, veri instructior eos no. No legimus sadipscing nam.\
    Has duis ullum munere in. In sint oblique consequat has, ponderum salutandi mei ne, eu pro dicit officiis placerat. Ea purto case has. Mentitum prodesset philosophia mea id. Admodum accumsan ex vis.\
    Mea et elit suscipit dissentias, et debet choro iudicabit vis. Debet maiorum vituperata mel ne, mel omnes mucius labitur te. Utinam homero et nam. Duo albucius adipisci cotidieque an, nam libris reprehendunt ne. Quis equidem mel no.\
    Vim eu quot suavitate complectitur. Ut nam harum aliquid, quo ea dolorem hendrerit, forensibus adversarium mea in. Per quando nemore no, mea ex efficiendi suscipiantur. Cum ea discere reformidans, te sit enim prodesset. Usu ut modus delenit, purto deserunt prodesset eum ne, unum luptatum vim et. Mel invenire periculis comprehensam ad, eos id omnesque percipitur, cu qui probo detracto deleniti.\
    Movet solet quaerendum his ex. Ei libris adipisci nam. Ex mollis ancillae recteque vix. Vix detracto delectus intellegam cu, eius fuisset interesset duo ei. At bonorum suavitate qui. Eam dictas percipitur dissentias id, dissentiunt intellegebat ut per.\
    Cum et quem alia dicam, at duo ferri nullam dolorem, pri cibo torquatos ne. Sit at intellegat consectetuer, mel decore ceteros et. Sit an laudem omnium volumus. Consul saperet pro ne. Dicit everti interpretaris no mea. His no vocent timeam eleifend, te vim accusam appareat, elit inani ridens te sit.\
    Id pri libris similique. Enim omnis errem cum an, id scripta reformidans eum. Cum duis labores eu, duo falli iusto accusata te, audire appareat corrumpit ad vis. Eum cetero nusquam cu, probo ubique te nam. Tritani prompta vim ex.\
    At vel nostro cetero oporteat. Discere democritum eum cu. Stet denique scaevola in has, laoreet deterruisset consequuntur no usu, in putent nostro delectus per. Platonem suavitate definiebas cum no, cum at atqui dicta periculis. An eros accusam noluisse sed, te sea harum tincidunt moderatius, ut viris tritani pri. Ne eum albucius mnesarchum, sonet sensibus perpetua te quo.\
    Ex latine laoreet vim, eum odio mucius nusquam no. Dicam erroribus tincidunt per ei. An vim integre postulant intellegam, erat reque fuisset at nam. Iriure scaevola luptatum qui ad, molestiae consequuntur nam at. Fastidii laboramus nam ei, te has dolore ancillae, ut ubique gloriatur forensibus vim. Vidisse argumentum necessitatibus ei sed, te sed laudem debitis fuisset, eu noster laboramus pri.\
    Diam menandri forensibus nam ea. Cum consetetur intellegam cu, ea populo reformidans per. Eum cu vocibus habemus deleniti, ei nam natum qualisque conceptam, eu mel ponderum repudiare. Eu usu omnes facilisis, mutat etiam ei vim. Mel placerat phaedrum petentium id, diam invenire voluptatibus ei eum, ea iusto delectus appellantur vix. Et duis impedit quaestio vim, commune officiis repudiandae at eam, nam et fugit habemus petentium. Et sed sumo movet virtute.\
    Deseruisse sadipscing in cum, pri id postea fuisset. Sed et debet viris definitionem, mucius mediocrem cum et, te mel essent scripserit intellegebat. An per quaestio vulputate, ne vis oporteat pericula prodesset. Has malorum erroribus id, an nec harum perpetua accommodare.\
    Ut aeque debitis est, ne sit iudico scripserit. Esse numquam ut vim, has sint mundi splendide at. Ne mel cetero consetetur, an qui discere ancillae. Cu nemore volumus repudiandae quo. No regione quaerendum est, vis et integre placerat repudiandae.\
    Ei vel posse legere indoctum, nam wisi ocurreret conceptam et. Melius commune assentior est eu, cu dico atqui pro. Minimum complectitur no qui. Nonumes accumsan cum at, qui idque persecuti definitionem an, pro in libris quaeque eloquentiam. Ei dolores sensibus vim, admodum invidunt his ex."

NAMES_JSON = {
    "repo": {
        "american": "https://github.com/rossgoodwin/american-names",
        "world": "https://github.com/thm/uinames/blob/master/names.json",
        "full info": "https://gist.github.com/kyodgorbek/4610d2ae66574c93fc96a97af4cfdb3b"
    },
    "firstnames": ["John", "William", "James", "Charles", "George", "Frank", "Joseph", "Thomas", "Henry", "Robert", "Edward", "Harry", "Walter", "Arthur", "Fred", "Albert", "Samuel", "David", "Louis", "Joe", "Charlie", "Clarence", "Richard", "Andrew", "Daniel", "Ernest", "Will", "Jesse", "Oscar", "Lewis", "Peter", "Benjamin", "Frederick", "Willie", "Alfred", "Sam", "Roy", "Herbert", "Jacob", "Tom", "Elmer", "Carl", "Lee", "Howard", "Martin", "Michael", "Bert", "Herman", "Jim", "Francis", "Harvey", "Earl", "Eugene", "Ralph", "Claude", "Edwin", "Ben", "Charley", "Paul", "Edgar", "Isaac", "Otto", "Luther", "Lawrence", "Ira", "Patrick", "Guy", "Oliver", "Theodore", "Hugh", "Clyde", "Alexander", "August", "Floyd", "Homer", "Jack", "Leonard", "Horace", "Marion", "Philip", "Allen", "Archie", "Stephen", "Chester", "Willis", "Raymond", "Rufus", "Warren", "Jessie", "Milton", "Alex", "Leo", "Julius", "Ray", "Sidney", "Bernard", "Dan", "Jerry", "Calvin", "Perry", "Dave", "Anthony", "Eddie", "Amos", "Dennis", "Clifford", "Leroy", "Wesley", "Alonzo", "Garfield", "Franklin", "Emil", "Leon", "Nathan", "Harold", "Matthew", "Levi", "Moses", "Everett", "Lester", "Winfield", "Adam", "Lloyd", "Mack", "Fredrick", "Jay", "Jess", "Melvin", "Noah", "Aaron", "Alvin", "Norman", "Gilbert", "Elijah", "Victor", "Gus", "Nelson", "Jasper", "Silas", "Jake", "Christopher", "Mike", "Percy", "Adolph", "Maurice", "Cornelius", "Felix", "Reuben", "Wallace", "Claud", "Roscoe", "Sylvester", "Earnest", "Hiram", "Otis", "Simon", "Willard", "Irvin", "Mark", "Jose", "Wilbur", "Abraham", "Virgil", "Clinton", "Elbert", "Leslie", "Marshall", "Owen", "Wiley", "Anton", "Morris", "Manuel", "Phillip", "Augustus", "Emmett", "Eli", "Nicholas", "Wilson", "Alva", "Harley", "Newton", "Timothy", "Marvin", "Ross", "Curtis", "Edmund", "Jeff", "Elias", "Harrison", "Stanley", "Columbus", "Lon", "Ora", "Ollie", "Pearl", "Russell", "Solomon", "Arch", "Asa", "Clayton", "Enoch", "Irving", "Mathew", "Nathaniel", "Scott", "Hubert", "Lemuel", "Andy", "Ellis", "Emanuel", "Joshua", "Millard", "Vernon", "Wade", "Cyrus", "Miles", "Rudolph", "Sherman", "Austin", "Bill", "Chas", "Lonnie", "Monroe", "Byron", "Edd", "Emery", "Grant", "Jerome", "Max", "Mose", "Steve", "Gordon", "Abe", "Pete", "Chris", "Clark", "Gustave", "Orville", "Lorenzo", "Bruce", "Marcus", "Preston", "Bob", "Dock", "Donald", "Jackson", "Cecil", "Barney", "Delbert", "Edmond", "Anderson", "Christian", "Glenn", "Jefferson", "Luke", "Neal", "Burt", "Ike", "Myron", "Tony", "Conrad", "Joel", "Matt", "Riley", "Vincent", "Emory", "Isaiah", "Nick", "Ezra", "Green", "Juan", "Clifton", "Lucius", "Porter", "Arnold", "Bud", "Jeremiah", "Taylor", "Forrest", "Roland", "Spencer", "Burton", "Don", "Emmet", "Gustav", "Louie", "Morgan", "Ned", "Van", "Ambrose", "Chauncey", "Elisha", "Ferdinand", "General", "Julian", "Kenneth", "Mitchell", "Allie", "Josh", "Judson", "Lyman", "Napoleon", "Pedro", "Berry", "Dewitt", "Ervin", "Forest", "Lynn", "Pink", "Ruben", "Sanford", "Ward", "Douglas", "Ole", "Omer", "Ulysses", "Walker", "Wilbert", "Adelbert", "Benjiman", "Ivan", "Jonas", "Major", "Abner", "Archibald", "Caleb", "Clint", "Dudley", "Granville", "King", "Mary", "Merton", "Antonio", "Bennie", "Carroll", "Freeman", "Josiah", "Milo", "Royal", "Dick", "Earle", "Elza", "Emerson", "Fletcher", "Judge", "Laurence", "Neil", "Roger", "Seth", "Glen", "Hugo", "Jimmie", "Johnnie", "Washington", "Elwood", "Gust", "Harmon", "Jordan", "Simeon", "Wayne", "Wilber", "Clem", "Evan", "Frederic", "Irwin", "Junius", "Lafayette", "Loren", "Madison", "Mason", "Orval", "Abram", "Aubrey", "Elliott", "Hans", "Karl", "Minor", "Wash", "Wilfred", "Allan", "Alphonse", "Dallas", "Dee", "Isiah", "Jason", "Johnny", "Lawson", "Lew", "Micheal", "Orin", "Addison", "Cal", "Erastus", "Francisco", "Hardy", "Lucien", "Randolph", "Stewart", "Vern", "Wilmer", "Zack", "Adrian", "Alvah", "Bertram", "Clay", "Ephraim", "Fritz", "Giles", "Grover", "Harris", "Isom", "Jesus", "Johnie", "Jonathan", "Lucian", "Malcolm", "Merritt", "Otho", "Perley", "Rolla", "Sandy", "Tomas", "Wilford", "Adolphus", "Angus", "Arther", "Carlos", "Cary", "Cassius", "Davis", "Hamilton", "Harve", "Israel", "Leander", "Melville", "Merle", "Murray", "Pleasant", "Sterling", "Steven", "Axel", "Boyd", "Bryant", "Clement", "Erwin", "Ezekiel", "Foster", "Frances", "Geo", "Houston", "Issac", "Jules", "Larkin", "Mat", "Morton", "Orlando", "Pierce", "Prince", "Rollie", "Rollin", "Sim", "Stuart", "Wilburn", "Bennett", "Casper", "Christ", "Dell", "Egbert", "Elmo", "Fay", "Gabriel", "Hector", "Horatio", "Lige", "Saul", "Smith", "Squire", "Tobe", "Tommie", "Wyatt", "Alford", "Alma", "Alton", "Andres", "Burl", "Cicero", "Dean", "Dorsey", "Enos", "Howell", "Lou", "Loyd", "Mahlon", "Nat", "Omar", "Oran", "Parker", "Raleigh", "Reginald", "Rubin", "Seymour", "Young", "Benjamine", "Carey", "Carlton", "Eldridge", "Elzie", "Garrett", "Isham", "Johnson", "Larry", "Logan", "Merrill", "Mont", "Oren", "Pierre", "Rex", "Rodney", "Ted", "Webster", "West", "Wheeler", "Willam", "Aloysius", "Alvie", "Anna", "Art", "Augustine", "Bailey", "Benjaman", "Beverly", "Bishop", "Clair", "Cloyd", "Coleman", "Dana", "Duncan", "Dwight", "Emile", "Evert", "Henderson", "Hunter", "Jean", "Lem", "Luis", "Mathias", "Maynard", "Miguel", "Mortimer", "Nels", "Norris", "Pat", "Phil", "Rush", "Santiago", "Sol", "Sydney", "Thaddeus", "Thornton", "Tim", "Travis", "Truman", "Watson", "Webb", "Wellington", "Winfred", "Wylie", "Alec", "Basil", "Baxter", "Bertrand", "Buford", "Burr", "Cleveland", "Colonel", "Dempsey", "Early", "Ellsworth", "Fate", "Finley", "Gabe", "Garland", "Gerald", "Herschel", "Hezekiah", "Justus", "Lindsey", "Marcellus", "Olaf", "Olin", "Pablo", "Rolland", "Turner", "Verne", "Volney", "Williams", "Almon", "Alois", "Alonza", "Anson", "Authur", "Benton", "Billie", "Cornelious", "Darius", "Denis", "Dillard", "Doctor", "Elvin", "Emma", "Eric", "Evans", "Gideon", "Haywood", "Hilliard", "Hosea", "Lincoln", "Lonzo", "Lucious", "Lum", "Malachi", "Newt", "Noel", "Orie", "Palmer", "Pinkney", "Shirley", "Sumner", "Terry", "Urban", "Uriah", "Valentine", "Waldo", "Warner", "Wong", "Zeb", "Abel", "Alden", "Archer", "Avery", "Carson", "Cullen", "Doc", "Eben", "Elige", "Elizabeth", "Elmore", "Ernst", "Finis", "Freddie", "Godfrey", "Guss", "Hamp", "Hermann", "Isadore", "Isreal", "Jones", "June", "Lacy", "Lafe", "Leland", "Llewellyn", "Ludwig", "Manford", "Maxwell", "Minnie", "Obie", "Octave", "Orrin", "Ossie", "Oswald", "Park", "Parley", "Ramon", "Rice", "Stonewall", "Theo", "Tillman", "Addie", "Aron", "Ashley", "Bernhard", "Bertie", "Berton", "Buster", "Butler", "Carleton", "Carrie", "Clara", "Clarance", "Clare", "Crawford", "Danial", "Dayton", "Dolphus", "Elder", "Ephriam", "Fayette", "Felipe", "Fernando", "Flem", "Florence", "Ford", "Harlan", "Hayes", "Henery", "Hoy", "Huston", "Ida", "Ivory", "Jonah", "Justin", "Lenard", "Leopold", "Lionel", "Manley", "Marquis", "Marshal", "Mart", "Odie", "Olen", "Oral", "Orley", "Otha", "Press", "Price", "Quincy", "Randall", "Rich", "Richmond", "Romeo", "Russel", "Rutherford", "Shade", "Shelby", "Solon", "Thurman", "Tilden", "Troy", "Woodson", "Worth", "Aden", "Alcide", "Alf", "Algie", "Arlie", "Bart", "Bedford", "Benito", "Billy", "Bird", "Birt", "Bruno", "Burley", "Chancy", "Claus", "Cliff", "Clovis", "Connie", "Creed", "Delos", "Duke", "Eber", "Eligah", "Elliot", "Elton", "Emmitt", "Gene", "Golden", "Hal", "Hardin", "Harman", "Hervey", "Hollis", "Ivey", "Jennie", "Len", "Lindsay", "Lonie", "Lyle", "Mac", "Mal", "Math", "Miller", "Orson", "Osborne", "Percival", "Pleas", "Ples", "Rafael", "Raoul", "Roderick", "Rose", "Shelton", "Sid", "Theron", "Tobias", "Toney", "Tyler", "Vance", "Vivian", "Walton", "Watt", "Weaver", "Wilton", "Adolf", "Albin", "Albion", "Allison", "Alpha", "Alpheus", "Anastacio", "Andre", "Annie", "Arlington", "Armand", "Asberry", "Asbury", "Asher", "Augustin", "Auther", "Author", "Ballard", "Blas", "Caesar", "Candido", "Cato", "Clarke", "Clemente", "Colin", "Commodore", "Cora", "Coy", "Cruz", "Curt", "Damon", "Davie", "Delmar", "Dexter", "Dora", "Doss", "Drew", "Edson", "Elam", "Elihu", "Eliza", "Elsie", "Erie", "Ernie", "Ethel", "Ferd", "Friend", "Garry", "Gary", "Grace", "Gustaf", "Hallie", "Hampton", "Harrie", "Hattie", "Hence", "Hillard", "Hollie", "Holmes", "Hope", "Hyman", "Ishmael", "Jarrett", "Jessee", "Joeseph", "Junious", "Kirk", "Levy", "Mervin", "Michel", "Milford", "Mitchel", "Nellie", "Noble", "Obed", "Oda", "Orren", "Ottis", "Rafe", "Redden", "Reese", "Rube", "Ruby", "Rupert", "Salomon", "Sammie", "Sanders", "Soloman", "Stacy", "Stanford", "Stanton", "Thad", "Titus", "Tracy", "Vernie", "Wendell", "Wilhelm", "Willian", "Yee", "Zeke", "Abbott", "Agustus", "Albertus", "Almer", "Alphonso", "Alvia", "Artie", "Arvid", "Ashby", "Augusta", "Aurthur", "Babe", "Baldwin", "Barnett", "Bartholomew", "Barton", "Bernie", "Blaine", "Boston", "Brad", "Bradford", "Bradley", "Brooks", "Buck", "Budd", "Ceylon", "Chalmers", "Chesley", "Chin", "Cleo", "Crockett", "Cyril", "Daisy", "Denver", "Dow", "Duff", "Edie", "Edith", "Elick", "Elie", "Eliga", "Eliseo", "Elroy", "Ely", "Ennis", "Enrique", "Erasmus", "Esau", "Everette", "Firman", "Fleming", "Flora", "Gardner", "Gee", "Gorge", "Gottlieb", "Gregorio", "Gregory", "Gustavus", "Halsey", "Handy", "Hardie", "Harl", "Hayden", "Hays", "Hermon", "Hershel", "Holly", "Hosteen", "Hoyt", "Hudson", "Huey", "Humphrey", "Hunt", "Hyrum", "Irven", "Isam", "Ivy", "Jabez", "Jewel", "Jodie", "Judd", "Julious", "Justice", "Katherine", "Kelly", "Kit", "Knute", "Lavern", "Lawyer", "Layton", "Cristiano", "Diego", "Karim", "Zinedine"],

    "lastnames": ["Smith", "Johnson", "Williams", "Brown", "Jones", "Miller", "Davis", "Garcia", "Rodriguez", "Wilson", "Martinez", "Anderson", "Taylor", "Thomas", "Hernandez", "Moore", "Martin", "Jackson", "Thompson", "White", "Lopez", "Gonzalez", "Harris", "Clark", "Lewis", "Robinson", "Walker", "Perez", "Hall", "Young", "Allen", "Sanchez", "Wright", "King", "Scott", "Green", "Baker", "Adams", "Nelson", "Hill", "Ramirez", "Campbell", "Mitchell", "Roberts", "Carter", "Phillips", "Evans", "Turner", "Torres", "Parker", "Collins", "Edwards", "Stewart", "Flores", "Morris", "Nguyen", "Murphy", "Rivera", "Cook", "Rogers", "Morgan", "Peterson", "Cooper", "Reed", "Bailey", "Bell", "Gomez", "Kelly", "Howard", "Ward", "Diaz", "Richardson", "Wood", "Watson", "Brooks", "Bennett", "Gray", "James", "Reyes", "Cruz", "Hughes", "Price", "Myers", "Long", "Foster", "Sanders", "Ross", "Morales", "Powell", "Sullivan", "Russell", "Ortiz", "Jenkins", "Gutierrez", "Perry", "Butler", "Barnes", "Fisher", "Henderson", "Coleman", "Simmons", "Patterson", "Jordan", "Reynolds", "Hamilton", "Graham", "Gonzales", "Alexander", "Ramos", "Wallace", "Griffin", "West", "Cole", "Hayes", "Chavez", "Gibson", "Bryant", "Ellis", "Stevens", "Murray", "Ford", "Marshall", "Owens", "Mcdonald", "Harrison", "Ruiz", "Kennedy", "Wells", "Alvarez", "Woods", "Mendoza", "Castillo", "Olson", "Webb", "Washington", "Tucker", "Freeman", "Burns", "Henry", "Vasquez", "Snyder", "Simpson", "Crawford", "Jimenez", "Porter", "Mason", "Shaw", "Gordon", "Wagner", "Hunter", "Romero", "Hicks", "Dixon", "Hunt", "Palmer", "Robertson", "Black", "Holmes", "Stone", "Meyer", "Boyd", "Mills", "Warren", "Rose", "Rice", "Moreno", "Schmidt", "Patel", "Ferguson", "Nichols", "Herrera", "Medina", "Ryan", "Fernandez", "Weaver", "Daniels", "Stephens", "Gardner", "Payne", "Kelley", "Dunn", "Pierce", "Arnold", "Tran", "Spencer", "Peters", "Hawkins", "Grant", "Hansen", "Castro", "Hoffman", "Hart", "Elliott", "Cunningham", "Knight", "Bradley", "Carroll", "Hudson", "Duncan", "Armstrong", "Berry", "Andrews", "Johnston", "Lane", "Riley", "Carpenter", "Perkins", "Aguilar", "Silva", "Richards", "Willis", "Matthews", "Chapman", "Lawrence", "Garza", "Vargas", "Watkins", "Wheeler", "Larson", "Carlson", "Harper", "George", "Greene", "Burke", "Guzman", "Morrison", "Munoz", "Jacobs", "Obrien", "Lawson", "Franklin", "Lynch", "Bishop", "Carr", "Salazar", "Austin", "Mendez", "Gilbert", "Jensen", "Williamson", "Montgomery", "Harvey", "Oliver", "Howell", "Dean", "Hanson", "Weber", "Garrett", "Sims", "Burton", "Fuller", "Soto", "Mccoy", "Welch", "Chen", "Schultz", "Walters", "Reid", "Fields", "Walsh", "Little", "Fowler", "Bowman", "Davidson", "Day", "Schneider", "Newman", "Brewer", "Lucas", "Holland", "Wong", "Banks", "Santos", "Curtis", "Pearson", "Delgado", "Valdez", "Pena", "Rios", "Douglas", "Sandoval", "Barrett", "Hopkins", "Keller", "Guerrero", "Stanley", "Bates", "Alvarado", "Beck", "Ortega", "Wade", "Estrada", "Contreras", "Barnett", "Caldwell", "Santiago", "Lambert", "Powers", "Chambers", "Nunez", "Craig", "Leonard", "Lowe", "Rhodes", "Byrd", "Gregory", "Shelton", "Frazier", "Becker", "Maldonado", "Fleming", "Vega", "Sutton", "Cohen", "Jennings", "Parks", "Mcdaniel", "Watts", "Barker", "Norris", "Vaughn", "Vazquez", "Holt", "Schwartz", "Steele", "Benson", "Neal", "Dominguez", "Horton", "Terry", "Wolfe", "Hale", "Lyons", "Graves", "Haynes", "Miles", "Park", "Warner", "Padilla", "Bush", "Thornton", "Mccarthy", "Mann", "Zimmerman", "Erickson", "Fletcher", "Mckinney", "Page", "Dawson", "Joseph", "Marquez", "Reeves", "Klein", "Espinoza", "Baldwin", "Moran", "Love", "Robbins", "Higgins", "Ball", "Cortez", "Griffith", "Bowen", "Sharp", "Cummings", "Ramsey", "Hardy", "Swanson", "Barber", "Acosta", "Luna", "Chandler", "Blair", "Daniel", "Cross", "Simon", "Dennis", "Oconnor", "Quinn", "Gross", "Navarro", "Moss", "Fitzgerald", "Doyle", "Mclaughlin", "Rojas", "Rodgers", "Stevenson", "Singh", "Yang", "Figueroa", "Harmon", "Newton", "Paul", "Manning", "Garner", "Mcgee", "Reese", "Francis", "Burgess", "Adkins", "Goodman", "Curry", "Brady", "Christensen", "Potter", "Walton", "Goodwin", "Mullins", "Molina", "Webster", "Fischer", "Campos", "Avila", "Sherman", "Todd", "Chang", "Blake", "Malone", "Wolf", "Hodges", "Juarez", "Gill", "Farmer", "Hines", "Gallagher", "Duran", "Hubbard", "Cannon", "Miranda", "Wang", "Saunders", "Tate", "Mack", "Hammond", "Carrillo", "Townsend", "Wise", "Ingram", "Barton", "Mejia", "Ayala", "Schroeder", "Hampton", "Rowe", "Parsons", "Frank", "Waters", "Strickland", "Osborne", "Maxwell", "Chan", "Deleon", "Norman", "Harrington", "Casey", "Patton", "Logan", "Bowers", "Mueller", "Glover", "Floyd", "Hartman", "Buchanan", "Cobb", "French", "Kramer", "Mccormick", "Clarke", "Tyler", "Gibbs", "Moody", "Conner", "Sparks", "Mcguire", "Leon", "Bauer", "Norton", "Pope", "Flynn", "Hogan", "Robles", "Salinas", "Yates", "Lindsey", "Lloyd", "Marsh", "Mcbride", "Owen", "Solis", "Pham", "Lang", "Pratt", "Lara", "Brock", "Ballard", "Trujillo", "Shaffer", "Drake", "Roman", "Aguirre", "Morton", "Stokes", "Lamb", "Pacheco", "Patrick", "Cochran", "Shepherd", "Cain", "Burnett", "Hess", "Cervantes", "Olsen", "Briggs", "Ochoa", "Cabrera", "Velasquez", "Montoya", "Roth", "Meyers", "Cardenas", "Fuentes", "Weiss", "Hoover", "Wilkins", "Nicholson", "Underwood", "Short", "Carson", "Morrow", "Colon", "Holloway", "Summers", "Bryan", "Petersen", "Mckenzie", "Serrano", "Wilcox", "Carey", "Clayton", "Poole", "Calderon", "Gallegos", "Greer", "Rivas", "Guerra", "Decker", "Collier", "Wall", "Whitaker", "Bass", "Flowers", "Davenport", "Conley", "Houston", "Huff", "Copeland", "Hood", "Monroe", "Massey", "Roberson", "Combs", "Franco", "Larsen", "Pittman", "Randall", "Skinner", "Wilkinson", "Kirby", "Cameron", "Bridges", "Anthony", "Richard", "Kirk", "Bruce", "Singleton", "Mathis", "Bradford", "Boone", "Abbott", "Charles", "Allison", "Sweeney", "Atkinson", "Horn", "Jefferson", "Rosales", "York", "Christian", "Phelps", "Farrell", "Castaneda", "Nash", "Dickerson", "Bond", "Wyatt", "Foley", "Chase", "Gates", "Vincent", "Mathews", "Hodge", "Garrison", "Trevino", "Villarreal", "Heath", "Dalton", "Valencia", "Callahan", "Hensley", "Atkins", "Huffman", "Boyer", "Shields", "Hancock", "Grimes", "Glenn", "Cline", "Delacruz", "Camacho", "Dillon", "Parrish", "Oneill", "Melton", "Booth", "Kane", "Berg", "Harrell", "Pitts", "Savage", "Wiggins", "Brennan", "Salas", "Marks", "Russo", "Sawyer", "Baxter", "Golden", "Hutchinson", "Walter", "Mcdowell", "Wiley", "Rich", "Humphrey", "Johns", "Koch", "Suarez", "Hobbs", "Beard", "Gilmore", "Ibarra", "Keith", "Macias", "Khan", "Andrade", "Ware", "Stephenson", "Henson", "Wilkerson", "Dyer", "Mcclure", "Blackwell", "Mercado", "Tanner", "Eaton", "Clay", "Barron", "Beasley", "Oneal", "Preston", "Small", "Zamora", "Macdonald", "Vance", "Snow", "Mcclain", "Stafford", "Orozco", "Barry", "English", "Shannon", "Kline", "Jacobson", "Woodard", "Huang", "Kemp", "Mosley", "Prince", "Merritt", "Hurst", "Villanueva", "Roach", "Nolan", "Yoder", "Mccullough", "Lester", "Santana", "Valenzuela", "Winters", "Barrera", "Leach", "Berger", "Mckee", "Strong", "Conway", "Stein", "Whitehead", "Bullock", "Escobar", "Knox", "Meadows", "Solomon", "Velez", "Odonnell", "Kerr", "Stout", "Blankenship", "Browning", "Kent", "Lozano", "Bartlett", "Pruitt", "Buck", "Barr", "Gaines", "Durham", "Gentry", "Mcintyre", "Sloan", "Melendez", "Rocha", "Herman", "Sexton", "Moon", "Hendricks", "Rangel", "Stark", "Lowery", "Hardin", "Hull", "Sellers", "Ellison", "Calhoun", "Gillespie", "Mora", "Knapp", "Mccall", "Morse", "Dorsey", "Weeks", "Nielsen", "Livingston", "Leblanc", "Mclean", "Bradshaw", "Glass", "Middleton", "Buckley", "Schaefer", "Frost", "Howe", "House", "Mcintosh", "Pennington", "Reilly", "Hebert", "Mcfarland", "Hickman", "Noble", "Spears", "Conrad", "Arias", "Galvan", "Velazquez", "Huynh", "Frederick", "Randolph", "Cantu", "Fitzpatrick", "Mahoney", "Peck", "Villa", "Michael", "Donovan", "Mcconnell", "Walls", "Boyle", "Mayer", "Zuniga", "Giles", "Pineda", "Pace", "Hurley", "Mays", "Mcmillan", "Crosby", "Ayers", "Case", "Bentley", "Shepard", "Everett", "Pugh", "David", "Mcmahon", "Dunlap", "Bender", "Hahn", "Harding", "Acevedo", "Raymond", "Blackburn", "Duffy", "Landry", "Dougherty", "Bautista", "Shah", "Potts", "Arroyo", "Valentine", "Meza", "Gould", "Vaughan", "Rush", "Avery", "Herring", "Dodson", "Clements", "Sampson", "Tapia", "Bean", "Lynn", "Crane", "Farley", "Cisneros", "Benton", "Ashley", "Mckay", "Finley", "Best", "Blevins", "Friedman", "Moses", "Sosa", "Blanchard", "Huber", "Frye", "Krueger", "Bernard", "Rosario", "Rubio", "Mullen", "Benjamin", "Haley", "Chung", "Moyer", "Choi", "Horne", "Woodward", "Nixon", "Hayden", "Rivers", "Estes", "Mccarty", "Richmond", "Stuart", "Maynard", "Brandt", "Oconnell", "Hanna", "Sanford", "Sheppard", "Church", "Burch", "Levy", "Rasmussen", "Coffey", "Ponce", "Faulkner", "Donaldson", "Schmitt", "Novak", "Costa", "Montes", "Booker", "Cordova", "Waller", "Arellano", "Maddox", "Mata", "Bonilla", "Stanton", "Compton", "Kaufman", "Dudley", "Mcpherson", "Beltran", "Dickson", "Mccann", "Villegas", "Proctor", "Hester", "Cantrell", "Daugherty", "Cherry", "Bray", "Davila", "Rowland", "Levine", "Madden", "Spence", "Good", "Irwin", "Werner", "Krause", "Petty", "Whitney", "Baird", "Hooper", "Pollard", "Zavala", "Jarvis", "Holden", "Haas", "Hendrix", "Mcgrath", "Bird", "Lucero", "Terrell", "Riggs", "Joyce", "Mercer", "Rollins", "Galloway", "Duke", "Odom", "Andersen", "Downs", "Hatfield", "Benitez", "Archer", "Huerta", "Travis", "Mcneil", "Hinton", "Zhang", "Hays", "Mayo", "Fritz", "Branch", "Mooney", "Ewing", "Ritter", "Esparza", "Frey", "Braun", "Riddle", "Haney", "Kaiser", "Holder", "Chaney", "Mcknight", "Gamble", "Vang", "Cooley", "Carney", "Cowan", "Forbes", "Ferrell", "Davies", "Barajas", "Shea", "Osborn", "Bright", "Cuevas", "Bolton", "Murillo", "Lutz", "Duarte", "Kidd", "Cooke", "Goff", "Dejesus", "Marin", "Dotson", "Bonner", "Cotton", "Merrill", "Lindsay", "Lancaster", "Mcgowan", "Felix", "Salgado", "Slater", "Carver", "Guthrie", "Holman", "Fulton", "Snider", "Ronaldo", "Messi"]
}
FIRST_NAMES = NAMES_JSON["firstnames"]
LAST_NAMES = NAMES_JSON["lastnames"]

LOREM_IPSUM_TEXT = LOREM_IPSUM_TEXT.replace(".", "")
LOREM_IPSUM_TEXT = LOREM_IPSUM_TEXT.replace(",", "")
LOREM_IPSUM = LOREM_IPSUM_TEXT.split(" ")

MONTHS = ["January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November",
        "December"
    ]

COUNTRIES = [
    ('US', 'United States'),
    ('AF', 'Afghanistan'),
    ('AL', 'Albania'),
    ('DZ', 'Algeria'),
    ('AS', 'American Samoa'),
    ('AD', 'Andorra'),
    ('AO', 'Angola'),
    ('AI', 'Anguilla'),
    ('AG', 'Antigua And Barbuda'),
    ('AR', 'Argentina'),
    ('AM', 'Armenia'),
    ('AW', 'Aruba'),
    ('AU', 'Australia'),
    ('AT', 'Austria'),
    ('AZ', 'Azerbaijan'),
    ('BS', 'Bahamas'),
    ('BH', 'Bahrain'),
    ('BD', 'Bangladesh'),
    ('BB', 'Barbados'),
    ('BY', 'Belarus'),
    ('BE', 'Belgium'),
    ('BZ', 'Belize'),
    ('BJ', 'Benin'),
    ('BM', 'Bermuda'),
    ('BT', 'Bhutan'),
    ('BO', 'Bolivia'),
    ('BA', 'Bosnia And Herzegowina'),
    ('BW', 'Botswana'),
    ('BV', 'Bouvet Island'),
    ('BR', 'Brazil'),
    ('BN', 'Brunei Darussalam'),
    ('BG', 'Bulgaria'),
    ('BF', 'Burkina Faso'),
    ('BI', 'Burundi'),
    ('KH', 'Cambodia'),
    ('CM', 'Cameroon'),
    ('CA', 'Canada'),
    ('CV', 'Cape Verde'),
    ('KY', 'Cayman Islands'),
    ('CF', 'Central African Rep'),
    ('TD', 'Chad'),
    ('CL', 'Chile'),
    ('CN', 'China'),
    ('CX', 'Christmas Island'),
    ('CC', 'Cocos Islands'),
    ('CO', 'Colombia'),
    ('KM', 'Comoros'),
    ('CG', 'Congo'),
    ('CK', 'Cook Islands'),
    ('CR', 'Costa Rica'),
    ('CI', 'Cote D`ivoire'),
    ('HR', 'Croatia'),
    ('CU', 'Cuba'),
    ('CY', 'Cyprus'),
    ('CZ', 'Czech Republic'),
    ('DK', 'Denmark'),
    ('DJ', 'Djibouti'),
    ('DM', 'Dominica'),
    ('DO', 'Dominican Republic'),
    ('TP', 'East Timor'),
    ('EC', 'Ecuador'),
    ('EG', 'Egypt'),
    ('SV', 'El Salvador'),
    ('GQ', 'Equatorial Guinea'),
    ('ER', 'Eritrea'),
    ('EE', 'Estonia'),
    ('ET', 'Ethiopia'),
    ('FK', 'Falkland Islands (Malvinas)'),
    ('FO', 'Faroe Islands'),
    ('FJ', 'Fiji'),
    ('FI', 'Finland'),
    ('FR', 'France'),
    ('GF', 'French Guiana'),
    ('PF', 'French Polynesia'),
    ('TF', 'French S. Territories'),
    ('GA', 'Gabon'),
    ('GM', 'Gambia'),
    ('GE', 'Georgia'),
    ('DE', 'Germany'),
    ('GH', 'Ghana'),
    ('GI', 'Gibraltar'),
    ('GR', 'Greece'),
    ('GL', 'Greenland'),
    ('GD', 'Grenada'),
    ('GP', 'Guadeloupe'),
    ('GU', 'Guam'),
    ('GT', 'Guatemala'),
    ('GN', 'Guinea'),
    ('GW', 'Guinea-bissau'),
    ('GY', 'Guyana'),
    ('HT', 'Haiti'),
    ('HN', 'Honduras'),
    ('HK', 'Hong Kong'),
    ('HU', 'Hungary'),
    ('IS', 'Iceland'),
    ('IN', 'India'),
    ('ID', 'Indonesia'),
    ('IR', 'Iran'),
    ('IQ', 'Iraq'),
    ('IE', 'Ireland'),
    ('IL', 'Israel'),
    ('IT', 'Italy'),
    ('JM', 'Jamaica'),
    ('JP', 'Japan'),
    ('JO', 'Jordan'),
    ('KZ', 'Kazakhstan'),
    ('KE', 'Kenya'),
    ('KI', 'Kiribati'),
    ('KP', 'Korea (North)'),
    ('KR', 'Korea (South)'),
    ('KW', 'Kuwait'),
    ('KG', 'Kyrgyzstan'),
    ('LA', 'Laos'),
    ('LV', 'Latvia'),
    ('LB', 'Lebanon'),
    ('LS', 'Lesotho'),
    ('LR', 'Liberia'),
    ('LY', 'Libya'),
    ('LI', 'Liechtenstein'),
    ('LT', 'Lithuania'),
    ('LU', 'Luxembourg'),
    ('MO', 'Macau'),
    ('MK', 'Macedonia'),
    ('MG', 'Madagascar'),
    ('MW', 'Malawi'),
    ('MY', 'Malaysia'),
    ('MV', 'Maldives'),
    ('ML', 'Mali'),
    ('MT', 'Malta'),
    ('MH', 'Marshall Islands'),
    ('MQ', 'Martinique'),
    ('MR', 'Mauritania'),
    ('MU', 'Mauritius'),
    ('YT', 'Mayotte'),
    ('MX', 'Mexico'),
    ('FM', 'Micronesia'),
    ('MD', 'Moldova'),
    ('MC', 'Monaco'),
    ('MN', 'Mongolia'),
    ('MS', 'Montserrat'),
    ('MA', 'Morocco'),
    ('MZ', 'Mozambique'),
    ('MM', 'Myanmar'),
    ('NA', 'Namibia'),
    ('NR', 'Nauru'),
    ('NP', 'Nepal'),
    ('NL', 'Netherlands'),
    ('AN', 'Netherlands Antilles'),
    ('NC', 'New Caledonia'),
    ('NZ', 'New Zealand'),
    ('NI', 'Nicaragua'),
    ('NE', 'Niger'),
    ('NG', 'Nigeria'),
    ('NU', 'Niue'),
    ('NF', 'Norfolk Island'),
    ('MP', 'Northern Mariana Islands'),
    ('NO', 'Norway'),
    ('OM', 'Oman'),
    ('PK', 'Pakistan'),
    ('PW', 'Palau'),
    ('PA', 'Panama'),
    ('PG', 'Papua New Guinea'),
    ('PY', 'Paraguay'),
    ('PE', 'Peru'),
    ('PH', 'Philippines'),
    ('PN', 'Pitcairn'),
    ('PL', 'Poland'),
    ('PT', 'Portugal'),
    ('PR', 'Puerto Rico'),
    ('QA', 'Qatar'),
    ('RE', 'Reunion'),
    ('RO', 'Romania'),
    ('RU', 'Russian Federation'),
    ('RW', 'Rwanda'),
    ('KN', 'Saint Kitts And Nevis'),
    ('LC', 'Saint Lucia'),
    ('VC', 'St Vincent/Grenadines'),
    ('WS', 'Samoa'),
    ('SM', 'San Marino'),
    ('ST', 'Sao Tome'),
    ('SA', 'Saudi Arabia'),
    ('SN', 'Senegal'),
    ('SC', 'Seychelles'),
    ('SL', 'Sierra Leone'),
    ('SG', 'Singapore'),
    ('SK', 'Slovakia'),
    ('SI', 'Slovenia'),
    ('SB', 'Solomon Islands'),
    ('SO', 'Somalia'),
    ('ZA', 'South Africa'),
    ('ES', 'Spain'),
    ('LK', 'Sri Lanka'),
    ('SH', 'St. Helena'),
    ('PM', 'St.Pierre'),
    ('SD', 'Sudan'),
    ('SR', 'Suriname'),
    ('SZ', 'Swaziland'),
    ('SE', 'Sweden'),
    ('CH', 'Switzerland'),
    ('SY', 'Syrian Arab Republic'),
    ('TW', 'Taiwan'),
    ('TJ', 'Tajikistan'),
    ('TZ', 'Tanzania'),
    ('TH', 'Thailand'),
    ('TG', 'Togo'),
    ('TK', 'Tokelau'),
    ('TO', 'Tonga'),
    ('TT', 'Trinidad And Tobago'),
    ('TN', 'Tunisia'),
    ('TR', 'Turkey'),
    ('TM', 'Turkmenistan'),
    ('TV', 'Tuvalu'),
    ('UG', 'Uganda'),
    ('UA', 'Ukraine'),
    ('AE', 'United Arab Emirates'),
    ('UK', 'United Kingdom'),
    ('UY', 'Uruguay'),
    ('UZ', 'Uzbekistan'),
    ('VU', 'Vanuatu'),
    ('VA', 'Vatican City State'),
    ('VE', 'Venezuela'),
    ('VN', 'Viet Nam'),
    ('VG', 'Virgin Islands (British)'),
    ('VI', 'Virgin Islands (U.S.)'),
    ('YE', 'Yemen'),
    ('YU', 'Yugoslavia'),
    ('ZR', 'Zaire'),
    ('ZM', 'Zambia'),
    ('ZW', 'Zimbabwe')
]

DOMAINS = ["gmail", "hotmail", "yahoo"]

UPPER_LETTERS = ascii_uppercase
LOWER_LETTERS = ascii_lowercase
NUMBERS = "0123456789"

def random_choice(string_sequence, length):
    x = ""
    for _ in range(length):
        x += random.choice(string_sequence)
    return x

def random_email():
    return  random_choice(NUMBERS, random.randint(3, 5)) + random_choice(LOWER_LETTERS+UPPER_LETTERS, random.randint(3, 5)) + "@" + random.choice(DOMAINS) + ".com"

def random_date(start_year = 1970, end_year = 2008, start_month = 1, end_month = 12):
    year = random.randint(start_year, end_year)
    month = random.randint(start_month, end_month)

    if(month == 2):
        day = random.randint(1, 28)
    elif(month in [4, 6, 9, 11]):
        day = random.randint(1, 30)
    else:
        day = random.randint(1, 31)

    return f"{year}-{month}-{day}"

def random_time():
    hour = str(random.randint(0, 23))
    minute = str(random.randint(0, 59))
    second = str(random.randint(0, 59))
    if len(hour) == 1:
        hour = "0" + hour
    if len(minute) == 1:
        minute = "0" + minute
    if len(second) == 1:
        second = "0" + second
    return f"{hour}:{minute}:{second}"

def random_datetime(start_year = 1970, end_year = 2008):
    date = random_date(start_year, end_year)
    time = random_time()
    return f"{date} {time}"

def random_id(no_of_characters):
    possible_characters = UPPER_LETTERS + NUMBERS
    return random_choice(possible_characters, no_of_characters)
