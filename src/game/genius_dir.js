let directories = {
    localhost: {
        folders: {
            main: {
                files: ['index.html', '6575.dat', 'tests.pwl',
                    'main.html', '8467.dat', 'admin.pwl', 'board.html',
                    '3496.dat', 'super.pwl', 'data.html', '3467.dat',
                    'logs.txt', '1342.asp', '8230.dat', 'scroll.js', '2343.asp',
                    '3524.dat', 'mo.js', '2344.asp', '2309.dat', 'index.css',
                    'help.html', '9275.dat', '3245.asp', '4365.dat', '3454.asp', '4398.dat'
                ],
                folders: {
                    movies: {
                        files: ['john wick', 'fast and furious 3']
                    }
                }
            },
            data: {
                files: ['legal', 'almost legal', 'barely legal', 'illegal',
                    'fbi gonna come illegal', 'windows1', 'windows2', 'windows3',
                    'windows95', 'windows98', 'windowsnt', 'windowsme', 'windows2k',
                    'windowsxp', 'server2k', 'server23', 'office2000', 'officexp',
                    'visual studio', 'C#', 'J#', 'VB'
                ]
            },
            logs: {
                files: "Random.logs()"
            }
        }
        ,
        files: [
            '.temp', '.autoexec', '.bakup', 'shell32.dll',
            'temp.txt', 'setup.exe', 'system32', 'system.exe'
        ],
    }
}
// final solution: storing all path objects individually. then push current dir obj to it.
let host_name = 'localhost'
const path_objects = []

function connect(server) {
    // functionality to connect here..
    console.log('connected to', host_name)
    path_objects.push(directories[host_name])
    return true; // if connected
}
function cd(folder_name) {
    
}
function ls() {

}
let is_connected = connect(host_name)
cd('home')
cd('movies')
ls()
console.log(path_objects)

// What was the point in the above code?
// theory of nested object's this reference
let this_theory = {
    nested: {
        self() { return this },
        files: [1, 2, 3]
    },
    self() { return this },
}
console.log(this_theory.nested.self())
