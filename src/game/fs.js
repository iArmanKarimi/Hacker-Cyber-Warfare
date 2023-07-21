const userIP = '192.168.0.1'

// A function to generate random logs
const generateLogs = (n = 8) => {
    const randomIP = () =>
        Array
            .from({ length: 4 }, () => Math.floor(Math.random() * 255) + 1)
            .join(".");

    const randomUsername = () => {
        const users = ["root", "guest", "user", "admin"];
        return users[Math.floor(Math.random() * users.length)];
    };

    const formatLogFile = () => [`${randomIP()}.log`, randomUsername()]

    return Array
        .from({ length: n }, formatLogFile)
        .push([userIP + '.log', 'root']);
}

// no need for nested folders solution. game has 1 lvl deep folder.
// ls shows in 3xN grid
// add '..' element to [0] of files array
const dirs = {
    localhost: {
        files: ['bash', '.bashrc', '.profile', 'cat', '.catrc', 'passwd'],
    },
    "www.microsoft.com": {
        folders: {
            main: {
                files: ['index.html', '6575.dat', 'tests.pwl',
                    'main.html', '8467.dat', 'admin.pwl', 'board.html',
                    '3496.dat', 'super.pwl', 'data.html', '3467.dat',
                    'logs.txt', '1342.asp', '8230.dat', 'scroll.js', '2343.asp',
                    '3524.dat', 'mo.js', '2344.asp', '2309.dat', 'index.css',
                    'help.html', '9275.dat', '3245.asp', '4365.dat', '3454.asp', '4398.dat'
                ]
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
                files: generateLogs()
            }
        }
        ,
        files: [
            '.temp', '.autoexec', '.bakup', 'shell32.dll',
            'temp.txt', 'setup.exe', 'system32', 'system.exe'
        ],
    },
}

const root = dirs.localhost
let path_addr = root;
// in '/' dir. cd to 'home'
let cd_to = 'home'
function isFolder(path, folder_name) { }
// if (isFolder('', ''))
let cd_folder
cd_folder = path_addr.folders.find(folder => folder.name === cd_to)


/* problem: I need a directory structure to store
files and folders in memory.
The structure of the object must permit us to
easily go through it and manipulate data inside.
*/
/* solution: we have two types of items in path:
files and folders. we need to be able to distinguish
between the two.

{ // root
    files: [...],
    folders: {
        home: {
            files: [...],
            folders: {
                list_of_ips: {...},
                other_home_folder: {...}
            }
        },
        desktop: {...},
    }
}
 */

// > generate loop by ai
