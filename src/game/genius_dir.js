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
let path_arr = [] // it doesn't include '/'
const path_objects = []
const get_current_dir = () => path_objects[path_objects.length - 1]

// actually, IP is used to connect. 
// this is a simple function to show that:
// root dir obj is appended to path objects upon connection to host.
function connect(host_name) {
    // functionality to connect here..
    path_objects.push(directories[host_name])
    // assuming IP and port were correct and host exists,
    // ping is fine, passwd was correct, etc.
    return true;
}
function change_dir(folder_name) {
    let folders = get_current_dir().folders
    path_objects.push(folders[folder_name])
    path_arr.push(folder_name)
    return true; // if folder exists
}

function change_dir_up() {
    if (path_arr.length > 0) {
        path_arr.pop();
        path_objects.pop();
        return true;
    } else {
        console.log("Cannot go up from root directory.");
        return false;
    }
}

let is_connected = connect(host_name)

const format_path = () => `/${path_arr.join('/')}`
let cd_out = ''
console.log(format_path());
cd_out = change_dir('main')
console.log(format_path());
cd_out = change_dir('movies')
console.log(format_path());
cd_out = change_dir_up()
console.log(format_path());
cd_out = change_dir_up()
console.log(format_path());

cd_out = change_dir_up()
console.log('cd.. for root output:', cd_out);

// What was the point in the above code?
// theory of nested object's this reference
// let this_theory = {
//     nested: {
//         self() { return this },
//         files: [1, 2, 3]
//     },
//     self() { return this },
// }
// console.log(this_theory.nested.self())
